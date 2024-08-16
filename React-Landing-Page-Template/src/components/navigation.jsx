import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
           <a className="navbar-brand page-scroll" href="#page-top">
          SNKM ROOMS
          </a>{" "}
          <img src="/images/logo-color.png" alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
         
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>
            
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#rooms" className="page-scroll">
                Rooms
              </a>
            </li>
            
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <button href=" " className="page-scroll btn btn-primary">
                <Link to="/login" style={{
                 textDecoration: 'none',
                 color: 'inherit',
                 '&:hover': {
                   textDecoration: 'none'}
                }}>Login</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
