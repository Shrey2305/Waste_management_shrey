import React, {useEffect} from "react";
import './Info.css'
import i1 from "../../Images/i1.jpg"
import Aos from "aos";
import "aos/dist/aos.css";

function Info() {

  
  useEffect(()=>{Aos.init();},[])
  return (
    <>
    <div className="information">

    <div className="inf"  data-aos="zoom-out" data-aos-delay="500">Our SERVICES</div>
    <div className="Info">
   
      <div class="row mt-4 mx-2" >


        <div class="col-lg-4 col-md-6 mt-0 mb-4 i1"  data-aos="fade-left" data-aos-delay="500">
          <div class="card z-index-2" >
          <img src={i1} class='m-3'></img>
            

            <div class="card-body">

            <hr class="dark horizontal m-2"/>
            <h4 class="text-secondary text-center">Waste Management Servies</h4>
              <hr class="dark horizontal m-2"/>
              <p>Responsible and Sustainable waste management solution for bulk waste generator like corporate parks, universities, residential complexes & more. </p>
            
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 i1"  data-aos="fade-up" data-aos-delay="1000">
          <div class="card z-index-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrP3iEIjxZDzhMyqilwE-rA50uXwRoS0W7A&usqp=CAU" height="250vh" className='m-3'></img>
            <div class="card-body">

            <hr class="dark horizontal m-2"/>
            <h4 class="text-secondary text-center">Recycled Product</h4>
              <hr class="dark horizontal m-2"/>
              <p>Closing the loop by upcycling and recycling the waste collected into beautiful recycled products that can be use in different ways.</p>
            
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-4 i1 "  data-aos="fade-right" data-aos-delay="1500">
          <div class="card z-index-2">
          <img src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b3JnYW5pYyUyMHdhc3RlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" height="250vh" className='m-3'></img>
            
            <div class="card-body">


            <hr class="dark horizontal m-2"/>
            <h4 class="text-secondary text-center">Zero Waste Campaign</h4>
              <hr class="dark horizontal m-2"/>
              <p>Enabling companies & event manager across india to conduct zero waste exhibitions, events to follow the "Clean India Movement".  </p>
           
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>
      </div>  
</div>
</div>
      </>
  )
}

export default Info;