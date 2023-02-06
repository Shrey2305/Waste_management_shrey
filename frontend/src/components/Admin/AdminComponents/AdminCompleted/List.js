import React from 'react'

import "./aa.css"


import t1 from "../../../../Images/team/team-1.jpg"
import t2 from "../../../../Images/team/team-2.jpg"
import t3 from "../../../../Images/team/team-3.jpg"
import t4 from "../../../../Images/team/team-4.jpg"
import t5 from "../../../../Images/team/team-5.jpg"
import t6 from "../../../../Images/team/team-6.jpg"

function List() {
  return (
    <>
    <div class="col-lg-12 " data-aos="fade-right" data-aos-duration="500">
          <div class="card  m-4 bg-transparent hal">
          <div class="row">
        <div class="col-12 p-3">
          <div class="card mb-0 hal2">
          
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead class='bg-dark text-white'>
                    <tr >
                      <th class="text-uppercase text-xxs font-weight-bolder opacity-7">Customer's Name</th>
                      <th class="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2 ps">Type of Waste</th>
                      
                      <th class="text-center text-uppercase text-xxs font-weight-bolder opacity-7">Assigned Employee</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                        
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">John Michael</h6>
                            <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Liquid</p>
                       
                      </td>
                    
                      <td class="align-middle text-center">
                        <span class=" text-xs font-weight-bold">himesh</span>
                      </td>
                     
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                        
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">shrey savani</h6>
                            <p class="text-xs text-secondary mb-0">shreysavani@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Organic Waste</p>
                        
                      </td>
                      
                      <td class="align-middle text-center">
                        <span class=" text-xs font-weight-bold">Suresh</span>
                      </td>
                     
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                       
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Krutik shah</h6>
                            <p class="text-xs text-secondary mb-0">krutik@kutri.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Solid Waste</p>
                        
                      </td>
                     
                      <td class="align-middle text-center">
                        <span class=" text-xs font-weight-bold">Jalpesh</span>
                      </td>
                   
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                        
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Michael Levi</h6>
                            <p class="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Hezardous Waste</p>
                        
                      </td>
                  
                      <td class="align-middle text-center">
                        <span class=" text-xs font-weight-bold">Dhruvin</span>
                      </td>
                   
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Richard Gran</h6>
                            <p class="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Liquid</p>
                        
                      </td>
                 
                      <td class="align-middle text-center">
                        <span class="text-xs font-weight-bold">jay</span>
                      </td>
                    
                    </tr>
                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                        
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Miriam Eric</h6>
                            <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Solid Waste</p>
                        
                      </td>
                     
                      <td class="align-middle text-center">
                        <span class=" text-xs font-weight-bold">parth</span>
                      </td>
                   
                    </tr>


                    <tr className='crt'>
                      <td>
                        <div class="d-flex px-2 py-1">
                          
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">Miriam Eric</h6>
                            <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-xs font-weight-bold mb-0">Organic Waste</p>
                        
                      </td>
                     
                      <td class="align-middle text-center">
                        <span class=" text-xs font-weight-bold">kremill</span>
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
    
    </>
  )
}

export default List