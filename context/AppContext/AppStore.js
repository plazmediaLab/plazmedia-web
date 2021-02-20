import {
  SET_PERFIL,
  SET_PROJECTS,
  SET_ONLINE,
  SET_THEME,
  SET_LOADING,
  SET_LOADING_PROJECTS
} from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    perfil: null,
    projects: [],
    online: false,
    theme: null,
    loading: true,
    loadingProjects: true
  };

  // Reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Methods
  const setPerfilMethod = (data) => {
    dispatch({
      type: SET_PERFIL,
      payload: data
    });
  };
  const setProjectsMethod = (data) => {
    dispatch({
      type: SET_PROJECTS,
      payload: data
    });
  };
  const setOnlineMethod = () => {
    dispatch({
      type: SET_ONLINE
    });
  };
  const setThemeMethod = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme
    });
  };
  const setLoadingMethod = (state) => {
    dispatch({
      type: SET_LOADING,
      payload: state
    });
  };
  const setLoadingProjectsMethod = (state) => {
    dispatch({
      type: SET_LOADING_PROJECTS,
      payload: state
    });
  };

  // Provider
  return (
    <AppContext.Provider
      value={{
        perfil: state.perfil,
        projects: state.projects,
        online: state.online,
        theme: state.theme,
        loading: state.loading,
        loadingProjects: state.loadingProjects,
        // Methods
        setPerfilMethod,
        setProjectsMethod,
        setOnlineMethod,
        setThemeMethod,
        setLoadingMethod,
        setLoadingProjectsMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
