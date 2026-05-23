import { useLanguage } from '../context/LanguageContext'

const skillsData = {
  fr: {
    sysadmin: [
      { name: 'Active Directory (AD DS, OU, GPO, PowerShell)', level: 80 },
      { name: 'Windows Server 2019', level: 70 },
      { name: 'TCP/IP, DHCP, DNS, VLAN', level: 85 },
      { name: 'Configuration Cisco (routeurs/switches)', level: 75 },
      { name: 'Virtualisation (VirtualBox)', level: 95 },
      { name: 'Pare-feu & Sécurité réseau', level: 65 }
    ],
    electricite: [
      { name: 'Installation électrique BT', level: 98 },
      { name: 'Lecture de schémas électriques', level: 95 },
      { name: 'Diagnostic et dépannage', level: 90 },
      { name: 'Tableaux électriques', level: 80 },
      { name: 'Normes NF C 15-100', level: 65 }
    ],
    dev: [
      { name: 'React Native', level: 75 },
      { name: 'JavaScript ', level: 60 },
      { name: 'FastAPI (Backend)', level: 70 },
      { name: 'Docker', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel (Hébergement)', level: 90 },
      { name: 'Suite Microsoft Office', level: 95 },
      { name: 'CCTV (NVR, DVR)', level: 95 }
    ]
  },
  en: {
    sysadmin: [
      { name: 'Active Directory (AD DS, OU, GPO, PowerShell)', level: 80 },
      { name: 'Windows Server 2019', level: 70 },
      { name: 'TCP/IP, DHCP, DNS, VLAN', level: 85 },
      { name: 'Cisco Configuration (routers/switches)', level: 75 },
      { name: 'Virtualization (VirtualBox)', level: 95 },
      { name: 'Firewall & Network Security', level: 65 }
    ],
    electricite: [
      { name: 'Low Voltage Electrical Installation', level: 98 },
      { name: 'Electrical Schematics Reading', level: 95 },
      { name: 'Diagnostics & Troubleshooting', level: 90 },
      { name: 'Electrical Panels', level: 80 },
      { name: 'NF C 15-100 Standards', level: 65 }
    ],
    dev: [
      { name: 'React Native', level: 75 },
      { name: 'JavaScript ', level: 60 },
      { name: 'FastAPI (Backend)', level: 70 },
      { name: 'Docker', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel (Hosting)', level: 90 },
      { name: 'Microsoft Office Suite', level: 95 },
      { name: 'CCTV (NVR, DVR)', level: 95 }
    ]
  }
}

const Skills = () => {
  const { language, t } = useLanguage()
  const data = skillsData[language]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.skills.title}</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {t.skills.categories.sysadmin}
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {data.sysadmin.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-2 rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {t.skills.categories.electricite}
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {data.electricite.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-2 rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {t.skills.categories.dev}
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {data.dev.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-2 rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills