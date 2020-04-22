import React from "react";

const styles = {
  title: {
    backgroundColor: "orange",
    width: 650,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
};

const Title = (props) => {
  return (
    <div style={styles.title}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
