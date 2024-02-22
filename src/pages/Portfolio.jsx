import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import WorkCard from '../components/cards/WorkCard'
// import StackedIcons from '../components/StackedIcons'

// Back-End code mock image
import backend from '../media/img/portfolio/backend/backend.png'
import backend2 from '../media/img/portfolio/backend/backend2.png'

// Sunny Cloudly images import
import sunny1 from '../media/img/portfolio/sunnycloudly/sunny1.png'
import sunny2 from '../media/img/portfolio/sunnycloudly/sunny2.png'
import sunny3 from '../media/img/portfolio/sunnycloudly/sunny3.png'
import sunny4 from '../media/img/portfolio/sunnycloudly/sunny4.png'

// envelope budget images import
import env1 from '../media/img/portfolio/envelopebudget/env1.png'
import env2 from '../media/img/portfolio/envelopebudget/env2.png'
import env3 from '../media/img/portfolio/envelopebudget/env3.png'
import env4 from '../media/img/portfolio/envelopebudget/env4.png'

// Photo caption front-end app images
import phcaption1 from '../media/img/portfolio/photocaption/phcaption1.png'
import phcaption2 from '../media/img/portfolio/photocaption/phcaption2.png'
import phcaption3 from '../media/img/portfolio/photocaption/phcaption3.png'
import phcaption4 from '../media/img/portfolio/photocaption/phcaption4.png'

// Reddit images
import reddit from '../media/img/portfolio/reddit/reddit.png'
import reddit2 from '../media/img/portfolio/reddit/reddit2.png'

// Stock search images
import stocksearch from '../media/img/portfolio/stocksearch/stocksearch.png'
import stocksearch2 from '../media/img/portfolio/stocksearch/stocksearch2.png'
import stocksearch3 from '../media/img/portfolio/stocksearch/stocksearch3.png'
import stocksearch4 from '../media/img/portfolio/stocksearch/stocksearch4.png'

// Stock search images
import barcodeapp1 from '../media/img/portfolio/barcodeapp/barcodeapp1.png'
import barcodeapp2 from '../media/img/portfolio/barcodeapp/barcodeapp2.png'
import barcodeapp3 from '../media/img/portfolio/barcodeapp/barcodeapp3.png'
import barcodeapp4 from '../media/img/portfolio/barcodeapp/barcodeapp4.png'

// Stock search images
import lic1 from '../media/img/portfolio/lic/lic1.png'
import lic2 from '../media/img/portfolio/lic/lic2.png'
import lic3 from '../media/img/portfolio/lic/lic3.png'
import lic4 from '../media/img/portfolio/lic/lic4.png'
import lic5 from '../media/img/portfolio/lic/lic5.png'
// Personal Page images
import per1 from '../media/img/portfolio/personal/personal1.png'
import per2 from '../media/img/portfolio/personal/personal2.png'
import per3 from '../media/img/portfolio/personal/personal3.png'
import per4 from '../media/img/portfolio/personal/personal4.png'

/**
 * TechIcons
 */
// import html from '../media/img/icons/html.png'
// import css from '../media/img/icons/css.png'
// import php from '../media/img/icons/php.png'
// import js from '../media/img/icons/js.png'
// import elementPlus from '../media/img/icons/element.png'
// import vuetify from '../media/img/icons/vuetify.png'
import react from '../media/img/icons/react.png'
import vue from '../media/img/icons/vue.png'
// import node from '../media/img/icons/node.png'
import expressjs from '../media/img/icons/expressjs.png'
import bootstrap from '../media/img/icons/bootstrap.png'
import tailwind from '../media/img/icons/tailwind.png'
// import mysql from '../media/img/icons/mysql.png'
// import mongo from '../media/img/icons/mongo.png'
import postgres from '../media/img/icons/postgres.png'
// import sqlsvr from '../media/img/icons/sqlsvr.png'
// import github from '../media/img/icons/github.png'
import materialUI from '../media/img/icons/materialui.png'
import flowBite from '../media/img/icons/flowbite.png'
import laravel from '../media/img/icons/laravel.png'
// import jira from '../media/img/icons/jira.png'
import redux from '../media/img/icons/redux.png'
import reactRouter from '../media/img/icons/react-router.png'
// import webpack from '../media/img/icons/webpack.png'
import vite from '../media/img/icons/vite.png'
import nativeScript from '../media/img/icons/nativescript.png'
import sequelize from '../media/img/icons/sequelize.png'


