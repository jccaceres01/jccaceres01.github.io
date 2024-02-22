import { useEffect } from 'react'

import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView()
        }
      }, 0)
    }
  }, [pathname, hash, key])

  return (
    <div>
      {/* Landing */}
      <Home />
      {/* About */}
      <About />
      {/*  Skills */}
      <Skills />
      {/* Contacts */}
      <Contact />
    </div>
  )
}

export default HomePage
