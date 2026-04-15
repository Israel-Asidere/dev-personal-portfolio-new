import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonials"
import { Contact } from "./sections/Contact"
import { Navbar } from "./layout/Navbar"
import { Experience } from "./sections/Experience"
import { Footer } from "./layout/Footer"


function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience/>
        <Testimonials />
        <Contact />
        <main>
          <Footer/>
        </main>
      </main>
    </div>
  )
}

export default App
