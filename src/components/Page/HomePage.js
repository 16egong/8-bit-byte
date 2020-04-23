import React from "react";
import NavButton from "../ByteButton";
import "./page.css";

const HomePage = () => {
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
      <NavButton to="/register" label="Register" onClick={() => {}} />
      <div className="login-divider">
        <div className="login-divider-line"></div>
        <p className="goblin-text">OR</p>
        <div className="login-divider-line"></div>
      </div>
      <NavButton to="/login" label="Login" onClick={() => {}} />
    </div>
  );
};

export default HomePage;
