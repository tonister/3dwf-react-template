import { combineReducers } from "redux";
import { ACTIONS, CREATORS } from "./actions.js";

const initialState = {
  language: 0,
  floor: 0
};

function wayfinderApp(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language
      });
    case ACTIONS.SET_FLOOR:
      return Object.assign({}, state, {
        floor: action.floor
      });
    default:
      return state;
  }
}

const wfStates = combineReducers({
  wayfinderApp
});

export default wfStates;
