import React from "react";
import ByteLink from "../ByteButton";
import "./page.css";

const HomePage = (props) => {
  console.log(props);
  return (
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
        onClick={() => {
          props.changeActive("register");
        }}
      />
      <div className="login-divider">
        <div className="login-divider-line"></div>
        <p className="goblin-text">OR</p>
        <div className="login-divider-line"></div>n
      </div>
      <ByteLink
        to="/login"
        label="Login"
        onClick={() => {
          props.changeActive("login");
        }}
      />
    </div>
  );
};

export default HomePage;
