import React from 'react';
import { FaShoppingCart } from 'react-icons/lib/fa'
import logo from './images/logo.png'

const MainNav = () => {
  return (
    <div className="row">
      <div className="col" />
      <div className="col-8">
        <nav className="navbar navbar-toggleable-md navbar-light">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="">
            <img className='img-fluid logo' src={logo} alt='navLogo' />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="">
                  SHOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  VIDEO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  LOOKBOOK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  BRAND
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  RETAIL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <FaShoppingCart />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col" />
    </div>
  );
};

export default MainNav;
