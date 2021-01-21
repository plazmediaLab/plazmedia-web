import { DARK_MODE } from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    darkMode: false
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

  // Provider
  return (
    <AppContext.Provider
      value={{
        darkMode: state.darkMode,
        // Methods
        setDarkModeMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
