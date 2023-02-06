import React, { Component } from 'react';
import shry from ".././team-2.jpg"
import Footer from '../../Footer/Footer.js';
import "./delivery.css"
export default class Deliverycomptodo extends Component {
  render() {
    return (
      <>
        <div class="m-3 text-center mt-5 pt-5 "><h5><strong>
          Today Remaining Orders</strong></h5></div>
        <div class="col-lg-12 " data-aos="fade-right" data-aos-duration="500">
          <div class="card z-index-2 delhead">
            <div class="row">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header pb-0 text-center">
                    <h6><strong>Delivery Information</strong></h6>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer's Name</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type of Waste</th>
                            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date of Orer</th>
                            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Area</th>
                            {/* <th class="text-secondary opacity-7">Area</th> */}
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
                              <p class="text-xs font-weight-bold mb-0">Solid</p>

                            </td>

                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                katargam
                              </a>
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
                              <p class="text-xs font-weight-bold mb-0">Liquid</p>

                            </td>

                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Varachha
                              </a>
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
                              <p class="text-xs font-weight-bold mb-0">Organic</p>

                            </td>

                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Adajan
                              </a>
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
                              <p class="text-xs font-weight-bold mb-0">Hazardous</p>

                            </td>

                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                kamrej
                              </a>
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
                              <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                katargam
                              </a>
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
                              <p class="text-xs font-weight-bold mb-0">Solid</p>

                            </td>

                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Adajan
                              </a>
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
                              <p class="text-xs font-weight-bold mb-0">Hazardous</p>
                              
                            </td>

                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                            </td>
                            <td class="align-middle">
                              <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                sarthana
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
        <div><Footer></Footer></div>

      </>
    );
  }
}
