import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.about.title}</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
            {t.about.intro} <span className="font-bold text-emerald-600">{t.about.name}</span> {t.about.introText}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
              <h3 className="font-bold mb-2">{t.about.stats.elec}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.about.projectsDone}</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <h3 className="font-bold mb-2">{t.about.stats.incidents}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.about.resolved}</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">80%</div>
              <h3 className="font-bold mb-2">{t.about.stats.resolution}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.about.firstIntervention}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About