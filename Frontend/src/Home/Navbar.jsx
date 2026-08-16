import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const dark_li = ({ isActive }) =>
    isActive ? " nav-link text-dark " : "nav-link text-secondary";


  return (

    <nav className="navbar navbar-expand-lg border-bottom py-3" style={{ paddingLeft: "8%", paddingRight: "10%" }} >


      <NavLink to="/"><img src="/logo.svg" alt="" style={{ width: "30%" }} /></NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto gap-5 align-items-center">

          <li class="nav-item">
            <NavLink className={dark_li} to="/signup">Register</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={dark_li} to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={dark_li} to="/product">Product</NavLink>
          </li>

          <li class="nav-item">
            <NavLink className={dark_li} to="/pricing">Pricing</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className={dark_li} to="/support">Support</NavLink>
          </li>
          <li><i className="fa-solid fa-bars"></i></li>

        </ul>

      </div>

    </nav>

  )
}

export default Navbar