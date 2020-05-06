import React, { Component } from "react";
import { connect } from "react-redux";
import { getAction } from "../../../redux/reducers";
import silhouette from "../../../assets/images/silhouette.png";
import "./profile.css";

class ProfileDropdown extends Component {
  constructor() {
    super();

    this.state = {
      displayProfile: false,
    };

    this.showProfile = this.showProfile.bind(this);
    this.hideProfile = this.hideProfile.bind(this);
  }

  showProfile(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideProfile);
    });
  }

  hideProfile() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideProfile);
    });
  }

  render() {
    return (
      <div className="dropdown">
        <img className="button" src={silhouette} onClick={this.showProfile} />

        {this.state.displayMenu ? (
          <ul>
            <li>
              <div className="profile-card">
                <img className="profile-pic" src={silhouette} />
                <div className="profile-name">Tempory Smith</div>
                <div className="profile-points">lots xp</div>
              </div>
            </li>
            <li>
              <a href="dietary-preferences"> Change Preferences</a>
            </li>
            <li>
              <a href="#Log Out">Log Out</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(getAction(USER_LOGGED_OUT));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
