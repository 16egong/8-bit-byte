import React from "react";
import Page from "./Page";

const HomePage = () => {
  return (
    <div>
      <Page title="Home" />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <Page title="About" />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <Page title="Contact" />
    </div>
  );
};

export { HomePage, AboutPage, ContactPage };
export default Page;
