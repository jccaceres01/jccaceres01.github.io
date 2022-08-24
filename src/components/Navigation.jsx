import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{  faGlobe  } from '@fortawesome/free-solid-svg-icons';

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  console.log(`Language change to ${lang}`);
}

const Navigation = (props) => {

  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mb-5 sticky-top" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">Julio C.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{ t('nav_home') }</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">{ t('nav_about') }</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/skills">{ t('nav_skills') }</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/works">Works</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">{ t('nav_contact') }</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faGlobe} /><sup>{i18n.language}</sup> 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item" to="#" onClick={() => changeLanguage('es') }><FontAwesomeIcon icon={faGlobe} /> ES</button></li>
                  <li><button className="dropdown-item" to="#" onClick={() => changeLanguage('en') }><FontAwesomeIcon icon={faGlobe} /> EN</button></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;