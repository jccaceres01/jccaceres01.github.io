import html from '../media/img/icons/html.png';
import css from '../media/img/icons/css.png';
import php from '../media/img/icons/php.png';
import js  from '../media/img/icons/js.png';
import elementPlus  from '../media/img/icons/element.png';
import vuetify  from '../media/img/icons/vuetify.png';
import react  from '../media/img/icons/react.png';
import vue  from '../media/img/icons/vue.png';
import node  from '../media/img/icons/node.png';
import expressjs  from '../media/img/icons/expressjs.png';
import bootstrap  from '../media/img/icons/bootstrap.png';
import tailwind  from '../media/img/icons/tailwind.png';
import mysql  from '../media/img/icons/mysql.png';
import mongo  from '../media/img/icons/mongo.png';
import postgres  from '../media/img/icons/postgres.png';
import sqlsvr  from '../media/img/icons/sqlsvr.png';
import github  from '../media/img/icons/github.png';
import materialUI  from '../media/img/icons/materialui.png';
import flowBite  from '../media/img/icons/flowbite.png';
import laravel  from '../media/img/icons/laravel.png';
import jira  from '../media/img/icons/jira.png';
import redux  from '../media/img/icons/redux.png';
import reactRouter  from '../media/img/icons/react-router.png';
import webpack  from '../media/img/icons/webpack.png';
import vite  from '../media/img/icons/vite.png';

import { useTranslation } from 'react-i18next';

const Skills = () => {

  const { t } = useTranslation();

  const skills = [
    { hasProject: false, path_param: 'html', title: 'HTML', icon: html },
    { hasProject: false, path_param: 'css', title: 'CSS', icon: css },
    { hasProject: false, path_param: 'javascript', title: 'JS', icon: js },
    { hasProject: false, path_param: 'react', title: 'React', icon: react },
    { hasProject: false, path_param: 'redux', title: 'Redux', icon: redux },
    { hasProject: false, path_param: 'react_router', title: 'React Router', icon: reactRouter },
    { hasProject: false, path_param: 'material_ui', title: 'Material UI', icon: materialUI },
    { hasProject: false, path_param: 'flowbite', title: 'FlowBite', icon: flowBite },
    { hasProject: false, path_param: 'bootstrap', title: 'Bootstrap', icon: bootstrap },
    { hasProject: false, path_param: 'tailwind', title: 'TailWind', icon: tailwind },
    { hasProject: false, path_param: 'vue', title: 'Vue', icon: vue },
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
    { hasProject: false, path_param: 'vite', title: 'Vite', icon: vite }
  ];

  return (
    <section id="skills" className="flex min-h-screen max-w-screen-xl p-4 pt-40 mx-auto">
      <div className="flex flex-col items-center justify-center w-full mx-4">
        <h1 className="text-6xl text-center font-bold mb-10">{ t('possessive') } <span className="text-blue-400">{ t('skills_title')}</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-4 lg:grid-cols-5 gap-3 w-full">
          {
            skills.map((skill, idx) => {
              return (
                <div className="w-full bg-white border-2 border-gray-200 rounded-lg shadow hover:border-blue-400 dark:bg-gray-800 dark:border-gray-700" key={idx} >
                    <div className="flex flex-col items-center pb-10">
                      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={skill.icon} alt={skill.title} />
                      <h5 className="mb-1 text-xl font-medium text-blue-400 dark:text-white">{ skill.title }</h5>
                      <div className="flex md:flex-col md:items-center mt-2 space-x-2">
                      {
                        skill.hasProject && <a href={`/projects/${skill.path_param}`} className="small-fill-btn">{ t('skills_view_projects') }</a>
                      }
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

export default Skills;
