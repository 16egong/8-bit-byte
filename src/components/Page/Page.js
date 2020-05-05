import React, { Component } from "react";
import Title from "../Title";
import "./page.css";

class Page extends Component {
  render() {
    let { title, subtitle, backgroundColor, noTitle } = this.props;
    return (
      <div
        className="entire-page"
        style={{
          backgroundColor: backgroundColor,
          gridTemplateRows: noTitle ? "auto" : "150px auto",
        }}
      >
        {!noTitle ? <Title title={title} subtitle={subtitle} /> : null}
        {this.props.children}
      </div>
    );
  }
}

export default Page;
