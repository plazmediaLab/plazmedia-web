import { DARK_MODE, SET_LOGGED, SET_ONLINE, SET_SKILLS, SET_THEME, SET_USER } from 'context/types';

export default function AppReducer(state, action) {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkMode: !action.payload ? !state.darkMode : action.payload
      };
    case SET_ONLINE:
      return {
        ...state,
        online: !state.online
      };
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload
      };
    case SET_LOGGED:
      return {
        ...state,
        logged: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    default:
      return state;
  }
}
