import { SET_ONLINE, SET_SKILLS, SET_THEME, SET_LOADING, SET_PERFIL } from 'context/types';

export default function AppReducer(state, action) {
  switch (action.type) {
    case SET_PERFIL:
      return {
        ...state,
        perfil: action.payload
      };
    case SET_ONLINE:
      return {
        ...state,
        online: !state.online
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
}
