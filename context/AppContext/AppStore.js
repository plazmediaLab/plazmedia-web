import { DARK_MODE, SET_ONLINE } from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    darkMode: false,
    online: false
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

  // Provider
  return (
    <AppContext.Provider
      value={{
        darkMode: state.darkMode,
        online: state.online,
        // Methods
        setDarkModeMethod,
        setOnlineMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
