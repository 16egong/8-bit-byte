import React from "react";
import Page from "./Page";
import Home from "./HomePage";
import Diet from "./DietaryPage";

const HomePage = () => {
  return <Home />;
};

const LoginPage = () => {
  return <Page title="Login" subtitle="Login to your account" />;
};

const RegisterPage = () => {
  return <Page title="Register" subtitle="Register a new acccount" />;
};

const DietaryPage = () => {
  return <Diet title="Dietary Preferences" subtitle="Choose dietary preferences" backgroundColor="#FFD953"/>;
};

export { HomePage, LoginPage, RegisterPage, DietaryPage };
export default Page;
