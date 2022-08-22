import profile from '../media/img/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{  faLinkedin  } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center pt-5">
        <div className="row">
          <div className="col">
            <div className="card p-4 mt-5 animate__animated animate__fadeIn shadow-lg" id="profile-box">
              <div id="profile-container" className="rounded-circle">
                <img src={profile} alt="" className="rounded-circle" id="profile-pic" width="300px" />
              </div>
              <div id="card-content" className="animate__animated animate__fadeInUp">
                <h1 className="text-center">Julio C. Caceres</h1>
                <h6 className="text-center">Full Stack Web Developer</h6>
                <a href="https://www.linkedin.com/in/jccaceres" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
