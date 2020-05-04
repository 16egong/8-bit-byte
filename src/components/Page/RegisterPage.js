import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAction } from "../../redux/reducers";
import { USER_LOGGED_IN, CHANGE_ACTIVE_PAGE } from "../../redux/actionTypes";
import ByteButton from "../ByteButton";
import "./page.css";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeUsername(username) {
    this.setState({ username });
  }

  changeEmail(email) {
    this.setState({ email });
  }

  changePassword(password) {
    this.setState({ password });
  }

  render() {
    let { loggedIn, login, changeActivePage } = this.props;
    let { username, password, email } = this.state;
    return !loggedIn ? (
      <div className="login-container">
        <h2
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            lineHeight: 1.5,
          }}
        >
          Get ready for a cooking adventure!
        </h2>
        <form action="">
          <label>Username:</label>
          <input
            className="login-input"
            type="text"
            placeholder="Pick something cool"
            name="username"
            onChange={(e) => this.changeUsername(e.target.value)}
            value={username}
          />
          <label>Email:</label>
          <input
            className="login-input"
            type="text"
            placeholder="yourname@email.com"
            name="email"
            onChange={(e) => this.changeEmail(e.target.value)}
            value={email}
          />
          <label>Password:</label>
          <input
            className="login-input"
            type="password"
            placeholder="s3c4etPv$$w0rd"
            name="text"
            onChange={(e) => this.changePassword(e.target.value)}
            value={password}
          />
        </form>
        <ByteButton
          label="Register"
          backgroundColor="#efc326"
          textColor="white"
          to="/dietary-preferences"
          onClick={() => {
            login(username);
            changeActivePage("dietary");
          }}
        />
        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#efc326" }}>
            Login!
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
