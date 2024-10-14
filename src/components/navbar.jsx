import React from 'react';
import "./navbarStyle.css"
import logo from "../assets/SkinClinic.svg"

const Navbar = () => {
  return  <div className="NavbarContainer">
    <div>
        <img src={logo} alt="logo-image" />
    </div>
    <div className="Menu-containers">
        <p>Home</p>
        <p>Services</p>
        <p>Doctors</p>
        <p>Products</p>
        <p>Gallery</p>
    </div>
  </div>;
  
}

export default Navbar;