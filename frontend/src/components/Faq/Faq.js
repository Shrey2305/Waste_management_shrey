import React, { useState } from 'react'
import "./Faq.css"
import GeneralQ from './GeneralQ';
import AboutWaste from './AboutWaste';
import MyAccount from './MyAccount';
import MyOrder from './MyOrder';
import newUpdate from './newUpdate';
import Security  from './Security';
import Footer from '../Footer/Footer';


function Faq() {

const [toggleState , setToggleState] = useState(1);
const toggleTab = (index)=>
{
  setToggleState(index);
}


  return (
    <>
    <div class="display-5 text-center mt-5 text-success pt-5"><strong><em>Help Center</em></strong></div>


    <div class="faqh1 bg-dark text-white">
  <div class="">Frequently Asked Questions </div>
  </div>



  <div class="container">
  <div class="row">
    <div class="col-2">
    <div class="row">
    <div class='col'>

  <div class="card text-center faq2">
  <div class={toggleState===1?"card-body btn bg-success":"card-body btn"} onClick={()=>toggleTab(1)}>
    <p class="card-text GQ">General Questions</p>

  </div>
</div>

<div class="card text-center faq2" >
  <div class={toggleState===2?"card-body btn bg-success":"card-body btn"}  onClick={()=>toggleTab(2)}>
    <p class="card-text">About Waste</p>

  </div>
</div>

<div class="card text-center faq2">
  <div class={toggleState===3?"card-body btn bg-success":"card-body btn"}  onClick={()=>toggleTab(3)}>
    <p class="card-text">My Order</p>
  </div>
</div>

<div class="card text-center faq2">
  <div class={toggleState===4?"card-body btn bg-success":"card-body btn"}  onClick={()=>toggleTab(4)}>
    <p class="card-text">Managing My Account</p>
  </div>
</div>

<div class="card text-center faq2">
  <div class={toggleState===5?"card-body btn bg-success":"card-body btn"}  onClick={()=>toggleTab(5)}>
    <p class="card-text">Safety and Security</p>
  </div>
</div>

<div class="card text-center faq2">
  <div class={toggleState===6?"card-body btn bg-success":"card-body btn"}  onClick={()=>toggleTab(6)}>
    <p class="card-text">What's New</p>
  </div>
</div>
    </div>


</div>
    </div>


    <div className='col-10'>
    {toggleState===1 ?
      <div className="mt-3  ">
    <GeneralQ></GeneralQ>
    </div>
:""}


{toggleState===2?
    <div className="mt-3 ">
     <AboutWaste></AboutWaste>
    </div>
:""}

{toggleState===3?
    <div className="mt-3 ">
     <MyOrder></MyOrder>
    </div>
:""}

{toggleState===4?
    <div className="mt-3 ">
     <MyAccount></MyAccount>
    </div>
:""}

{toggleState===5?
    <div className="mt-3 ">
     <Security></Security>
    </div>
:""}

{toggleState===6?
    <div className="mt-3 ">
    <newUpdate></newUpdate>
    </div>
:""}





</div>
    </div>

</div>
<div><Footer></Footer></div>
    </>
  )
}


export default Faq
