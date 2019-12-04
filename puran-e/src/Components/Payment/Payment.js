import React, { Component } from 'react'
import Header from '../Header/Header'
import { FormGroup } from 'react-bootstrap'


export default class Payment extends Component {
    render() {
        return (
       <div>
         <div class="row">
           <Header/>
           </div>
      <div className="container mt-5">
        <div class="row">
        <div class="col-md-12">
                    <center>

       
          <div className="login-box">
 
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Select your Payment Method</p>
      <form action="../../index3.html" method="post">

      <div className="row">
      <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i class="fab fa-cc-visa" /></span>
        </div></div>

          <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i class="fab fa-cc-mastercard" /></span>
        </div></div>
        
        <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i class="fab fa-cc-paypal" /></span>
        </div></div>

        <div className="col-12 col-sm-6 col-md-3">
        <div className="info-box">
          <span className="info-box-icon bg-info elevation-1"><i class="fab fa-bitcoin" /></span>
        </div></div>
          </div>


          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Name of the Card" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-signature" />
            </div>
          </div>
        </div>

        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Account Number" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="far fa-credit-card" />
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col">
        <label>Date of Expirey</label>
        </div>
        </div>
        <div class="row">
        <div class="col-4">
                <div className="form-group">
                    <label>Month</label>
                    <select class="form-control">
                        <option value={0}>1</option>
                        <option value={1}>2e</option>
                        <option value={2}>3</option>
                        <option value={3}>4</option>
                        <option value={4}>5</option>
                        <option value={5}>6</option>
                        <option value={6}>7</option>
                        <option value={2}>8</option>
                        <option value={3}>9</option>
                        <option value={4}>10</option>
                        <option value={5}>11</option>
                        <option value={6}>12</option>
                    </select>
                </div>
            </div>
          


            <div class="col-4">
                <div className="form-group">
                    <label>Year</label>
                    <select class="form-control">
                        <option value={0}>2019</option>
                        <option value={1}>2020</option>
                        <option value={2}>2021</option>
                        <option value={3}>2022</option>
                        <option value={4}>2023</option>
                        <option value={5}>2024</option>
                        <option value={6}>2025</option>
                    </select>
                </div>
            </div> 
        </div>
        
        <div className="row">
          <div className="col-4">
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="CVC" />
          <div className="input-group-append">
            <div className="input-group-text">
            </div>
          </div>
        </div>
          </div>
          {/* /.col */}
          <div className="col-8">
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Amount" />
          <div className="input-group-append">
            <div className="input-group-text">
            </div>
          </div>
        </div>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center mb-3">
        <p>- CENTRAL BANK APPROVED -</p>

        <p className="mb-1">
        <a href="#">Payment Policy</a>
      </p>
      <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Remember My Details
              </label>
            </div>
          </div>
          </div>
        <a href="#" className="btn btn-block btn-primary">
        Pay
        </a>
        <a href="#" className="btn btn-block btn-danger">
         Reset
        </a>
      </div>
      {/* /.social-auth-links */}
     
    </div>
    {/* /.login-card-body */}
  </div>

  </div>
  </center>
</div>
{/* /.login-box */}

</div>
      </div>
      </div>
       

        )
    }
}
