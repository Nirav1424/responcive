import React from 'react'

function Navbar() {
  return (
    <div>
              <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" >
              Website
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href='/home' >
                    Home
                  </a>
                </li>
               
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href='/about'>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" >
                    Gallry
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  aria-current="page" >
                    Contect Us
                  </a>
                </li>
               
               
              </ul>


              
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar;