import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Home.css'
import { ScrollContainer, ScrollPage, Animator, batch, FadeIn, StickyIn, ZoomIn } from 'react-scroll-motion';
import { color } from "@mui/system";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Info from "../Info/Info";
import SignInSide from "../Signin/Signin";
import { MoveDown } from "@mui/icons-material";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import d1 from "../../Images/d1.jpg";
import d2 from "../../Images/d2.jpg";
import d3 from "../../Images/d3.jpg";
import d4 from "../../Images/d4.jpg";
import d5 from "../../Images/d5.jpg";




export default function Home() {


  useEffect(() => { Aos.init(); }, [])
  return (
    <>

      <div class='homecss'>


        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={d1} className="d-block w-100 im" height='500px' alt="..." />
            </div>
            <div className="carousel-item">
              <img src={d4} className="d-block w-100 im" height='500px' alt="..." />
            </div>
            <div className="carousel-item">
              <img src={d5} className="d-block w-100 im" height='500px' alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <ScrollContainer>
 <ScrollPage page={0}>
  <Animator animation={batch(StickyIn(),FadeIn(),ZoomIn())}>
  </Animator>
  </ScrollPage> 
</ScrollContainer> */}


        <div className="cntnt" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200"> <Content /></div>


        <div > <Info /></div>
        <div class="dataa1 " data-aos="fade-up" data-aos-delay="200">We help companies become more sustainable and progress towards a circular economy
        </div>



        <div>
          <div class="fh1 bg-white text-center position-relative" data-aos="zoom-in" data-aos-delay="200">

            <div class="mt-5 mb-4 display-5" >Having Any Query? 💭 </div>
            <button class="btn btn-success">
              <Link className="nodec text-white" to="/ContactUs">
                Contact Us Now!
              </Link>
            </button>
          </div>



          <Footer /> </div>
      </div>

    </>
  )
}