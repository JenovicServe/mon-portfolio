import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.contact.title}</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t.contact.subtitle}</h3>
            <div className="space-y-4">
              <a href="mailto:jenovickanyinda@zohomail.com" className="flex items-center gap-3 hover:text-emerald-600 transition-colors">
                <Mail className="text-emerald-600" />
                <span>jenovickanyinda@zohomail.com</span>
              </a>
              <a href="https://wa.me/243974663487" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-emerald-600 transition-colors">
                <Phone className="text-emerald-600" />
                <span>+243 974 663 487 (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-600" />
                <span>Lubumbashi, DRC</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">{t.contact.findMe}</h4>
              <div className="flex gap-4 flex-wrap">
                <a href="https://github.com/JenovicServe" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-100 transition-colors text-emerald-600 font-medium">GitHub</a>
                <a href="https://www.linkedin.com/in/jenovic-kanyinda-49910b399" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-emerald-100 transition-colors text-emerald-600 font-medium">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">{t.contact.contactDirect}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t.contact.contactText}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-emerald-600 rounded-full"></span><span>{t.contact.email}</span></div>
              <div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-green-600 rounded-full"></span><span>{t.contact.whatsapp}</span></div>
              <div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-emerald-600 rounded-full"></span><span>{t.contact.response}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact