import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-4 text-center border-t dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-400">
        © 2025 Jenovic Kanyinda - {t.footer.rights}
      </p>
    </footer>
  )
}

export default Footer