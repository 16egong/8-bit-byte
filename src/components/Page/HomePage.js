import React from "react";
import { connect } from "react-redux";
import { getAction } from "../../redux/reducers";
import { CHANGE_ACTIVE_PAGE } from "../../redux/actionTypes";
import ByteLink from "../ByteButton";
import "./page.css";

const HomePage = ({ username, loggedIn, changeActivePage }) => {
  return loggedIn ? (
    <div className="login-hero">
      <div style={{ marginBottom: 60 }}>
        <h1 className="goblin-text" style={{ textAlign: "center" }}>
          8 Bit Byte
        </h1>
        <h3 className="goblin-text" style={{ textAlign: "center" }}>
          Cook a bit -> Eat a bite.
        </h3>
      </div>
      <p>
        Hello {username}, you are logged in.
        <br /> Go start a new recipe!
      </p>
    </div>
  ) : (
    <div className="login-hero">
      <div style={{ marginBottom: 60 }}>
        <h1 className="goblin-text" style={{ textAlign: "center" }}>
          8 Bit Byte
        </h1>
        <h3 className="goblin-text" style={{ textAlign: "center" }}>
          Cook a bit -> Eat a bite.
        </h3>
      </div>
      <ByteLink
        to="/register"
        label="Register"
        onClick={() => changeActivePage("register")}
      />
      <div className="login-divider">
        <div className="login-divider-line"></div>
        <p className="goblin-text">OR</p>
        <div className="login-divider-line"></div>
      </div>
      <ByteLink
        to="/login"
        label="Login"
        onClick={() => {
          changeActivePage("login");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.name,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: (page) => {
      dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
