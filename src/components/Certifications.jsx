import { useLanguage } from '../context/LanguageContext'

const certificationsData = {
  fr: [
    { title: "Cisco CCNA", issuer: "Cisco", link: "https://www.credly.com/badges/91c1a666-bd75-419f-86cc-09a005029783/public_url", skills: ["Réseaux", "Routage", "Switching", "IPv4/IPv6"] },
    { title: "Cisco NTCP", issuer: "Cisco", link: "https://www.credly.com/badges/f562e1e0-3ab3-4ad7-8b89-7cf0b2a892b8/public_url", skills: ["Réseaux", "Câblage", "Télécommunications"] },
    { title: "English for IT", issuer: "Cisco", link: "https://www.credly.com/badges/39a47c41-37a7-4674-b795-bbdd9782193f/public_url", skills: ["Anglais Technique", "IT Terminology"] },
    { title: "DeepLearning.AI", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/records/EK71YQYCCF2Y", skills: ["Machine Learning", "IA", "Deep Learning"] },
    { title: "Google Gemini", issuer: "Google Developers", link: "https://developers.google.com/profile/badges/community/gear", skills: ["IA Générative", "Google AI"] },
    { title: "Administration Active Directory", issuer: "Formation en LAB", link: "#", skills: ["Windows Server", "AD DS", "GPO", "PowerShell"] }
  ],
  en: [
    { title: "Cisco CCNA", issuer: "Cisco", link: "https://www.credly.com/badges/91c1a666-bd75-419f-86cc-09a005029783/public_url", skills: ["Networking", "Routing", "Switching", "IPv4/IPv6"] },
    { title: "Cisco NTCP", issuer: "Cisco", link: "https://www.credly.com/badges/f562e1e0-3ab3-4ad7-8b89-7cf0b2a892b8/public_url", skills: ["Networking", "Cabling", "Telecommunications"] },
    { title: "English for IT", issuer: "Cisco", link: "https://www.credly.com/badges/39a47c41-37a7-4674-b795-bbdd9782193f/public_url", skills: ["Technical English", "IT Terminology"] },
    { title: "DeepLearning.AI", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/records/EK71YQYCCF2Y", skills: ["Machine Learning", "AI", "Deep Learning"] },
    { title: "Google Gemini", issuer: "Google Developers", link: "https://developers.google.com/profile/badges/community/gear", skills: ["Generative AI", "Google AI"] },
    { title: "Active Directory Administration", issuer: "LAB Training", link: "#", skills: ["Windows Server", "AD DS", "GPO", "PowerShell"] }
  ]
}

const Certifications = () => {
  const { language, t } = useLanguage()
  const certifications = certificationsData[language]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t.certifications.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.issuer}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs">{skill}</span>
                  ))}
                </div>
                {cert.link !== "#" && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                    {t.certifications.view}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications