import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const projectsData = [
    {
      title: t.projects.jadmin.title,
      description: t.projects.jadmin.description,
      longDescription: t.projects.jadmin.longDescription,
      tags: ['React', 'FastAPI', 'Docker', 'Networking'],
      link: 'https://jadministrator.vercel.app',
      category: 'devops',
      features: t.projects.jadmin.features
    },
    {
      title: t.projects.quindav.title,
      description: t.projects.quindav.description,
      longDescription: t.projects.quindav.longDescription,
      tags: ['React', 'Tailwind', 'JavaScript', 'Netlify'],
      link: 'https://quindav.netlify.app',
      category: 'web',
      features: t.projects.quindav.features
    }
  ]

  const categories = [
    { id: 'all', name: t.projects.filters.all },
    { id: 'devops', name: t.projects.filters.devops },
    { id: 'web', name: t.projects.filters.web }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.projects.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? `bg-emerald-600 text-white shadow-lg scale-105`
                  : `bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900`
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {filteredProjects.length} {filteredProjects.length > 1 ? t.projects.projectsCountPlural : t.projects.projectsCount}
          </span>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} t={t} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">{t.projects.noProjects}</p>
          </div>
        )}
      </div>
    </section>
  )
}

const ProjectCard = ({ project, t }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.category === 'devops' 
              ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300'
              : 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300'
          }`}>
            {project.category === 'devops' ? 'DevOps' : 'Web'}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">
          {project.description}
        </p>
        
        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          {project.longDescription}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">{t.projects.features} :</h4>
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs"
              >
                ✓ {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            {t.projects.viewProject}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects