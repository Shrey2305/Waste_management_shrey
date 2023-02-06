import React from "react";
import './Footer.css';
import logo from './logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Footer(){
    return(
        <>

  <footer class="text-center text-lg-start text-white c1">



 
   
    <section class="">

      <div class="container text-center text-md-start mt-5 pt-5 txt ">
    
        <div class="row ftr">
         
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <img src={logo} class="logo2"></img>
            <p>
           <h1 class="text">Value of Waste</h1>
            </p>
          </div>
          
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 class="text-uppercase fw-bold">Services</h6>
            <hr
                class="mb-1 mt-0 d-inline-block mx-auto c3"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <p>Waste Management</p>
            </p>
            <p>
              <p>Collective approach</p>
            </p>
            <p>
              <p>Waste Recycle</p>
            </p>
            <p>
              <p>Regularity</p>
            </p>
          </div>
      
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-1 mt-0 d-inline-block mx-auto c3"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-white">Help</a>
            </p>
          </div>
         
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-1 mt-0 d-inline-block mx-auto c3"
                // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> Surat, Gujarat</p>
            <p><i class="fas fa-envelope mr-3"></i> VOW@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +91 9313866084 </p>
            <p><i class="fas fa-print mr-3"></i> +91 8200464425 </p>
          </div>
         
        </div>
      </div>
    </section>

    <section
             class="d-flex justify-content-between p-4 c2"
             >
      
      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
    
      <div>
        <a href="" class="text-white me-4">
          <FacebookIcon></FacebookIcon>

        </a>
        <a href="" class="text-white me-4">
          <TwitterIcon></TwitterIcon>
        </a>
        <a href="" class="text-white me-4">
          <GoogleIcon></GoogleIcon>
        </a>
        <a href="" class="text-white me-4">
          <InstagramIcon></InstagramIcon>
        </a>
        <a href="" class="text-white me-4">
          <LinkedInIcon></LinkedInIcon>
        </a>
        <a href="" class="text-white me-4">
          <GitHubIcon></GitHubIcon>
        </a>
      </div>
   
    </section>

  </footer>


        </>
    )
} 






{/* <div class="text-center" id='foot'>
        <div class="row">
     <div class="col  ">
     <img className="logo2"  src={logo}  alt="First" /><br/>
     <div className="text">
     <b><h1>VALUE OF WASTE</h1></b></div>
     </div>
     <div class="col">
    </div>
    <div class="col ">
      <b>Join us</b><br/>
      to something<br/>
      to something<br/>
      to something<br/>
      to something<br/>
      <br/>
    
      <b>Contact us</b><br/>
      +9876543210
      <br/><br/><br/>

      </div>
     </div>
     </div> */}