import React from "react";
import { NavLink } from "react-router-dom";
import Cross from "../images/cross.png";
import "./utils.css";
import "./nav.css";

function NavDropdown({ toggleDropdown }) {
    const linkStyle = {
        textDecoration: 'none'
    };
    
    const crossStyle = {
        position: 'absolute',
        top: '18px',
        right: '20px',
        width: '23px',
        height: '23px',
        cursor: 'pointer'
    };

    return (
        <div className="dropdown">
            <img style={crossStyle} src={Cross} alt="close" onClick={toggleDropdown} />
            <div className="btn-container-dd">
                <NavLink style={linkStyle} to="/" className={({ isActive }) => `nav-btn-dd ${isActive ? "nav-btn-active-dd" : "nav-btn-dd"}`}>
                    Home
                </NavLink>
                <NavLink style={linkStyle} to="/projects" className={({ isActive }) => `nav-btn-dd ${isActive ? "nav-btn-active-dd" : "nav-btn-dd"}`}>
                    Projects
                </NavLink>
                <NavLink style={linkStyle} to="/certificates" className={({ isActive }) => `nav-btn-dd ${isActive ? "nav-btn-active-dd" : "nav-btn-dd"}`}>
                    Certificates
                </NavLink>
                <NavLink style={linkStyle} to="/contact" className={({ isActive }) => `nav-btn-dd ${isActive ? "nav-btn-active-dd" : "nav-btn-dd"}`}>
                    Contact
                </NavLink>
                <p className='purple-btn-dd'>Book a Service</p>
            </div>
        </div>
    );
}

export default NavDropdown;
