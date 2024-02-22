import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

import { useTranslation } from 'react-i18next'
import coding from '../media/img/animated/react.gif'

const Home = () => {
  const { t } = useTranslation()
  const [localCoors, setLocakCoors] = useState({ x: 1000, y: 500 })

  const containerRef = useRef(null)
  const imgRef = useRef(null)

  const handleMouseMove = evt => {
    setLocakCoors({
      x: evt.clientX,
      y: evt.clientY
    })
  }

  useEffect(() => {
    const transforms = (x, y, el) => {
      const box = el.getBoundingClientRect()
      const calcX = -(y - box.y - (box.height / 2)) / 20
      const calcY = (x - box.x - (box.width / 2)) / 20

      const res = `perspective(1200px) rotateX(${calcX}deg) rotateY(${calcY}deg)`
      return res
    }

    const transformElement = (el, xyEl) => {
      el.style.transform = transforms.apply(null, xyEl)
    }

    const xy = [localCoors.x, localCoors.y]
    const pos = xy.concat([imgRef.current])

    transformElement(imgRef.current, pos)
  }, [localCoors.x, localCoors.y])

  return (
    <section id="home" ref={containerRef} className="min-h-screen p-0 m-0 hover:cursor-pretty" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-hero z-10 opacity-5 dark:opacity-100"></div>
      <div className=" relative flex flex-wrap max-w-screen-xl p-4 pt-28 mx-auto z-20">
        <div className="flex flex-col justify-between px-4 md:justify-start md:pt-40 lg:px-0 lg:w-1/2 ">
          <h2 className="text-6xl font-bold xl:my-2">{t('meet_1')}, {t('meet_3')} Julio Caceres</h2>
          <h4 className="text-3xl font-bold text-blue-400 my-5 inline">{t('home_job_title')}</h4>
          <p className="text-left text-lg md:text-3xl lg:text-2xl">{t('home_profile_resume')}</p>
          <div className="flex gap-4 my-4">
            <a href="#about" className="outline-btn">{t('home_about_me_button')}</a>
            <a href="#contact" className="outline-btn">{t('home_contact_me_button')}</a>
          </div>
          <div className="flex gap-4 justify-start xl:my-auto">
            <a className="rounded-full bg-blue-500 text-white p-2 text-center hover:animate-pulse" href="https://www.facebook.com/cutulu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a className="rounded-full bg-blue-500 text-white p-2 text-center hover:animate-pulse" href="https://www.linkedin.com/in/jccaceres/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>

        <div className="hidden md:hidden lg:w-1/2 xl:flex items-center p-2" style={{ backgroundImage: 'url("../media/img/animated/react.gif")' }}>
          <img ref={imgRef} className="ms-12 border border-blue-300 rounded" src={coding} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home
