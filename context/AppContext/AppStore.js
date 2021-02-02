import { DARK_MODE, SET_ONLINE, SET_SKILLS, SET_LOGGED, SET_USER, SET_THEME } from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    darkMode: false,
    online: false,
    skills: [],
    logged: null,
    user: null,
    theme: null
  };

  // Reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Methods
  const setDarkModeMethod = (status) => {
    dispatch({
      type: DARK_MODE,
      payload: status
    });
  };
  const setOnlineMethod = () => {
    dispatch({
      type: SET_ONLINE
    });
  };
  const setSkillsMethod = (data) => {
    dispatch({
      type: SET_SKILLS,
      payload: data
    });
  };
  const setLoggedMethod = (status) => {
    dispatch({
      type: SET_LOGGED,
      payload: status
    });
  };
  const setUserMethod = (data) => {
    dispatch({
      type: SET_USER,
      payload: data
    });
  };
  const setThemeMethod = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme
    });
  };

  // Provider
  return (
    <AppContext.Provider
      value={{
        darkMode: state.darkMode,
        online: state.online,
        skills: state.skills,
        logged: state.logged,
        user: state.user,
        theme: state.theme,
        // Methods
        setDarkModeMethod,
        setOnlineMethod,
        setSkillsMethod,
        setLoggedMethod,
        setUserMethod,
        setThemeMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
