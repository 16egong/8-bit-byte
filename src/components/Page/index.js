import React from "react";
import Page from "./Page";
import Home from "./HomePage";
import ByteButton from "../ByteButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  return <Home />;
};

const LoginPage = () => {
  return (
    <Page
      title="Login"
      subtitle="Login to your account"
      backgroundColor="#f2ecec"
    >
      <div className="page-content-container">
        <ByteButton
          label="Login"
          backgroundColor="#efc326"
          textColor="white"
          onClick={() => alert("Goes to World Map")}
        />
        <p>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#efc326" }}>
            Sign Up!
          </Link>
        </p>
        <p>
          Forgot your password/username?{" "}
          <Link style={{ color: "#efc326" }}>Click Here!</Link>
        </p>
      </div>
    </Page>
  );
};

const RegisterPage = () => {
  return (
    <Page
      title="Register"
      subtitle="Register a new acccount"
      backgroundColor="#f2ecec"
    >
      <div className="page-content-container">
        <ByteButton
          label="Register"
          backgroundColor="#efc326"
          textColor="white"
          onClick={() => alert("Goes to Dietary Preferences")}
        />
        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#efc326" }}>
            Login!
          </Link>
        </p>
      </div>
    </Page>
  );
};

export { HomePage, LoginPage, RegisterPage };
export default Page;
