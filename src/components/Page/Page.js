import React, { Component } from "react";
import Title from "../Title";
import "./page.css";

class Page extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="entire-page">
        <Title title={title} />
      </div>
    );
  }
}

export default Page;
