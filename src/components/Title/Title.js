import React from "react";

const styles = {
  title: {
    backgroundColor: "orange"
  }
}

const Title = (props) => {
  return (
    <div style={styles.title}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
