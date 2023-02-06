import React,{useEffect} from "react";
import "./Content.css";
import c1 from "../../Images/c1.png"

import Aos from "aos";
import "aos/dist/aos.css";



function Content() {
  useEffect(()=>{Aos.init();},[])
  return (
    <>
    <div>
      <h1 className="head m-5 display-4">VOW Waste Recycler</h1>
    </div>

    <div className="Content">
    <div class="container "  data-aos="fade-up" data-aos-delay="200">
   
      <div class="row">
      <div class="col pr-10" id="col21">
     <img src={c1} className="imge1"/>
    
     </div>
     <div class="col col-md-8 lorem" id="col22">
     <p>
     "To build a waste management system which connects Administrator, Customer and waste-collector at one place. System will not be bound to only the specific metro cities. To make a system whose data will help government to identify which type of waste are produced in which particular area and when and where the waste management is breached." </p>
     <p>
     "Our Moto is 3R + 2R"
     "The First three "R" are Refuse,Reduce,Reuse and remaining R are Recycle and Rot.
     Their comes our idea to best solution come up with the website which does not have fixed places to consider as waste management is necessary to remote places too.    </p>

     </div>
     </div>
     </div>





     <div class="dataa bg-white"  data-aos="zoom-out" data-aos-delay="200">VOW is a data platform for the circular economy, allowing brands and organisations to track, measure and improve their circular economy strategy through real-time data.</div>





     <div class="container "  data-aos="fade-up" data-aos-delay="200">
      <div class="row mt-5">
      
     <div class="col col-md-9 lorem" id="col32">
     
     Closing the loop by upcycling and recycling the waste collected into beautiful recycled products that can be use in different ways.Enabling companies & event manager across india to conduct zero waste exhibitions, events to follow the "Clean India Movement".Responsible and Sustainable waste management solution for bulk waste generator like corporate parks, universities, residential complexes & more.
     </div>
     <div class="col" id="col31">
     <img src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzdGUlMjBtYW5hZ2VtZW50JTIwMjAwKjIwMHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"  width="200px" className="imge"/>
    
     </div>
     </div>
     </div>

<div>
 
     <div class="wwd bg-white"  data-aos="fade-up-right" data-aos-delay="200">
      <div> <h1><span class="wwdh">What</span> We do?</h1></div>
      <hr class="dark horizontal m-4"/>
      <div class="mt-5 mb-4 text-center">We provide end-to-end waste management services based on the principles of circular economy. We handle waste sustainably & responsibly for MNCs, tech parks, residential communities and other bulk generating organizations and institutions. Are you a bulk waste generator? Connect with us to ensure that your brand becomes zero waste to landfill.</div></div>
</div>
      </div>
  

  
    </>
  )
}

export default Content






{/* <div class="container ">
   
    
<div class="row">
  <div class="col-6 col-md-9 bg-dark lorem" id="col31">
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
  </div>
  <div class="col-12 col-md-3" id="col32">
   
    <img src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzdGUlMjBtYW5hZ2VtZW50JTIwMjAwKjIwMHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"  width="200px"/>
  </div>
</div>
</div> */}