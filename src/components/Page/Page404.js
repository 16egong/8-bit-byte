import React from "react";
import ByteButton from "../ByteButton";

const Page404 = () => {
  return (
    <div className="login-hero">
      <div style={{ marginBottom: 60 }}>
        <h1 className="goblin-text" style={{ textAlign: "center" }}>
          Error 404{" "}
          <span role="img" aria-label="emoji with open-mouth">
            😮
          </span>
        </h1>
        <h3 className="goblin-text" style={{ textAlign: "center" }}>
          This page doesn't exist yet.
        </h3>
        <ByteButton
          to="/"
          label="Back to Home"
          onClick={() => {
            this.props.changeActive("home");
          }}
        />
      </div>
    </div>
  );
};

export default Page404;
