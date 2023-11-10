import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-white ">
        <div className="container-fluid">
          <h4 className='text-primary'>COMIC BOOKS</h4>
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
