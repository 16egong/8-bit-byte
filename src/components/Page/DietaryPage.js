import React from "react";
import { connect } from "react-redux";
import { getAction } from "../../redux/reducers";
import {
  CHANGE_DIETARY_PREFERENCE,
  CHANGE_ACTIVE_PAGE,
} from "../../redux/actionTypes";
import DietButton from "../DietButton";
import ByteButton from "../ByteButton";
import "./page.css";
class DietaryPage extends React.Component {
  render() {
    let { preferences, changeDietaryPref } = this.props;
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
            active={preferences.vegan}
            onClick={() => changeDietaryPref("vegan")}
          />
          <DietButton
            type="vegetarian"
            active={preferences.vegetarian}
            onClick={() => changeDietaryPref("vegetarian")}
          />
          <DietButton
            type="kosher"
            active={preferences.kosher}
            onClick={() => changeDietaryPref("kosher")}
          />
          <DietButton
            type="spicy"
            active={preferences.spicy}
            onClick={() => changeDietaryPref("spicy")}
          />
          <DietButton
            type="lowfat"
            active={preferences.lowfat}
            onClick={() => changeDietaryPref("lowfat")}
          />
          <DietButton
            type="nonuts"
            active={preferences.nonuts}
            onClick={() => changeDietaryPref("nonuts")}
          />
          <DietButton
            type="halal"
            active={preferences.halal}
            onClick={() => changeDietaryPref("halal")}
          />
          <DietButton
            type="organic"
            active={preferences.organic}
            onClick={() => changeDietaryPref("organic")}
          />
          <DietButton
            type="glutenfree"
            active={preferences.glutenfree}
            onClick={() => changeDietaryPref("glutenfree")}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let user = state.user;
  return {
    preferences: user.preferences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDietaryPref: (pref) => {
      dispatch(getAction(CHANGE_DIETARY_PREFERENCE, pref));
    },
    changeActivePage: (page) => {
      dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DietaryPage);
