import { Outlet, Link } from "react-router-dom"; 
import logo from '../images/navbar_icon.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fs-5 bg-light mb-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="50px" height="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 container navbar-items">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact 
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link className="me-5 btn btn-danger" to="#">Login</Link>
        <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      </nav>

    <Outlet />

    <footer className="container fw-lighter">
      <div className="mb-3">
        Also Available on
        <Link className="ms-2" aria-current="page" to="https://www.facebook.com/bassant.mahmoud.56679">
          <FaFacebook />
        </Link>
        <Link className="ms-2" aria-current="page" to="https://www.linkedin.com/in/bassant-mahmoud">
          <FaLinkedinIn />
        </Link>
        <Link className="ms-2" aria-current="page" to="https://github.com/bassant1999">
          <FaGithub />
        </Link>
          
      </div>
      <p>Copyright © 2023 Bassant Mahmoud</p>
    </footer>
    </div>
  )
}

export default Layout

