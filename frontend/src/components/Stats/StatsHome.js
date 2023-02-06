import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './StatsHome.css';
import pic2 from '../../Images/2.png';
import pic1 from '../../Images/1.png';
import Footer from '../Footer/Footer';

function StatsHome() {
  return (
    <>
  <div >

        <div class="row dashbordcss">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div class="icon icon-shape bg-danger text-white shadow position-absolute icun" id="icun">
                <CurrencyRupeeIcon ></CurrencyRupeeIcon>
                      </div>
          <div class="card crd2">
        
            <div class="card-header p-3 pt-2 ">
              <div class="text-end pt-1 ">
                <p class="text-sm mb-0 text-capitalize">Today's Order</p>
                <h4 class="mb-0">$53k</h4>
              </div>
            </div>

            <div class="card-footer p-3 bg-danger text-white" >
              <p class="mb-0 text-center text-white"><span class=" text-sm font-weight-bolder ">+55% </span>than last week</p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="icon icon-shape bg-primary text-white shadow position-absolute icun"  id="icun">
                  <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>                  
                  
              </div>


          <div class="card crd2">
            <div class="card-header p-3 pt-2">
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total number of Users</p>
                <h4 class="mb-0">2,300</h4>
              </div>
            </div>
            <div class="card-footer bg-primary p-3">
              <p class="mb-0 text-white"><span class="text-sm font-weight-bolder">+3% </span>than last month</p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div class="icon icon-shape bg-warning text-white shadow position-absolute"  id="icun">
                <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
              </div>
          <div class="card crd2">
            <div class="card-header p-3 pt-2">
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Waste</p>
                <h4 class="mb-0">3,462</h4>
              </div>
            </div>
            <div class="card-footer p-3 bg-warning">
              <p class="mb-0 text-center text-white"><span class=" text-sm font-weight-bolder">-2%</span> than yesterday</p>
            </div>
          </div>
        </div>
      
        <div class="col-xl-3 col-sm-6">
              <div class="icon icon-shape bg-success text-white shadow position-absolute"  id="icun">
                <i class="material-icons opacity-10">
                  < TrendingUpOutlinedIcon></TrendingUpOutlinedIcon>
                </i>
              </div>


          <div class="card crd2">
            <div class="card-header p-3 pt-2">

              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Orders</p>
                <h4 class="mb-0">$103,430</h4>
              </div>
            </div>
            <div class="card-footer p-3 bg-success">
              <p class="mb-0 text-center text-white"><span class=" text-sm font-weight-bolder">+5% </span>than yesterday</p>
            </div>
          </div>
        </div>
      </div>






      <div class='text-center mt-5 mb-5 display-4  '>
        <p><strong>Information About All Types of Waste</strong></p>
      </div>

      <div class="row mt-4 mx-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 crd  ">
            <img src={pic1} height="250vh"  class='m-3' ></img>
            
            <div class="card-body  ">
            <hr class="dark horizontal m-2"/>
              <h6 class="mb-0 text-center h4 text-white bg-success num"> Organic waste</h6>
              <p class="text-sm text-center h5 text-success bg-white num mt-2" >10,12,000</p>
              <hr class="dark horizontal m-0"/>
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <center>Know More</center> <ArrowDropDownIcon></ArrowDropDownIcon>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>"Organic waste"</strong> is any material that is biodegradable and comes from either a plant or an animal. Biodegradable waste is organic material that can be broken
into carbon dioxide, methane or simple organic molecules. Examples of organic waste include green waste, food waste, food-soiled paper, non-hazardous
wood waste, green waste, and landscape and pruning waste.
      </div>
    </div>
  </div>
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2  crd">
            <img src={pic2} height="250vh" className='m-3'></img>
            
            <div class="card-body">


            <hr class="dark horizontal m-2"/>
              <h6 class="mb-0 text-center h4 text-white bg-success num">  Hazardouse Waste </h6>
              <p class="text-sm text-center h5 text-success bg-white num mt-2">5,02,01,000 </p>
              <hr class="dark horizontal m-0"/>
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <center>Know More</center> <ArrowDropDownIcon></ArrowDropDownIcon>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>"Hazardous wastes"</strong> are those that may contain toxic substances generated from industrial, hospital, some types of household wastes. These wastes could be corrosive, inflammable, explosive, or react when exposed to other materials.
      </div>
    </div>
  </div>
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-4 mt-4 mb-3 ">
          <div class="card z-index-2 crd ">
          <img src="https://images.unsplash.com/photo-1606964575099-8fe6f0bf0872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNvbGlkJTIwd2FzdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" height="250vh" class='m-3'></img>
            
            <div class="card-body">

            <hr class="dark horizontal m-2"/>
              <h6 class="mb-0 text-center h4 text-white bg-success num">Solid Waste</h6>
              <p class="text-sm text-center h5 text-success bg-white num mt-2">111,111,111</p>
              <hr class="dark horizontal m-0"/>
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <center>Know More</center> <ArrowDropDownIcon></ArrowDropDownIcon>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>"Solid Waste"</strong> means any garbage or refuse, sludge from a wastewater treatment plant, water supply treatment plant, or air pollution control facility and other discarded material, resulting from industrial, commercial, mining, and agricultural operations, and from community activities
      </div>
    </div>
  </div>
              <div class="d-flex ">
             
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div class="row mx-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 crd">
          <img src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGxpcXVpZCUyMHdhc3RlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class='m-3'></img>
            
            <div class="card-body">


            <hr class="dark horizontal m-2"/>
              <h6 class="mb-0 text-center h4 text-white bg-success num">Liquid Waste</h6>
              <p class="text-sm text-center h5 text-success bg-white num mt-2">101,101,100</p>
              <hr class="dark horizontal m-0"/>
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <center>Know More</center> <ArrowDropDownIcon></ArrowDropDownIcon>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>"Liquid waste"</strong> can be defined as such Liquids as wastewater, fats, oils or grease (FOG), used oil, liquids, solids, gases, or sludges and hazardous household liquids. These liquids that are hazardous or potentially harmful to human health or the environment.
      </div>
    </div>
  </div>
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 mb-4">
          <div class="card z-index-2 crd">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrP3iEIjxZDzhMyqilwE-rA50uXwRoS0W7A&usqp=CAU" height="250vh" className='m-3'></img>
            <div class="card-body">

            <hr class="dark horizontal m-2"/>
              <h6 class="mb-0 text-center h4 text-white bg-success num"> Recyclable Waste </h6>
              <p class="text-sm text-center h5 text-success bg-white num mt-2"> 211,122,123 </p>
              <hr class="dark horizontal m-0"/>
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <center>Know More</center> <ArrowDropDownIcon></ArrowDropDownIcon>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-4 mt-4 mb-3">
          <div class="card z-index-2 crd">
          <img src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b3JnYW5pYyUyMHdhc3RlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" height="250vh" className='m-3'></img>
            
            <div class="card-body">


            <hr class="dark horizontal m-2"/>
              <h6 class="mb-0 text-center h4 text-white bg-success num">Completed Tasks</h6>
              <p class="text-sm text-center h5 text-success bg-white num mt-2">102,111,321</p>
              <hr class="dark horizontal m-0"/>
            <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <center>Know More</center> <ArrowDropDownIcon></ArrowDropDownIcon>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body ">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
              <div class="d-flex ">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div><Footer></Footer></div>
  </div>
    </>
  )
}

export default StatsHome