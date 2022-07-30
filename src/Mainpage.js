import React from "react";
import "./App.css";

import {Link} from "react-router-dom";


function Mainpage() {
    
  return (
    <>
      <section className="home">
        <div className="main">
          <h1>
            <span className="orange">Looking</span>
            <br />
            for Rent
          </h1>
          <p>
            If you would like to get products on rent at the best price in
            India, you are at the right place. Rent Sewa is the ultimate
            destination to get appliances on rent including camera, laptop and
            more. Our online rental store gives option you to get home
            appliances on rent as well as you can give your products to other on
            rent also. You can rent appliances online at Rent Sewa from your
            home and get delivered to your doorstep.
          </p>
        </div>
        <div className="form-container">
          <div class="input-box2">
            <span><b>Pick-up Date</b></span>
            <input type="date" name="" id=""></input>
          </div>
          <div class="input-box3">
            <span><b>Return Date</b></span>
            <input type="date" name="" id=""></input>
          </div>
          <div class="input-box1">
          <button className="btn btn-primary"><b><Link class="nav-link" to="/products">
        <i class="fas fa-fw fa-table"></i>
        Submit</Link></b></button>
        
          </div>
        </div>
      </section>
    </>
  );
}

export default Mainpage;
