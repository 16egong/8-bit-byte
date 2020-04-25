import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="logo">
          {/* <img /> */} {/* TODO */}
          <h1 className="logo-font">8 Bit Byte</h1>
        </div>
        <nav className="navbar">
          <NavLink
            className={
              "navlink" +
              (this.props.active === "home" ? " navlink-selected" : "")
            }
            to="/"
            onClick={() => {
              this.props.changeActive("home");
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={
              "navlink" +
              (this.props.active === "about" ? " navlink-selected" : "")
            }
            to="/about"
            onClick={() => {
              this.props.changeActive("about");
            }}
          >
            About
          </NavLink>
          <NavLink
            className={
              "navlink" +
              (this.props.active === "contact" ? " navlink-selected" : "")
            }
            to="/contact"
            onClick={() => {
              this.props.changeActive("contact");
            }}
          >
            Contact
          </NavLink>
        </nav>
      </nav>
    );
  }
}
