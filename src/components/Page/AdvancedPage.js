import React from "react";
import "./page.css";
import { connect } from "react-redux";
import {
  CHANGE_MEAT_PREFERENCE,
  CHANGE_ALLERGY,
  CHANGE_ACTIVE_PAGE,
} from "../../redux/actionTypes";
import { getAction } from "../../redux/reducers";
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
        { type: "Treenuts", active: false },
        { type: "Dairy", active: false },
        { type: "Soy", active: false },
        { type: "Shellfish", active: false },
      ],
      meats: [
        { type: "Beef", active: false },
        { type: "Pork", active: false },
        { type: "Chicken", active: false },
        { type: "Lamb", active: false },
        { type: "Duck", active: false },
      ],
    };
  }

  render() {
    let {
      allergies,
      meats,
      changeActivePage,
      changeAllergy,
      changeMeatPref,
    } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <div className="diet-side-menu-buttons">
          <ByteButton
            style={{ color: "orange" }}
            to="/loading"
            label="Finish"
            onClick={() => {
              changeActivePage("map");
            }}
          />
          <ByteButton
            to="/dietary-preferences"
            label="Back"
            onClick={() => {
              changeActivePage("dietary");
            }}
          />
        </div>
        <div className="advanced-section">
          <div className="allergy-section">
            <p>Allergies: </p>
            <div className="allergy-list">
              {this.state.allergies.map((x) => (
                <div className="allergy-item">
                  <input
                    type="checkbox"
                    checked={allergies[x.type.toLowerCase()]}
                    onClick={() => changeAllergy(x.type.toLowerCase())}
                  />
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
                  <input
                    type="checkbox"
                    checked={meats[x.type.toLowerCase()]}
                    onClick={() => changeMeatPref(x.type.toLowerCase())}
                  />
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

const mapStateToProps = (state) => {
  let user = state.user;
  return {
    allergies: user.allergies,
    meats: user.meats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMeatPref: (pref) => {
      dispatch(getAction(CHANGE_MEAT_PREFERENCE, pref));
    },
    changeAllergy: (pref) => {
      dispatch(getAction(CHANGE_ALLERGY, pref));
    },
    changeActivePage: (page) => {
      dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedPage);
