import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import profile from '../media/img/profile.jpg'

import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

import cbEn from '../docs/cv-en.pdf'
import cbEs from '../docs/cv-es.pdf'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen max-w-screen overflow-hidden">
      <div className="max-w-screen-xl">
        <div className="flex flex-col p-4 items-center mx-2 md:mx-6">
          <h2 className="text-6xl font-bold mb-4 lg:mb-6">{t('about_title')} <span className="text-blue-400">{t('noum')}</span></h2>
          <img className="rounded-full mb-4 border-blue-400 border-4 w-2/6 lg:w-1/6" src={profile} alt="profile" />
          <h4 className="text-xl text-blue-400 font-bold">{t('home_job_title')}</h4>
          <p className="text-center text-lg mb-4 md:text-2xl">{t('about_paragraph_1')}</p>
          <a href={(i18n.language === 'en') ? cbEn : cbEs} className="outline-btn" target="_blank" rel="noreferrer">
            <span className="mx-2">{t('about_cv')}</span>
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
