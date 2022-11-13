import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#a8c4cd'
      }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="/navbarLeftAlignExample"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Shop</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Contact</a>
              </li>
                    </ul>
         
      
          </div>
        </div>
        </nav>
    )
  }
}

export default Navbar