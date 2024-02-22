import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const Navigation = (props) => {
  const [scrollTop, setScrollTop] = useState(null)
  const [navbarTransparent, setNavbarTransparent] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      setScrollTop(window.scrollY)
    })
  }, [])

  useEffect(() => {
    setNavbarTransparent((scrollTop <= 50))
  }, [scrollTop])

  const toggleLangMenu = () => {
    setShowLangMenu(!showLangMenu)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    toggleLangMenu()
    console.log(`Language change href ${lang}`)
  }

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 border-gray-200 transition-colors ${navbarTransparent ? 'bg-transparent' : 'backdrop-blur-md border-b border-slate-700'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/#home" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Julio Caceres</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg border backdrop-blur-md md:backdrop-blur-none dark:backdrop-blur-md md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent">
            <li>
              <Link to="/#home" className="nav-link">{ t('nav_home') }</Link>
            </li>
            <li>
              <Link to="/#about" className="nav-link">{ t('nav_about') }</Link>
            </li>
            <li>
              <Link to="/#skills" className="nav-link">{ t('nav_skills') }</Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link">{ t('nav_portfolio') }</Link>
            </li>
            <li>
              <Link to="/#contact" className="nav-link">{ t('nav_contact') }</Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-start w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                <FontAwesomeIcon icon={faGlobe} />
                <sup>{i18n.language}</sup>
                <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="#9ca3af" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li onClick={() => changeLanguage('es')}>
                      <a href="#_" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" ><FontAwesomeIcon icon={faGlobe} /> ES</a>
                    </li>
                    <li onClick={() => changeLanguage('en')}>
                      <a href="#_" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" ><FontAwesomeIcon icon={faGlobe} /> EN</a>
                    </li>
                  </ul>
              </div>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
