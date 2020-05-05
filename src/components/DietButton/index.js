import React from "react";
import Diet from "./DietButton";
// import vegetarian from "../../imgs/vegetarian_icon.png";

const DietButton = (props) => {
  let { type } = props;
  switch (type.toLowerCase()) {
    case "vegan":
      return (
        <Diet
          type={type}
          src="dietary/vegan.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "vegetarian":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "kosher":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "spicy":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "lowfat":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "nonuts":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "halal":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "organic":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    case "glutenfree":
      return (
        <Diet
          type={type}
          src="dietary/vegetarian.png"
          active={props.active}
          onClick={props.onClick}
        />
      );
    default:
      return (
        <Diet
          type="Error"
          src={"error.png"}
          active={false}
          onClick={() => {}}
        />
      );
  }
};

export default DietButton;
