import React from "react";
import Page from "./Page";
import Home from "./HomePage";
import Map from "../WorldMap/";
import ByteButton from "../ByteButton";
import { Link } from "react-router-dom";
import Diet from "./DietaryPage";

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
          to="/map"
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
          to="/dietary-preferences"
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

const MapPage = () => {
  return (
    <Page
      title="World Map"
      subtitle="Choose a location"
      backgroundColor="#f2ecec"
    >
      <div className="page-content-container">
        <Map />
      </div>
    </Page>
  );
};

const DietaryPage = () => {
  return (
    <Diet
      title="Dietary Preferences"
      subtitle="Choose dietary preferences"
      backgroundColor="#FFD953"
    />
  );
};

export { Home as HomePage, LoginPage, RegisterPage, MapPage, DietaryPage };
export default Page;
