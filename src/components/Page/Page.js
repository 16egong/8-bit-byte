import React, { Component } from "react";
import Title from "../Title";
import "./page.css";

class Page extends Component {
  render() {
    let { title, subtitle, backgroundColor } = this.props;
    return (
<<<<<<< HEAD
      <div className="entire-page" style={{ backgroundColor: backgroundColor }}>
=======
      <div
        className="entire-page"
        style={{ backgroundColor: backgroundColor }}
      >
>>>>>>> master
        <Title title={title} subtitle={subtitle} />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
