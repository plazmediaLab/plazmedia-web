import { DARK_MODE, SET_ONLINE } from 'context/types';

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

    default:
      return state;
  }
}
