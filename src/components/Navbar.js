import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import NavDropdown from '../components/NavDropdown';
import menu from '../images/menuIcon.png';
import './utils.css';
import './nav.css';

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const bgBlack = {
    backgroundColor: 'black',
    width: '100vw'
  };

  const containerStyle = {
    display: 'flex',
    height: '116px',
    width: '100vw',
    alignItems: 'center',
    // padding: '0 20px',
    border: '2px solid black',
    backgroundColor: 'black',
    position: 'relative' // Ensures absolute positioning inside
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginLeft:'23px'
  };

  const linkStyle = {
    textDecoration: 'none'
  };

  const centerStyle = {
    position: 'absolute',
    display: "flex",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <>
      <nav style={bgBlack}>
        <div className="container" style={containerStyle}>
          <p className="logo" style={logoStyle}>Soham Sinha</p>
          <div className="nav-center" style={centerStyle}>
            <div className='btn-container'>
              <NavLink style={linkStyle} to="/" className={({ isActive }) => `nav-btn ${isActive ? "nav-btn-active" : "nav-btn"}`}>
                Home
              </NavLink>
              <NavLink style={linkStyle} to="/projects" className={({ isActive }) => `nav-btn ${isActive ? "nav-btn-active" : "nav-btn"}`}>
                Projects
              </NavLink>
              <NavLink style={linkStyle} to="/certificates" className={({ isActive }) => `nav-btn ${isActive ? "nav-btn-active" : "nav-btn"}`}>
                Certificates
              </NavLink>
              <NavLink style={linkStyle} to="/contact" className={({ isActive }) => `nav-btn ${isActive ? "nav-btn-active" : "nav-btn"}`}>
                Contact
              </NavLink>
            </div>
          </div>
          {/* <p className='purple-btn book-service'>Book a Service</p> */}
          <div className='book-service'>book a service</div>
          <img className='menu' src={menu} alt='menu' onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
          
          {/* Render dropdown only when isDropdownVisible is true */}
          {isDropdownVisible && <NavDropdown toggleDropdown={toggleDropdown} />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
