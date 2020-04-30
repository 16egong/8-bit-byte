import React from "react";
import DietButton from "../DietButton";
import "./page.css";
import ByteButton from "../ByteButton";
// import vegan from "../../assets/imgs/vegan.png";

class DietaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { type: "vegan", active: false },
        { type: "vegetarian", active: false },
        { type: "kosher", active: false },
        { type: "spicy", active: false },
        { type: "low fat", active: false },
        { type: "no nuts", active: false },
        { type: "gluten free", active: false },
        { type: "organic", active: false },
        { type: "halal", active: false },
      ],
    };
  }

  getActive = (type) => {
    for (let button of this.state.buttons) {
      if (button.type === type) {
        return button.active;
      }
    }
  };

  toggleActive = (type) => {
    let newButtons = this.state.buttons.map((x) =>
      x.type === type ? { type: x.type, active: !x.active } : x
    );
    this.setState({ buttons: newButtons });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="diet-side-menu-buttons">
          <ByteButton
            style={{ color: "blue" }}
            to="/loading"
            label="Finish"
            onClick={() => {
              // props.changeActive("map");
            }}
          />
          <ByteButton
            to="/advanced"
            label="Advanced"
            onClick={() => {
              // props.changeActive("advanced");
            }}
          />
        </div>
        <div className="diet-button-section">
          <DietButton
            type="vegan"
            active={this.getActive("vegan")}
            onClick={() => {
              this.toggleActive("vegan");
            }}
          />
          <DietButton
            type="vegetarian"
            active={this.getActive("vegetarian")}
            onClick={() => {
              this.toggleActive("vegetarian");
            }}
          />
          <DietButton
            type="kosher"
            active={this.getActive("kosher")}
            onClick={() => {
              this.toggleActive("kosher");
            }}
          />
          <DietButton
            type="spicy"
            active={this.getActive("spicy")}
            onClick={() => {
              this.toggleActive("spicy");
            }}
          />
          <DietButton
            type="low fat"
            active={this.getActive("low fat")}
            onClick={() => {
              this.toggleActive("low fat");
            }}
          />
          <DietButton
            type="no nuts"
            active={this.getActive("no nuts")}
            onClick={() => {
              this.toggleActive("no nuts");
            }}
          />
          <DietButton
            type="halal"
            active={this.getActive("halal")}
            onClick={() => {
              this.toggleActive("halal");
            }}
          />
          <DietButton
            type="organic"
            active={this.getActive("organic")}
            onClick={() => {
              this.toggleActive("organic");
            }}
          />
          <DietButton
            type="gluten free"
            active={this.getActive("gluten free")}
            onClick={() => {
              this.toggleActive("gluten free");
            }}
          />
        </div>
      </div>
    );
  }
}

export default DietaryPage;
