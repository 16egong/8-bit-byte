import React, { Component } from "react";
import Title from "../Title";
import Footer from "../Footer";
import "./page.css";

class Page extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="entire-page">
        <Title title={title} />
        <Footer />
      </div>
    );
  }
}

export default Page;
