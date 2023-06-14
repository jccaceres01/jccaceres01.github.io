import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{  faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import{  faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import coding from '../media/img/animated/react.gif';

const Home = () => {

  const { t } = useTranslation();

  return (
    <section id="home" className="flex flex-wrap min-h-screen max-w-screen-xl p-4 pt-40 mx-auto">
      <div className="flex flex-col w-1/2 pt-40">
        <h2 className="text-6xl font-bold my-2">{ t('meet_1')}, {t('meet_3')} Julio Caceres</h2>
        <h4 className="text-3xl font-bold text-blue-400 my-5 animate-pulse">{t('home_job_title')}</h4>
        <p className="text-left text-lg">{ t('home_profile_resume') }</p>
        <div className="flex gap-4 my-4">
          <a href="#about" className="fill-btn">{ t('home_about_me_button') }</a>
          <a href="#contact" className="outline-btn">{ t('home_contact_me_button') }</a>
        </div>
        <div className="flex gap-4 my-auto">
          <a className="rounded-full bg-blue-500 text-white p-2 text-center" href="https://www.facebook.com/cutulu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          <a className="rounded-full bg-blue-500 text-white p-2 text-center" href="https://www.linkedin.com/in/jccaceres/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        </div>
      </div>

      <div className="w-1/2 flex items-center p-2" style={{ backgroundImage: `url("../media/img/animated/react.gif")` }}>
        <img className="ms-12 opacity-50 border border-blue-300 rounded" src={coding} alt="" />
      </div>
    </section>
  )
}

export default Home;
