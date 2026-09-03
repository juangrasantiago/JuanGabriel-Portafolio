"use client"

import { useEffect, useRef } from "react"

const vertexShader = `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
`

const fragmentShader = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  vec3 hash3(vec2 p) {
    vec3 q = vec3(dot(p, vec2(127.1, 311.7)),
                  dot(p, vec2(269.5, 183.3)),
                  dot(p, vec2(419.2, 371.9)));
    return fract(sin(q) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    return mix(mix(dot(hash3(i + vec2(0.0,0.0)).xy, f - vec2(0.0,0.0)),
                   dot(hash3(i + vec2(1.0,0.0)).xy, f - vec2(1.0,0.0)), u.x),
               mix(dot(hash3(i + vec2(0.0,1.0)).xy, f - vec2(0.0,1.0)),
                   dot(hash3(i + vec2(1.0,1.0)).xy, f - vec2(1.0,1.0)), u.x), u.y);
  }

  float fbm(vec2 p, int octaves) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 0.25;
    for (int i = 0; i < 10; i++) {
      if (i >= octaves) break;
      value += amplitude * noise(p * frequency);
      amplitude *= 0.52;
      frequency *= 1.13;
    }
    return value;
  }

  vec2 curl(vec2 p) {
    float eps = 0.5;
    float n1 = fbm(p + vec2(eps, 0.0), 6);
    float n2 = fbm(p - vec2(eps, 0.0), 6);
    float n3 = fbm(p + vec2(0.0, eps), 6);
    float n4 = fbm(p - vec2(0.0, eps), 6);
    return vec2((n3 - n4) / (2.0 * eps), (n2 - n1) / (2.0 * eps));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= u_resolution.x / u_resolution.y;

    float time = u_time * 0.22;

    vec2 curlForce = curl(st * 2.0) * 0.5;
    vec2 flowField = st + curlForce;

    float dist1 = fbm(flowField * 1.5 + time * 1.1, 8) * 0.4;
    float dist2 = fbm(flowField * 2.3 - time * 0.8, 6) * 0.3;
    float dist3 = fbm(flowField * 3.1 + time * 1.6, 4) * 0.2;

    float totalDist = dist1 + dist2 + dist3;

    float streak1 = smoothstep(0.3, 0.7, sin((st.x + totalDist) * 14.0 + time * 2.6) * 0.5 + 0.5);
    float streak2 = smoothstep(0.2, 0.8, sin((st.x + totalDist * 0.7) * 22.0 - time * 1.8) * 0.5 + 0.5);
    float combinedStreaks = streak1 * 0.6 + streak2 * 0.45;

    float shape1 = smoothstep(0.0, 1.0, 1.0 - abs(st.x + totalDist * 0.6));
    float shape2 = smoothstep(0.1, 0.9, 1.0 - abs(st.x + totalDist * 0.4 + sin(st.y * 3.0 + time) * 0.15));
    float finalShape = max(shape1 * 0.8, shape2 * 0.55);

    /* theme palette: near-black green background rising through cyan into signal green */
    vec3 colorDeep = vec3(0.01, 0.06, 0.04);
    vec3 colorCyan = vec3(0.133, 0.827, 0.933);
    vec3 colorBlue = vec3(0.184, 0.659, 1.0);
    vec3 colorGreen = vec3(0.243, 0.949, 0.627);
    vec3 colorLime = vec3(0.639, 1.0, 0.42);

    float gradient = 1.0 - uv.y;
    float colorNoise = fbm(flowField * 3.0 + time * 0.5, 4) * 0.5 + 0.5;

    vec3 finalColor = mix(colorDeep, colorBlue, smoothstep(0.3, 0.5, gradient));
    finalColor = mix(finalColor, colorCyan, smoothstep(0.5, 0.75, gradient));
    finalColor = mix(finalColor, colorGreen, smoothstep(0.75, 1.0, gradient));
    finalColor = mix(finalColor, colorLime, colorNoise * 0.35);

    float pulse1 = sin(time * 2.6 + st.y * 6.0) * 0.5 + 0.5;
    float pulse2 = sin(time * 4.0 - st.y * 8.0) * 0.5 + 0.5;
    float energyPulse = smoothstep(0.3, 0.7, pulse1 * pulse2);

    float intensity = finalShape * combinedStreaks * (1.0 + energyPulse * 0.35);

    vec2 mouse = u_mouse / u_resolution.xy;
    mouse = (mouse - 0.5) * 2.0;
    mouse.x *= u_resolution.x / u_resolution.y;
    float mouseInfluence = max(0.0, 1.0 - length(st - mouse) * 0.6);
    mouseInfluence = smoothstep(0.0, 1.0, mouseInfluence);
    intensity += mouseInfluence * 0.4;

    vec3 result = finalColor * intensity;
    float bloom = smoothstep(0.4, 1.0, intensity) * 0.4;
    result += bloom * colorGreen;

    float vignette = smoothstep(0.2, 1.0, 1.0 - length(uv - 0.5) * 0.85);
    vec3 bgColor = colorDeep * 0.6;
    result = mix(bgColor, result, smoothstep(0.0, 0.4, intensity));
    result *= vignette;

    gl_FragColor = vec4(result, 1.0);
  }
`

export function WebGLFlow({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vert = createShader(gl.VERTEX_SHADER, vertexShader)
    const frag = createShader(gl.FRAGMENT_SHADER, fragmentShader)
    if (!vert || !frag) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, "position")
    const timeLocation = gl.getUniformLocation(program, "u_time")
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
    const mouseLocation = gl.getUniformLocation(program, "u_mouse")

    const mouse = { x: 0, y: 0 }
    const startTime = Date.now()
    let raf = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio, 2)
      mouse.x = (e.clientX - rect.left) * dpr
      mouse.y = (rect.height - (e.clientY - rect.top)) * dpr
    }
    window.addEventListener("pointermove", handlePointerMove)

    const render = () => {
      const time = (Date.now() - startTime) * 0.001
      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
      gl.uniform1f(timeLocation, time)
      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height)
      gl.uniform2f(mouseLocation, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
