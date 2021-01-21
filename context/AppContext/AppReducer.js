import { DARK_MODE } from 'context/types';

export default function AppReducer(state, action) {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };

    default:
      return state;
  }
}
