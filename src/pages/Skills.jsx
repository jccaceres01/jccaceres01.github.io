import html from '../media/img/icons/html.png';
import css from '../media/img/icons/css.png';
import php from '../media/img/icons/php.png';
import java  from '../media/img/icons/java.png';
import js  from '../media/img/icons/js.png';
import react  from '../media/img/icons/react.png';
import vue  from '../media/img/icons/vue.png';
import node  from '../media/img/icons/node.png';
import expressjs  from '../media/img/icons/expressjs.png';
import bootstrap  from '../media/img/icons/bootstrap.png';
import tailwind  from '../media/img/icons/tailwind.png';
import spring  from '../media/img/icons/springboot.png';
import cplusplus  from '../media/img/icons/cplusplus.png';
import mysql  from '../media/img/icons/mysql.png';
import mongo  from '../media/img/icons/mongo.png';
import github  from '../media/img/icons/github.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="container translucid-box animate__animated animate__fadeIn">
        <div className="row">
          <h1 className="text-center">{ t('skills') }</h1>
          <hr />
          <div className="container d-flex">
            <div className="row">
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={html} alt="react" />
                  <strong>HTML</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={css} alt="react" />
                  <strong>CSS</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={php} alt="react" />
                  <strong>PhP</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={java} alt="react" />
                  <strong>Java</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={js} alt="react" />
                  <strong>JS</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={react} alt="react" />
                  <strong>React</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={vue} alt="react" />
                  <strong>Vue</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={node} alt="react" />
                  <strong>NodeJs</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={expressjs} alt="react" />
                  <strong>Express</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={bootstrap} alt="react" />
                  <strong>Bootstrap</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={tailwind} alt="react" />
                  <strong>Tailwind</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={spring} alt="react" />
                  <strong>Spring Boot</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={cplusplus} alt="react" />
                  <strong>C++</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={mysql} alt="react" />
                  <strong>MySql</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={mongo} alt="react" />
                  <strong>Mongo Db</strong>
                </div>
              </div>
              <div className="col">
                <div className="skill-icon d-flex flex-column justify-content-center align-items-center">
                  <img className="img-responsive" src={github} alt="react" />
                  <strong>GitHub</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;
