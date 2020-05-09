import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  CHANGE_ACTIVE_PAGE,
  CHANGE_DIETARY_PREFERENCE,
  USER_COMPLETED_RECIPE,
  ADD_EXPERIENCE_POINTS,
  CHANGE_ALLERGY,
  CHANGE_MEAT_PREFERENCE,
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
    allergies: {
      peanuts: false,
      eggs: false,
      people: false,
      seafood: false,
      treenuts: false,
      dairy: false,
      soy: false,
      shellfish: false,
    },
    meats: {
      beef: false,
      pork: false,
      chicken: false,
      lamb: false,
      duck: false,
    },
    xp: 0,
    recipes: [],
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
      return initialState;
    case CHANGE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case CHANGE_DIETARY_PREFERENCE:
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
    case CHANGE_ALLERGY:
      return {
        ...state,
        user: {
          ...state.user,
          allergies: {
            ...state.user.allergies,
            [action.payload]: !state.user.allergies[action.payload],
          },
        },
      };
    case CHANGE_MEAT_PREFERENCE:
      return {
        ...state,
        user: {
          ...state.user,
          meats: {
            ...state.user.meats,
            [action.payload]: !state.user.meats[action.payload],
          },
        },
      };
    case USER_COMPLETED_RECIPE:
      if (!state.user.recipes.includes(action.payload)) {
        return {
          ...state,
          user: {
            ...state.user,
            recipes: [...state.user.recipes, action.payload],
          },
        };
      } else {
        return { ...state };
      }

    case ADD_EXPERIENCE_POINTS:
      return {
        ...state,
        user: {
          ...state.user,
          xp: state.user.xp + action.payload,
        },
      };
    default:
      return state;
  }
};

export { actions as getAction };
export default reducers;
