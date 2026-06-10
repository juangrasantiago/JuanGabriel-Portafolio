import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Certifications } from "@/components/certifications"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Labs } from "@/components/labs"
import { Contact, Footer } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Projects />
      <Labs />
      <Contact />
      <Footer />
    </main>
  )
}
