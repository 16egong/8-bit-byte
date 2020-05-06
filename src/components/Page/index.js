import React from "react";
import { Link } from "react-router-dom";

import Page from "./Page";
import Load from "./LoadingPage";
import Diet from "./DietaryPage";
import Login from "./LoginPage";
import Register from "./RegisterPage";
import Home from "./HomePage";
import Map from "../WorldMap/";
import Recipe from "../Recipe";
import About from "./AboutPage";
import Contact from "./ContactPage";

const LoginPage = () => {
  return (
    <Page
      title="Login"
      subtitle="Login to your account"
      backgroundColor="#f2ecec"
    >
      <div className="page-content-container">
        <Login />
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
        <Register />
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
        <Diet />
      </div>
    </Page>
  );
};

const LoadingPage = () => {
  return <Load />;
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

const RecipeSelectionPage = () => {
  return (
    <Page noTitle backgroundColor="#f2ecec">
      <div className="page-content-container">
        <Recipe />
      </div>
    </Page>
  );
};

export {
  Home as HomePage,
  LoginPage,
  RegisterPage,
  DietaryPage,
  LoadingPage,
  MapPage,
  RecipeSelectionPage,
  About as AboutPage,
  Contact as ContactPage,
};
export default Page;
