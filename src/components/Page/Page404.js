import React from "react";
import ByteButton from "../ByteButton";
import { connect } from "react-redux";
import { getAction } from "../../redux/reducers";
import { CHANGE_ACTIVE_PAGE } from "../../redux/actionTypes";

const Page404 = ({ changeActive }) => {
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
            changeActive("home");
          }}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActive: (page) => dispatch(getAction(CHANGE_ACTIVE_PAGE, page)),
  };
};

export default connect(null, mapDispatchToProps)(Page404);
