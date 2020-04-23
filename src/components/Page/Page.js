import React, { Component } from "react";
import Title from "../Title";
import "./page.css";

class Page extends Component {
  render() {
    let { title, subtitle, backgroundColor } = this.props;
    return (
      <div
        className="entire-page"
        style={{ backgroundColor: { backgroundColor } }}
      >
        <Title title={title} subtitle={subtitle} />
      </div>
    );
  }
}

export default Page;
