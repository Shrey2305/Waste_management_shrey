import React from 'react';
import {Link } from 'react-router-dom'
import logo from './logo.png'
import './nav1.css'
function Adminauthnavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav1 shadow navcss sticky">
    <img className="logo1"  src={logo}  alt="First" />
{/* <Link className="navbar-brand" to="#">VOW.com</a> */}
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse"></div>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
<div className="navbar-nav">
  
  <Link className="nav-item nav-link text-dark" id='home' to="/admin/dashboard">Dashboard<span className="sr-only"></span></Link>
  <Link className="nav-item nav-link text-dark" to="/admin/myorder">Todays orders</Link>
  <Link className="nav-item nav-link text-dark" to="/admin/myneworder">Completed orders</Link>
  {/* <Link className="nav-item nav-link " to="/admin/query">Raised query</Link> */}
  <a className="nav-item nav-link text-dark" href="/" >Logout</a>
  </div>
  <div className="collapse navbar-collapse"></div>
  {/* <div className="icons"><LinkccountCircleRoundedIcon sx={{ fontSize: "43px" }} /></div> */}
</div>
</nav>
  );
}

export default Adminauthnavbar;
