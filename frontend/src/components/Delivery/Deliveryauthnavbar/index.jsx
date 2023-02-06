import React from 'react';
import {Link} from 'react-router-dom'
import logo from './logo.png'
import './index.css'
function Deliveryauthnavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky ">
  <div class="container-fluid" >
    <img  src={logo} class="navbar-brand navimg3" width="5%" href="#"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link className="nav-item navtext mr-5 Do" id='home' to="/delivery/dashboard">Pending orders<span className="sr-only"></span></Link>
  {/* <Link className="nav-item nav-link" to="/delivery/myorder">Pending orders</Link> */}
  <Link className="nav-item navtext Do" to="/delivery/mycomporder">Your completed orders</Link>
  {/* <Link className="nav-item nav-link " to="/delivery/query">Raised query</Link> */}
  <a className="nav-item navtext Do" href="/" >logout</a>
         </div>
        </div>
      </div>
    </nav>
  );
}

export default Deliveryauthnavbar;
