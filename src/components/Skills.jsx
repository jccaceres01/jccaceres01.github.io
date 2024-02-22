import html from '../media/img/icons/html.png'
import css from '../media/img/icons/css.png'
import php from '../media/img/icons/php.png'
import js from '../media/img/icons/js.png'
import elementPlus from '../media/img/icons/element.png'
import vuetify from '../media/img/icons/vuetify.png'
import react from '../media/img/icons/react.png'
import vue from '../media/img/icons/vue.png'
import node from '../media/img/icons/node.png'
import expressjs from '../media/img/icons/expressjs.png'
import bootstrap from '../media/img/icons/bootstrap.png'
import tailwind from '../media/img/icons/tailwind.png'
import mysql from '../media/img/icons/mysql.png'
import mongo from '../media/img/icons/mongo.png'
import postgres from '../media/img/icons/postgres.png'
import sqlsvr from '../media/img/icons/sqlsvr.png'
import github from '../media/img/icons/github.png'
import materialUI from '../media/img/icons/materialui.png'
import flowBite from '../media/img/icons/flowbite.png'
import laravel from '../media/img/icons/laravel.png'
import jira from '../media/img/icons/jira.png'
import redux from '../media/img/icons/redux.png'
import reactRouter from '../media/img/icons/react-router.png'
import webpack from '../media/img/icons/webpack.png'
import vite from '../media/img/icons/vite.png'
import nativeScript from '../media/img/icons/nativescript.png'
import sequelize from '../media/img/icons/sequelize.png'
import nextJs from '../media/img/icons/nextjs.svg'
import nuxt from '../media/img/icons/nuxt.svg'

import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

  const skills = [
    { hasProject: false, path_param: 'html', title: 'HTML', icon: html },
    { hasProject: false, path_param: 'css', title: 'CSS', icon: css },
    { hasProject: false, path_param: 'javascript', title: 'JS', icon: js },
    { hasProject: false, path_param: 'react', title: 'React', icon: react },
    { hasProject: false, path_param: 'nextjs', title: 'Next.js', icon: nextJs },
    { hasProject: false, path_param: 'redux', title: 'Redux', icon: redux },
    { hasProject: false, path_param: 'react_router', title: 'React Router', icon: reactRouter },
    { hasProject: false, path_param: 'material_ui', title: 'Material UI', icon: materialUI },
    { hasProject: false, path_param: 'flowbite', title: 'FlowBite', icon: flowBite },
    { hasProject: false, path_param: 'bootstrap', title: 'Bootstrap', icon: bootstrap },
    { hasProject: false, path_param: 'tailwind', title: 'TailWind', icon: tailwind },
    { hasProject: false, path_param: 'vue', title: 'Vue', icon: vue },
    { hasProject: false, path_param: 'nuxt', title: 'Nuxt', icon: nuxt },
    { hasProject: false, path_param: 'element', title: 'Element', icon: elementPlus },
    { hasProject: false, path_param: 'vuetify', title: 'Vuetify', icon: vuetify },
    { hasProject: false, path_param: 'php', title: 'PhP', icon: php },
    { hasProject: false, path_param: 'postgres', title: 'Postgres', icon: postgres },
    { hasProject: false, path_param: 'mysql', title: 'MySql', icon: mysql },
    { hasProject: false, path_param: 'slqserver', title: 'Sql Server', icon: sqlsvr },
    { hasProject: false, path_param: 'mongo', title: 'MongoDB', icon: mongo },
    { hasProject: false, path_param: 'node', title: 'NodeJs', icon: node },
    { hasProject: false, path_param: 'jira', title: 'JiraSoft', icon: jira },
    { hasProject: false, path_param: 'github', title: 'Github', icon: github },
    { hasProject: false, path_param: 'expressjs', title: 'ExpressJs', icon: expressjs },
    { hasProject: false, path_param: 'laravel', title: 'Laravel', icon: laravel },
    { hasProject: false, path_param: 'webpack', title: 'WebPack', icon: webpack },
    { hasProject: false, path_param: 'vite', title: 'Vite', icon: vite },
    { hasProject: false, path_param: 'nativescript', title: 'NativeScript', icon: nativeScript },
    { hasProject: false, path_param: 'react_native', title: 'React Native', icon: react },
    { hasProject: false, path_param: 'sequelize', title: 'Sequelize', icon: sequelize }
  ]

  return (
    <section id="skills" className="flex min-h-screen max-w-screen p-4 pt-40 mx-auto">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto w-full">
        <h1 className="text-6xl text-center font-bold mb-10">{ t('possessive') } <span className="text-blue-400">{ t('skills_title')}</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-4 lg:grid-cols-5 gap-3 w-full">
          {
            skills.map((skill, idx) => {
              return (
                <div className="relative flex flex-col group" key={idx}>
                  <div className="absolute shadow-md shadow-red-200 -z-10 opacity-60 -inset-px blur-sm bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg group-hover:-inset-2 group-hover:duration-200 group-hover:opacity-100 group-hover:blur"></div>
                  <div className="relative backdrop-blur-lg transition-all shadow-sm shadow-blue-600 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">
                      <div className="flex flex-col items-center pt-4 pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg bg-gray-100" src={skill.icon} alt={skill.title} />
                        <h5 className="mb-1 text-xl font-medium text-white dark:text-white">{ skill.title }</h5>
                        <div className="flex md:flex-col md:items-center mt-2 space-x-2">
                        {
                          skill.hasProject && <a href={`/projects/${skill.path_param}`} className="small-fill-btn">{ t('skills_view_projects') }</a>
                        }
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
