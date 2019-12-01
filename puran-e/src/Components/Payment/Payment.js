import React, { Component } from 'react'
import Header from '../Header/Header'
import { FormGroup } from 'react-bootstrap'


export default class Payment extends Component {
    render() {
        return (
       <div>
           <Header/>
           <div class="container mt-8"></div>
           <div class="row">
           <div class="col-md-12">
               <center>
               <div class="card text-center">
  <div class="card-header">
    Donations
  </div>
  <div class="card-body">
    <h5 class="card-title">Please Select Your Payment Type</h5>
    <p class="card-text">Approved by the Central Bank of Sri Lanka</p>
    <FormGroup>
        <label>Name On Card </label>
        <input type="text"></input>
    </FormGroup>
 
    <a href="#" class="btn btn-primary">Pay</a>
  </div>
  <div class="card-footer text-muted">
    Any Assistance Please call our hotline
  </div>
</div></center></div></div>
           
        </div>

        )
    }
}
