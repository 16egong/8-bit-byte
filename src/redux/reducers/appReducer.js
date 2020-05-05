import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  CHANGE_ACTIVE_PAGE,
} from "../actionTypes";

const initialState = {
  loggedIn: false,
  activePage: "home",
  user: {},
};

let actions = (action, payload) => {
  switch (action) {
    case USER_LOGGED_OUT:
      return { type: action };
    case USER_LOGGED_IN:
      return { type: action };
    case CHANGE_ACTIVE_PAGE:
      return { type: action, payload: payload };
    default:
      return { type: "ERROR", payload: payload };
  }
};

let reducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, loggedIn: true };
    case USER_LOGGED_OUT:
      return { ...state, loggedIn: false };
    case CHANGE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    default:
      return state;
  }
};

export { actions as getAction };
export default reducers;
