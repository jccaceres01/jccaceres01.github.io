import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import cbEn from '../docs/cv-en.pdf';
import cbEs from '../docs/cv-es.pdf';

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center"><FontAwesomeIcon icon={faCircleInfo} className="shadow" id="info-icon" /></h1>
        <h1 className="text-center">About Me</h1>
        <p className="text-justify mx-4">
          Hola, mi nombre es <strong>Julio Caceres</strong>, soy un desarrollador full stack en los ambitos web, desktop y mobile. Tengo alrededor de mas de 7 años de experiencia trabajando para empresas y de manera autonoma en diferentes proyectos
          de varios sectores.
        </p>
        <p className="text-justify mx-4">
          Soy muy dedicado en mi trabajo, me gusta experimental nuevas experiencias y retos en el area. 
        </p>
      </div>
      <div className="container translucid-box animate__animated animate__fadeIn">
        <div className="row my-5">
          <div className="col-sm-12">
            
          </div>
        </div>
        <div className="row my-5">
          <div className="col-sm-6 px-5">
            <h3 className="mb-4">Personal Details</h3>
            <table>
              <tbody>
                <tr>
                  <td className="w-25"><strong>Birthdate</strong></td>
                  <td className="w-50">30-06-1989</td>
                </tr>
                <tr>
                  <td><strong>Phone</strong></td>
                  <td>+1 809 852 1175</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>jccaceres01@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>Website</strong></td>
                  <td>https://jccaceres01.github.io</td>
                </tr>
                <tr>
                  <td><strong>Address</strong></td>
                  <td>Leonaldo Vidal #34, Maimon, Mons. Nouel, Dominican Republic</td>
                </tr>
                <tr>
                  <td><strong>Job Status:</strong></td>
                  <td><span className="badge bg-info mx-2">FreeLancer</span><span className="badge bg-info mx-2">Open To Work</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <h3 className="mb-4">My interests</h3>
            <div className="d-flex justify-content-start align-items-start">
              <div className="card bg-dark shadow p-2  border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faGamepad} size="2x" />
                <strong>Games</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
                <strong>Food</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faMusic} size="2x" />
                <strong>Music</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faLinux} size="2x" />
                <strong>Linux</strong>
              </div>
              <div className="card bg-dark shadow p-2 mx-2 border border-light border-1 d-flex flex-column justify-content-center align-items-center icon-pill">
                <FontAwesomeIcon icon={faFilm} size="2x" />
                <strong>Movies</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <a href={cbEn} className="btn btn-outline-light" target="_blank">
              <span className="mx-2">Download CV</span> 
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;