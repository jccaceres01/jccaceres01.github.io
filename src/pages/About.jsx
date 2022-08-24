import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from  'react-i18next';
import i18n from 'i18next';

import cbEn from '../docs/cv-en.pdf';
import cbEs from '../docs/cv-es.pdf';

const About = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <h1 className="text-center"><FontAwesomeIcon icon={faCircleInfo} className="shadow" id="info-icon" /></h1>
        <h1 className="text-center">{ t('about_title')}</h1>
        <p className="text-justify mx-4">
          { t('about_paragraph_1') }
        </p>
        <p className="text-justify mx-4">
          { t('about_paragraph_2') }
        </p>
      </div>
      <div className="container translucid-box animate__animated animate__fadeIn">
        <div className="row my-5">
          <div className="col-sm-6 px-5">
            <h3 className="mb-4">{ t('about_details') }</h3>
            <table>
              <tbody>
                <tr>
                  <td className="w-25"><strong>{ t('about_details_birthdate') }</strong></td>
                  <td className="w-50">30-06-1989</td>
                </tr>
                <tr>
                  <td><strong>{ t('about_details_phone') }</strong></td>
                  <td>+1 809 852 1175</td>
                </tr>
                <tr>
                  <td><strong>{ t('about_details_email') }</strong></td>
                  <td>jccaceres01@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>{ t('about_details_website') }</strong></td>
                  <td>https://jccaceres01.github.io</td>
                </tr>
                <tr>
                  <td><strong>{ t('about_details_address') }</strong></td>
                  <td>{ t('about_details_address_line1') }</td>
                </tr>
                <tr>
                  <td><strong>{ t('about_details_job_status') }</strong></td>
                  <td><span className="badge bg-info mx-2">FreeLancer</span><span className="badge bg-info mx-2">Open To Work</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <h3 className="mb-4">{ t('about_interest') }</h3>
            <div className="d-flex justify-content-start align-items-start">
              <div className="card bg-dark shadow p-2  border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faGamepad} size="2x" />
                <strong>{ t('about_interest_games') }</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
                <strong>{ t('about_interest_food') }</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faMusic} size="2x" />
                <strong>{ t('about_interest_music') }</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faLinux} size="2x" />
                <strong>Linux</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faFilm} size="2x" />
                <strong>{ t('about_interest_movies') }</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <a href={ (i18n.language === 'en') ? cbEn : cbEs } className="btn btn-outline-light" target="_blank" rel="noreferrer">
              <span className="mx-2">{ t('about_cv') }</span>
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;