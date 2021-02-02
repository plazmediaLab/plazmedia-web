import { SET_ONLINE, SET_SKILLS, SET_THEME } from 'context/types';

export default function AppReducer(state, action) {
  switch (action.type) {
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
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };

    default:
      return state;
  }
}
