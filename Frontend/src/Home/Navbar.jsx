import React from 'react'

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg border-bottom py-3" style={{ paddingLeft: "8%", paddingRight: "10%" }} >


      <img src="/logo.svg" alt="" style={{ width: "15%" }} />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto gap-5 align-items-center">

          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
          <li><i className="fa-solid fa-bars"></i></li>

        </ul>

      </div>

    </nav>

  )
}

export default Navbar