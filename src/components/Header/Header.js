import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAction } from "../../redux/reducers/appReducer";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  CHANGE_ACTIVE_PAGE,
} from "../../redux/actionTypes";
import "./header.css";

class Header extends Component {
  render() {
    // These are the dispatch methods
    let { changeActivePage, activePage } = this.props;
    // These are from the Redux store
    let { logout, loggedIn } = this.props;
    return (
      <nav className="header">
        <div className="logo">
          {/* <img /> */} {/* TODO */}
          <h1 className="logo-font">8 Bit Byte</h1>
        </div>
        <nav className="navbar">
          <NavLink
            className={
              "navlink" + (activePage === "home" ? " navlink-selected" : "")
            }
            to="/"
            onClick={() => changeActivePage("home")}
          >
            Home
          </NavLink>
          <NavLink
            className={
              "navlink" + (activePage === "about" ? " navlink-selected" : "")
            }
            to="/about"
            onClick={() => changeActivePage("about")}
          >
            About
          </NavLink>
          <NavLink
            className={
              "navlink" + (activePage === "contact" ? " navlink-selected" : "")
            }
            to="/contact"
            onClick={() => changeActivePage("contact")}
          >
            Contact
          </NavLink>
        </nav>
      </nav>
    );
  }
}

// Ask me (Kevin) if you don't know how to use this stuff please!
// These state and dispatch methods are made available through props
const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    activePage: state.activePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(getAction(USER_LOGGED_OUT));
    },
    changeActivePage: (page) => {
      dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
