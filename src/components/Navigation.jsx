import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{  faGlobe  } from '@fortawesome/free-solid-svg-icons';

const Navigation = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">Julio C.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">Work</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#"><FontAwesomeIcon icon={faGlobe} /> ES</Link></li>
                  <li><Link className="dropdown-item" to="#"><FontAwesomeIcon icon={faGlobe} /> EN</Link></li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;