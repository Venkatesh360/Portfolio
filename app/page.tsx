import "./Page.css"
import { FloatingNav } from "@/components/ui/floating-navbar"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import About from "@/components/About"
import { navItems } from "@/data/data"
import Hero from "@/components/Hero"

function page() {
  return (
    <main>

      <FloatingNav navItems={navItems} />
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}

export default page