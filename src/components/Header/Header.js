import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

function Header() {
    return (
        <nav className="header">
            <div className="logo">
                {/* <img /> */} {/* TODO */}
                <h1 className="logo-font">
                    8 Bit Byte
                </h1>
            </div>
            <nav className="navbar">
                <NavLink className ="navlink" to="/home" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink className ="navlink" to="/about" activeClassName="selected">
                    About
                </NavLink>
                <NavLink className ="navlink" to="/contact" activeClassName="selected">
                    Contact
                </NavLink>
            </nav>
        </nav>
            
    );
}

export default Header;