import React, { Component } from "react";
import Title from "../Title/PageTitle";

class Page extends Component {
  render() {
    let props = this.props;
    return (
      <div>
        <Title title={props.title} />
      </div>
    );
  }
}

export default Page;
