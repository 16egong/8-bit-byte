import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  CHANGE_ACTIVE_PAGE,
  CHANGE_DIETARY_PREFERENCE,
} from "../actionTypes";

const initialState = {
  loggedIn: false,
  activePage: "home",
  user: {
    name: "",
    preferences: {
      vegan: false,
      vegetarian: false,
      kosher: false,
      spicy: false,
      lowfat: false,
      nonuts: false,
      halal: false,
      organic: false,
      glutenfree: false,
    },
    xp: 0,
    recipes: 0,
  },
};

let actions = (action, payload) => {
  switch (action) {
    case USER_LOGGED_OUT:
      return { type: action };
    case USER_LOGGED_IN:
      return { type: action, payload: payload };
    default:
      return { type: action, payload: payload };
  }
};

let reducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        user: { ...state.user, name: action.payload },
      };
    case USER_LOGGED_OUT:
      return { ...state, loggedIn: false };
    case CHANGE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case CHANGE_DIETARY_PREFERENCE:
      console.log(state.user.preferences);
      return {
        ...state,
        user: {
          ...state.user,
          preferences: {
            ...state.user.preferences,
            [action.payload]: !state.user.preferences[action.payload],
          },
        },
      };
    default:
      return state;
  }
};

export { actions as getAction };
export default reducers;
