import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
    import logo from '../assets/image/maths.jpg';  // Ensure logo.png is in /src/assets

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid full-width-navbar">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="QuizZone Logo" className="logo-img" />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          
          {/* Centered nav items */}
          <ul className="navbar-nav mx-auto nav-center">
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Search bar on right */}
          <form className="d-flex search-form" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
