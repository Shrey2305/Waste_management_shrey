import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import './Yourorder.css'

class Yourorder extends Component {
  render() {
    return (
      <>
        <div class="m-3 text-center mt-5 pt-5"><h5><strong>
          Your Orders</strong></h5></div>
        <div class="col-lg-12 " data-aos="fade-right" data-aos-duration="500">
          <div class="card z-index-2 bg-transparent Orders">
            <div class="row">
              <div class="col-12">
                <div class="card mb-4">

                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Type of Waste</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Date of Order</th>
                            {/* <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date of Orer</th> */}
                            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Assigned Employee</th>
                            <th class="text-secondary opacity-7">Employee's contact</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Organic Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle">
                              <p class="text-secondary text-xs font-weight-bold">23/04/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">Yagnik</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+9121212121</p>
                            </td>
                          </tr>
                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Hazardous Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle ">
                              <p class="text-secondary text-xs font-weight-bold">23/04/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">Yagnik</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+9121212121</p>
                            </td>
                          </tr>

                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Recyclable Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle ">
                              <p class="text-secondary text-xs font-weight-bold">20/04/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">Jay</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+91987654321</p>
                            </td>
                          </tr>

                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Liquid Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle ">
                              <p class="text-secondary text-xs font-weight-bold">16/04/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">Krutik</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+91123456789</p>
                            </td>
                          </tr>

                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Solid Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle ">
                              <p class="text-secondary text-xs font-weight-bold">10/04/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">Krutik</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+9123456789</p>
                            </td>
                          </tr>

                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Recyclable Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle">
                              <p class="text-secondary text-xs font-weight-bold">05/04/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">jay</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+91987654321</p>
                            </td>
                          </tr>

                          <tr className='crt'>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Liquid Waste</h6>

                                </div>
                              </div>
                            </td>
                            <td class="align-middle ">
                              <p class="text-secondary text-xs font-weight-bold">29/03/18</p>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0 text-center">Krutik</p>

                            </td>

                            <td>
                              <p class="text-xs font-weight-bold mb-0">+91123456789</p>
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

export default Yourorder;
