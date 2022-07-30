import React from 'react'
import './App.css';
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <>
    <header>
      <a href="#" className="logo">< img src="https://thumbs.dreamstime.com/b/shopping-cart-home-appliances-electronics-vector-illus-illustration-114490947.jpg" height="100"width="100" alt="img"/></a>
      <div>
    <ul className="navbar">
        <li>Home</li>

        <li><Link class="nav-link" to="/products">
        <i class="fas fa-fw fa-table"></i>
        <span class="pfont">Products</span></Link></li>

        <li><Link class="nav-link" to="/contacts">
        <i class="fas fa-fw fa-table"></i>
        <span class="cfont">Contact</span></Link></li>

        <button className="btn btn-info"><b><Link class="nav-link" to="/login">
        <i class="fas fa-fw fa-table"></i>
        Login</Link></b></button>

        <button className="btn btn-info"><b><Link class="nav-link" to="/register">
        <i class="fas fa-fw fa-table"></i>
        Signup</Link></b></button>
        </ul>
        
         
         
        </div>
        
        </header>
    </>
  )
}

export default Navbar