const Portfolio = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="home" className="flex flex-wrap min-h-screen max-w-screen-xl p-4 pt-40 mx-auto">
      <div className="flex flex-col">
        <h2 className="text-6xl font-bold xl:my-2">{t('possessive_single')} <span className="text-blue-400">{t('portfolio_title')}</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8  py-6 px-4 items-center justify-center ">
          {/* Sunny coudly */}
          <WorkCard
            title="Sunny Cloudly"
            description={t('portfolio_sunny_description')}
            repo="https://github.com/jccaceres01/sunnycloudly"
            imgs={[sunny1, sunny2, sunny3, sunny4]}
            techs={[react, redux, reactRouter, bootstrap]} />
          {/* Personal Page */}
          <WorkCard
            title={t('portfolio_personal_title')}
            description={t('portfolio_personal_description')}
            repo="https://github.com/jccaceres01/sunnycloudly"
            imgs={[per1, per2, per3, per4]}
            techs={[react, redux, reactRouter, tailwind, flowBite]} />
          {/* Envelope Budget client */}
          <WorkCard
            title="Envelope Budget client"
            description={t('portfolio_envelope_description')}
            repo="https://github.com/jccaceres01/envelope-budget"
            imgs={[env1, env2, env3, env4]}
            techs={[react, redux, reactRouter, materialUI]} />
          {/* Envelope Budget backend */}
          <WorkCard
            title="Envelope Budget Back-End"
            description={t('portfolio_envelope_backend_description')}
            repo="https://github.com/jccaceres01/envelope-budget"
            imgs={[backend, backend2]}
            techs={[postgres, expressjs]} />
          {/* Photo Caption Front */}
          <WorkCard
            title="Photo Caption Contest Front"
            description={t('portfolio_envelope_photo_caption_front_description')}
            repo="https://github.com/jccaceres01/photo_caption_front"
            imgs={[phcaption1, phcaption2, phcaption3, phcaption4]}
            techs={[react, reactRouter, tailwind, vite, redux]} />
          {/* Photo Caption Back-End */}
          <WorkCard
            title="Photo Caption Contest Back-End"
            description={t('portfolio_envelope_photo_caption_front_description')}
            repo="https://github.com/jccaceres01/photo_caption_contest"
            imgs={[backend, backend2]}
            techs={[expressjs, postgres, sequelize]} />
          {/* Simple Reddit Client */}
          <WorkCard
            title="Simple Reddit client"
            description={t('portfolio_reddit_description')}
            repo="https://github.com/jccaceres01/reddit_client"
            imgs={[reddit, reddit2]}
            techs={[react, reactRouter, redux]} />
          {/* Stock Search */}
          <WorkCard
            title="Stock Search"
            description={t('portfolio_stocksearch_description')}
            repo="https://github.com/jccaceres01/stocksearch"
            imgs={[stocksearch, stocksearch2, stocksearch3, stocksearch4]}
            techs={[laravel, vue]} />
          {/* BarcodeApp */}
          <WorkCard
            title="Sococo WMS Barcode App"
            description={t('portfolio_barcodeapp_description')}
            repo="https://github.com/jccaceres01/barcodeapp"
            imgs={[barcodeapp1, barcodeapp2, barcodeapp3, barcodeapp4]}
            techs={[nativeScript, vue]} />
          {/* BarcodeApp */}
          <WorkCard
            title="Sococo WMS Barcode API"
            description={t('portfolio_barcodeapi_description')}
            repo="https://github.com/jccaceres01/barcodeapi"
            imgs={[backend, backend2]}
            techs={[laravel]} />
          {/* Licencias */}
          <WorkCard
            title="Licencias Sococo"
            description={t('portfolio_lic_description')}
            repo="https://github.com/jccaceres01/licencias"
            imgs={[lic1, lic2, lic3, lic4, lic5]}
            techs={[laravel, vue]} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
