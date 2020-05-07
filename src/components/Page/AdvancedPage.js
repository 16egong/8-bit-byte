import React from "react";
import "./page.css";
import ByteButton from "../ByteButton";
// import vegan from "../../assets/imgs/vegan.png";

class AdvancedPage extends React.Component {
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
            to="/dietary-preferences"
            label="Back"
            onClick={() => {
              // props.changeActive("advanced");
            }}
          />
        </div>
        <div className="advanced-section">
          
        </div>
      </div>
    );
  }
}

export default AdvancedPage;
