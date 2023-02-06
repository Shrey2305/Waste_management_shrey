import React from "react";
import logo from "./logo.png";
import './Noauthnavbar.css'
import { Link } from "react-router-dom";
const Noauthnavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky shadow navcss">
  <div class="container-fluid">
    <img  src={logo} class="navbar-brand homeimg" width="5%" href="#" ></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
              <Link className="nav-item  navtext" to="/">
                Home
              </Link>
              <Link className="nav-item  navtext" to="/StatsHome">
                Our Stats
              </Link>
              {/* <Link className="nav-item  navtext" to="/Faq">
                FAQ
              </Link> */}
              <Link className="nav-item  navtext" to="/ContactUs">
                Contact-us
              </Link>
              <Link className="nav-item navtext" to="/SignInSide">
                Sign Up
              </Link>
              <Link className="nav-item  navtext " to="/SignUpside">
                Sign In
              </Link>
         </div>
        </div>
      </div>
    </nav>
  );
};
export default Noauthnavbar;
