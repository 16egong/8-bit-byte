import React, { Component } from "react";
import { connect } from "react-redux";
import { getAction } from "../../../redux/reducers";
import { Link } from "react-router-dom";
import {
  USER_LOGGED_OUT,
  CHANGE_ACTIVE_PAGE,
} from "../../../redux/actionTypes";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import silhouette from "../../../assets/images/silhouette.png";
import "./profile.css";

class ProfileDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayProfile: false,
    };
  }

  toggleProfile = () => {
    this.setState({ displayProfile: !this.state.displayProfile });
  };

  render() {
    let { user, logout, changeActivePage } = this.props;
    return (
      <div className="profile-dropdown-container">
        <img
          className="profile-button"
          src={silhouette}
          alt="profile icon"
          onClick={() => this.toggleProfile()}
        />
        <div
          className={`profile-dropdown ${
            this.state.displayProfile ? "" : "hidden"
          }`}
        >
          <div className="profile-dropdown-inner-container">
            <img
              className="profile-inner-icon"
              src={silhouette}
              alt="profile silhouette icon"
            />
            <p className="goblin-text small" id="user">
              {user.name}
            </p>
            <p>
              Recipes Completed:{" "}
              <span className="goblin-text small">{user.recipes}</span>
            </p>
            <p>
              Total XP: <span className="goblin-text small">{user.xp}</span>
            </p>
          </div>
          <Link
            to="/"
            onClick={() => {
              this.toggleProfile();
              logout();
              changeActivePage("home");
            }}
            style={{ textDecoration: "none", width: "95%" }}
          >
            <div className="signout-button">
              <FA icon={faSignOutAlt} size="1x" />
              <p className="goblin-text small">Sign Out</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(getAction(USER_LOGGED_OUT));
    },
    changeActivePage: (page) => {
      dispatch(getAction(CHANGE_ACTIVE_PAGE, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);
