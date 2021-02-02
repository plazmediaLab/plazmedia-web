import { SET_ONLINE, SET_SKILLS, SET_THEME } from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    online: false,
    skills: [],
    theme: null
  };

  // Reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Methods
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
        online: state.online,
        skills: state.skills,
        theme: state.theme,
        // Methods
        setOnlineMethod,
        setSkillsMethod,
        setThemeMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
