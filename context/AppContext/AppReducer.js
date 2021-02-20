import {
  SET_ONLINE,
  SET_THEME,
  SET_LOADING,
  SET_PERFIL,
  SET_LOADING_PROJECTS,
  SET_PROJECTS
} from 'context/types';

export default function AppReducer(state, action) {
  switch (action.type) {
    case SET_PERFIL:
      return {
        ...state,
        perfil: action.payload
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload
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
    case SET_LOADING_PROJECTS:
      return {
        ...state,
        loadingProjects: action.payload
      };

    default:
      return state;
  }
}
