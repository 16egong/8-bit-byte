import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAction } from "../../redux/reducers";
import { USER_LOGGED_IN, CHANGE_ACTIVE_PAGE } from "../../redux/actionTypes";
import ByteButton from "../ByteButton";
import "./page.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeUsername(username) {
    console.log(username);
    this.setState({ username });
  }

  changePassword(password) {
    this.setState({ password });
  }

  render() {
    let { loggedIn, login, changeActivePage } = this.props;
    let { username, password } = this.state;
    return !loggedIn ? (
      <div className="login-container">
        <h2
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            lineHeight: 1.5,
          }}
        >
          Welcome back!
          <br />
          Get ready to do some more cooking!
        </h2>
        <form action="">
          <label>Username:</label>
          <input
            className="login-input"
            type="text"
            placeholder="johnsmith1234"
            name="username"
            onChange={(e) => this.changeUsername(e.target.value)}
            value={username}
          />
          <label>Password:</label>
          <input
            className="login-input"
            type="password"
            placeholder="s3c4etPv$$w0rd"
            name="password"
            onChange={(e) => this.changePassword(e.target.value)}
            value={password}
          />
        </form>
        <ByteButton
          label="Login"
          backgroundColor="#efc326"
          textColor="white"
          to="/map"
          onClick={() => {
            login(username);
            changeActivePage("map");
          }}
        />
        <p>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#efc326" }}>
            Sign Up!
          </Link>
        </p>
        <p>
          Forgot your password/username?{" "}
          <Link to="#" style={{ color: "#efc326" }}>
            Click Here!
          </Link>
        </p>
      </div>
    ) : (
      <div>
        <p>You are already logged in!</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (name) => {
      dispatch(getAction(USER_LOGGED_IN, name));
    },
    changeActivePage: (page) => {
      dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
