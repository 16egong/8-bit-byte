import React from "react";
import Page from "./Page";
import Home from "./HomePage";

const HomePage = () => {
  return <Home />;
};

const LoginPage = () => {
  return <Page title="Login" subtitle="Login to your account" />;
};

const RegisterPage = () => {
  return <Page title="Register" subtitle="Register a new acccount" />;
};

export { HomePage, LoginPage, RegisterPage };
export default Page;
