import React, { Component } from 'react';
import pic1 from "./team-2.jpg"
import pic2 from "./team-2.jpg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Footer from '../Footer/Footer';
import organic from "../../components/wasteimages/organic.jpg";
import hazardous from "../../components/wasteimages/hazardous.jpg";
import solid from "../../components/wasteimages/solid.jpg";
import liquid from "../../components/wasteimages/liquid.jpg";
import recyclable from "../../components/wasteimages/recyclable.jpg";
import general from "../../components/wasteimages/general.jpg";

export default class DeliveryDashboard extends Component {
  render() {
    return (
      <>
  
      <div class='text-center pt-5   mt-5 mb-5 display-4 text-success  '>
        <p><strong>Your Pending Orders</strong></p>
      </div>

        <div class="row ">
          <div class="col-sm-4">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Organic waste order's</h5>
              <img src={organic} class="card-img-top" alt="..."></img>
              <div class="card-body">
            
                <ul class="list-group my-2">
                  <li class="list-group-item">Your Remaining <strong>Number</strong> of Organic waste order :- 5</li>
                 
                </ul>  
                <button href="#" class="btn btn-success d-block mx-auto">
                  notify consumer
                </button>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Hazardous waste order's</h5>
              <img src={hazardous} class="card-img-top" alt="..."></img>
              <div class="card-body">
              
                <ul class="list-group my-2">
                  <li class="list-group-item">Your Remaining <strong>Number</strong> of Hazardous waste order :-1</li>
                  
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  notify consumer
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Solid waste order's</h5>
              <img src={solid} class="card-img-top" alt="..."></img>
              <div class="card-body">
              
                <ul class="list-group my-2">
                  <li class="list-group-item">Your Remaining <strong>Number</strong> of Solid waste order :- 6</li>
                  
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  notify consumer
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">liquid waste order's</h5>
              <img src={liquid} class="card-img-top" alt="..."></img>
              <div class="card-body">
              
                <ul class="list-group my-2">
                  <li class="list-group-item">Your Remaining <strong>Number</strong> of Liquid waste order :- 0</li>
                 
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  notify consumer
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Recyclable waste order's</h5>
              <img src={recyclable} class="card-img-top" alt="..."></img>
              <div class="card-body">
              
                <ul class="list-group my-2">
                  <li class="list-group-item">Your Remaining <strong>Number</strong> of Recyclable waste order :- 2</li>
              
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  notify consumer
                </button>
              </div>
            </div>
          </div>
       
        </div>

      <div><Footer></Footer></div>
      </>
    );
  }
}
