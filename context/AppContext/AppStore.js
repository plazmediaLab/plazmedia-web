import { SET_PERFIL, SET_ONLINE, SET_SKILLS, SET_THEME, SET_LOADING } from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    perfil: null,
    online: false,
    theme: null,
    loading: true
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

  // Provider
  return (
    <AppContext.Provider
      value={{
        perfil: state.perfil,
        online: state.online,
        theme: state.theme,
        loading: state.loading,
        // Methods
        setPerfilMethod,
        setOnlineMethod,
        setThemeMethod,
        setLoadingMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
