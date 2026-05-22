import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t, language } = useLanguage()
  
  // Les rôles viennent maintenant des traductions
  const roles = t.hero.roles
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1))
          setTypingSpeed(100)
        } else {
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(100)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed])

  return (
    <section id="hero" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Photo de profil */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-600 shadow-xl bg-emerald-100">
              <img 
                src="/profil-jenovic.jpeg" 
                alt="Jenovic Kanyinda"
                className="w-full h-full object-cover opacity-95"
              />
            </div>
            {/* Overlay de dégradé */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-600/30 via-transparent to-transparent"></div>
            {/* Petit cercle décoratif - indicateur actif */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl mb-8">
          <span className="text-gray-600 dark:text-gray-400">
            {language === 'fr' ? 'Je suis ' : 'I am '}
          </span>
          <span className="text-emerald-600 font-bold min-h-[60px] inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          {t.hero.description}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            {t.hero.contactBtn}
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
          >
            {t.hero.projectsBtn}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero