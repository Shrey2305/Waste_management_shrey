import React, { Component, useEffect } from 'react';
import "./DashBoard.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from '../../../Footer/Footer.js';

import { Bar,Line } from "react-chartjs-2";
import { useState } from 'react';
import { display } from '@mui/system';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import shry from "../team-2.jpg"
import organic from "../../../../components/wasteimages/organic.jpg";
import hazardous from "../../../../components/wasteimages/hazardous.jpg";
import solid from "../../../../components/wasteimages/solid.jpg";
import liquid from "../../../../components/wasteimages/liquid.jpg";
import recyclable from "../../../../components/wasteimages/recyclable.jpg";

import t1 from "../../../../Images/team/team-1.jpg"
import t2 from "../../../../Images/team/team-2.jpg"
import t3 from "../../../../Images/team/team-3.jpg"
import t4 from "../../../../Images/team/team-4.jpg"
import t5 from "../../../../Images/team/team-5.jpg"
import t6 from "../../../../Images/team/team-6.jpg"

export default function Admintodo()  
{
  
    const [data, setData] = useState([]);
    useEffect(()=>{Aos.init({duration:1000})})
    return (
      <>
      <div class='m-3'>

      
<div class="display m-3 DB pt-5 mt-5">DashBoard</div>
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card crt1">
            <div class="card-body p-3 ">
              <div class="row ">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                    <h5 class="font-weight-bolder mb-0">
                      $53,000
                      <span class="text-success text-sm font-weight-bolder">+55%</span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                <div class="icon icon-shape bg-danger text-white shadow position-absolute" id="adminicun">
                <CurrencyRupeeIcon ></CurrencyRupeeIcon>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card crt1">
            <div class="card-body p-3 ">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">Today's Users</p>
                    <h5 class="font-weight-bolder mb-0">
                      2,300
                      <span class="text-success text-sm font-weight-bolder">+3%</span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                <div class="icon icon-shape bg-primary text-white shadow position-absolute"  id="adminicun">
                  <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>                  
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card crt1">
            <div class="card-body p-3 ">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">New Clients</p>
                    <h5 class="font-weight-bolder mb-0">
                      +3,462
                      <span class="text-danger text-sm font-weight-bolder">-2%</span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                <div class="icon icon-shape bg-warning text-white shadow position-absolute"  id="adminicun">
                <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card crt1">
            <div class="card-body p-3 ">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-capitalize font-weight-bold">Sales</p>
                    <h5 class="font-weight-bolder mb-0">
                      $103,430
                      <span class="text-success text-sm font-weight-bolder">+5%</span>
                    </h5>
                  </div>
                </div>
                <div class="col-4 text-end">
                <div class="icon icon-shape bg-success text-white shadow position-absolute"  id="adminicun">
                <i class="material-icons opacity-10">
                  < TrendingUpOutlinedIcon></TrendingUpOutlinedIcon>
                </i>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


               {/* Chats and data */}
      <div class="row mt-4" data-aos="fade-left">
        <div class="col-lg-5 mb-lg-0 mb-4">
          <div class="card z-index-2 cclr">
            <div class="card-body p-3 ">
              <div class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3  border-radius-lg ">
              <div>
            <Line
             
            height={450}
            width={450}
            options={
              {
                tension:0.3,
                backgroundColor:'black',
                maintainAspectRatio:false,
                
                scales:{
             
                y: {
                  grid:{display:false},
                  beginAtZero: true,
                },
                x: {
                  grid:{display:false},
                  barPercentage: 0.4
              }
              }
              }}
            data={{labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'June'], 
            datasets:[
              {
                label: '# of Users',
                data: [0,5,15,40,60,88],
                backgroundColor:[ 'rgba(255, 99, 132, 0.2)'],
                borderWidth:5,
                borderColor:['gainsboro'],
                fill:true
            
              }
            ] }}
            
            />
        </div>
              </div>
              <h6 class="ms-2 mt-4 mb-0"> Active Users </h6>
              <p class="text-sm ms-2"> (<span class="font-weight-bolder">+2 5%</span>) than last month </p>
              <div class="container border-radius-lg">
                <div class="row">
                  <div class="col-6 py-3 ps-0">
                    <div class="d-flex mb-2">
                      <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                        <svg width="30px"  viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg">   
                    <GroupIcon></GroupIcon>
                        </svg>
                      </div>
                      <p class="text-xs mt-1 mb-0 font-weight-bold">Total Users</p>
                    </div>
                    <h4 class="font-weight-bolder">10K</h4>
                    <div class="progress w-75">
                      <div class="progress-bar bg-dark w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  {/* <div class="col-3 py-3 ps-0">
                  </div> */}
                  
                  <div class="col-6 py-3 ps-0">
                  <div class="d-flex mb-2">
                      <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                      <svg width="30px"  viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <BarChartIcon></BarChartIcon>
                  
                        </svg>
                      </div>
                      <p class="text-xs mt-1 mb-0 font-weight-bold">Increse Last Month</p>
                    </div>
                    <h4 class="font-weight-bolder">2.5K</h4>
                    <div class="progress w-75">
                      <div class="progress-bar bg-dark w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


                               {/* Author Table */}
        <div class="col-lg-7 col-sm-12" data-aos="fade-right">
          <div class="card z-index-2 adminAuth">
          <div class="row">
        <div class="col-12">
          <div class="card mb-4 ">
            <div class="card-header pb-0 text-center AdminHead">
              <h6><strong>Authors table</strong></h6>
            </div>
            <div class="card-body px-0 pt-0 pb-2 AdminTable">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                      {/* <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th> */}
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                      <th class="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={t1} class="avatar avatar-sm me-3" alt="user2" width="50"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">shrey savani</h6>
                            <p class="text-xs text-secondary mb-0">shreysavani@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Front-end</p>
                        <p class="text-xs text-secondary mb-0">Developer</p>
                      </td>
                     
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                      </td>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={t2} class="avatar avatar-sm me-3" alt="user3" width="50"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Krutik shah</h6>
                            <p class="text-xs text-secondary mb-0">krutik@kutri.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Back-End</p>
                        <p class="text-xs text-secondary mb-0">Developer</p>
                      </td>
                  
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                      </td>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={t3} class="avatar avatar-sm me-3" alt="user4" width="50"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Michael Levi</h6>
                            <p class="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Chairman</p>
          
                      </td>
                     
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                      </td>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={t4} class="avatar avatar-sm me-3" alt="user5" width="50"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Richard Gran</h6>
                            <p class="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Manager</p>
                        <p class="text-xs text-secondary mb-0">Executive</p>
                      </td>
                      
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                      </td>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={t5} class="avatar avatar-sm me-3" alt="user6" width="50"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Yagnik Radadiya</h6>
                            <p class="text-xs text-secondary mb-0">yagnik@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Assistant Manager</p>
                        

                      </td>
                   
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                      </td>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>


                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={t6}class="avatar avatar-sm me-3" alt="user6" width="50"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Miriam Eric</h6>
                            <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Supervisor</p>
                        
                      </td>
                    
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                      </td>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>

                   
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>



                             {/* Waste Calculation */}
      <div class="row my-4 ">
        <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
          <div class="card ">
            <div class="card-header pb-0 AdminHead  ">
              <div class="row">
                <div class="col-lg-6 col-7">
                  <h6>Waste Collection Details</h6>
                  <p class="text-sm mb-0">
                    <i class="fa fa-check text-info" aria-hidden="true"></i>
                    <span class="font-weight-bold ms-1 ">100 done</span> last month
                  </p>
                </div>
                <div class="col-lg-6 col-5 my-auto text-end">
                  <div class="dropdown float-lg-end pe-4">
                    <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-secondary"></i>
                    </a>
                    <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-2 AdminTable">
              <div class="table-responsive">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Type of Waste</th>
                      {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Pic</th> */}
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">received (in kg)</th>
                      <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Increment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img src={organic} class="avatar avatar-sm me-3" alt="xd" width="100"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Organic Waste </h6>
                          </div>
                        </div>
                      </td>
                     
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold"> 500 </span>
                      </td>
                      <td class="align-middle">
                        <div class="progress-wrapper w-75 mx-auto">
                          <div class="progress-info">
                            <div class="progress-percentage">
                              <span class="text-xs font-weight-bold">25%</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                          <img src={hazardous} class="avatar avatar-sm me-3" alt="xd" width="100"/>
                      
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Hazardouse Waste</h6>
                          </div>
                        </div>
                      </td>
                     
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold"> 100 </span>
                      </td>
                      <td class="align-middle">
                        <div class="progress-wrapper w-75 mx-auto">
                          <div class="progress-info">
                            <div class="progress-percentage">
                              <span class="text-xs font-weight-bold">10%</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                          <img src={solid} class="avatar avatar-sm me-3" alt="xd" width="100"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Solid Waste</h6>
                          </div>
                        </div>
                      </td>
                      
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">1000 </span>
                      </td>
                      <td class="align-middle">
                        <div class="progress-wrapper w-75 mx-auto">
                          <div class="progress-info">
                            <div class="progress-percentage">
                              <span class="text-xs font-weight-bold">100%</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                          <img src={liquid} class="avatar avatar-sm me-3" alt="xd" width="100"/>
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Liquid Waste</h6>
                          </div>
                        </div>
                      </td>
                     
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold"> 500 </span>
                      </td>
                      <td class="align-middle">
                        <div class="progress-wrapper w-75 mx-auto">
                          <div class="progress-info">
                            <div class="progress-percentage">
                              <span class="text-xs font-weight-bold">25%</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    
                      
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                          <img src={recyclable} class="avatar avatar-sm me-3" alt="xd" width="100"/> 
                          </div>
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Recyclable Waste</h6>
                          </div>
                        </div>
                      </td>
                 
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold"> 1,000 </span>
                      </td>
                      <td class="align-middle">
                        <div class="progress-wrapper w-75 mx-auto">
                          <div class="progress-info">
                            <div class="progress-percentage">
                              <span class="text-xs font-weight-bold">50%</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-info w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

                               
      </div>
      </div>
      </div>
      <div><Footer></Footer></div>
      </>
    );
  }

