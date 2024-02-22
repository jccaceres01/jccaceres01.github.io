import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const goTo = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-100 dark:bg-blue-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span>{t('footer_writeme')}: <a href="mailto:jccaceres01@gmail.com" className="mr-4 hover:underline md:mr-6 ">jccaceres01@gmail.com</a></span>
          <a href="#home" onClick={goTo} className="mr-4 hover:underline md:mr-6 ">{t('footer_gotop')}</a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 {t('footer_rights')}.</span>
      </div>
    </footer>
  )
}

export default Footer
