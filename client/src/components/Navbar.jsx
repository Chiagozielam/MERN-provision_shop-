import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-nav-fixed">
          <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand nav-link">
              {/* <img src={logo} alt="store" className="navbar-brand" /> */}
              <h3>Provisions</h3>
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/about" className="nav-link">
                  <h4>About Us</h4>
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link to="/about" className="nav-link">
                  <h4>Categories</h4>
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="ml-auto nav-cart-btn">
              <button type="button" className="btn btn-danger">
                <span className="mr-2">
                  <i className="fas fa-cart-plus" />
                </span>
                Cart
              </button>
            </Link>
          </nav>
        </div>
        <div className="nav-bottom-space" />
      </React.Fragment>
    );
  }
}
