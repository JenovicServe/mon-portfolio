import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'        // ← AJOUTE
import ScrollAnimation from './components/ScrollAnimation' // ← AJOUTE

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />
      
      <ScrollAnimation delay={100}>
        <About />
      </ScrollAnimation>
      
      <ScrollAnimation delay={100}>
        <Projects />
      </ScrollAnimation>
      
      <ScrollAnimation delay={100}>
        <Skills />
      </ScrollAnimation>
      
      <ScrollAnimation delay={100}>
        <Certifications />
      </ScrollAnimation>
      
      <ScrollAnimation delay={100}>
        <Contact />
      </ScrollAnimation>
      
      <Footer />
      <ScrollToTop />  {/* ← AJOUTE */}
    </div>
  )
}

export default App