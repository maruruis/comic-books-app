import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/comic.png';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-white ">
        <div className="container-fluid">
          <img src={Image} alt="Comic Books Logo" className="img-fluid"width={80} />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link active" to="/addcomic">Add Comic</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li>
                
                <li className="nav-item">
                 <Link className="nav-link active" to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
