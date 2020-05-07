import React from 'react';
import { Link } from "react-router-dom";

import Page from "./Page";
import Load from "./LoadingPage"
import Diet from "./DietaryPage";
import Advanced from "./AdvancedPage"
import Home from "./HomePage";
import Map from "../WorldMap/";
import Recipe from "../Recipe"
import ByteButton from "../ByteButton";


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

const AdvancedPage = () => {
  return (
    <Page
      title="Advanced Preferences"
      subtitle="Choose advanced dietary preferences"
      backgroundColor="#FFD953"
    >
      <div className="page-content-container">
        <Advanced/>
      </div>
    </Page>
  );
};

const DietaryPage = () => {
  return (
    <Page
      title="Dietary Preferences"
      subtitle="Choose dietary preferences"
      backgroundColor="#FFD953"
    >
      <div className="page-content-container">
        <Diet/>
      </div>
    </Page>
  );
};

const LoadingPage = () => {
  return <Load />
}

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

const RecipePage = () => {
  return (
    <Page
      title="Beginner Recipe"
      subtitle= "Asian Cuisine" //change later to props
      backgroundColor="#f2ecec"
    >
      <div className="page-content-container">
        <Recipe/>
      </div>
    </Page>
  );
};

export { Home as HomePage, AdvancedPage, LoginPage, RegisterPage, DietaryPage, LoadingPage, MapPage, RecipePage };
export default Page;
