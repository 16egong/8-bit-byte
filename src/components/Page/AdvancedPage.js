import React from "react";
import "./page.css";
import ByteButton from "../ByteButton";
// import vegan from "../../assets/imgs/vegan.png";

class AdvancedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allergies: [
        { type: "Peanuts", active: false },
        { type: "Eggs", active: false },
        { type: "People", active: false },
        { type: "Seafood", active: false },
        { type: "Tree nuts", active: false },
        { type: "Milk", active: false },
        { type: "Soy Beans", active: false },
        { type: "Shellfish", active: false },
        { type: "School", active: false },
      ],
      meats: [
        { type: "Beef", active: false },
        { type: "Pork", active: false },
        { type: "Chicken", active: false },
        { type: "Lamb", active: false },
        { type: "Duck", active: false },
        { type: "Guinea Pig", active: false },
      ],
    };
  }

  // getActive = (type) => {
  //   for (let allergy of this.state.allergies) {
  //     if (allergy.type === type) {
  //       return allergy.active;
  //     }
  //   }
  // };

  // toggleActive = (type) => {
  //   let newAllergies = this.state.allergies.map((x) =>
  //     x.type === type ? { type: x.type, active: !x.active } : x
  //   );
  //   this.setState({ allergies: newAllergies });
  // };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="diet-side-menu-buttons">
          <ByteButton
            style={{ color: "orange" }}
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
          <div className="allergy-section">
            <p>Allergies: </p>
            <div className="allergy-list">
              
                {this.state.allergies.map((x) => (
                  <div className="allergy-item">
                    <input type="checkbox" />
                    <p>{x.type}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="meat-section">
            <p>Meats to avoid: </p>
            <div className="meat-list">
              {this.state.meats.map((x) => (
                <div className="meat-item">
                  <input type="checkbox" />
                  <p>{x.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvancedPage;
