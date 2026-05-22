import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'  // ← AJOUTER
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />  {/* ← AJOUTER */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App