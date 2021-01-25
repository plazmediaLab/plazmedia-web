import { DARK_MODE, SET_ONLINE, SET_SKILLS } from 'context/types';
import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const AppStore = ({ children }) => {
  // Initial state
  const initialState = {
    darkMode: false,
    online: false,
    skills: [
      {
        id: '1',
        frontend: [
          { id: '1', name: 'Html5' },
          { id: '2', name: 'Ccs3, Flexbox, Css Grid' },
          { id: '3', name: 'Javascript' },
          { id: '4', name: 'React' },
          { id: '5', name: 'Next Js' },
          { id: '6', name: 'Gatsby Js' },
          { id: '7', name: 'TailwindCSS' },
          { id: '8', name: 'Style Component' },
          { id: '9', name: 'Git' }
        ]
      },
      {
        id: '2',
        backend: [
          { id: '1', name: 'Node Js' },
          { id: '2', name: 'Express' },
          { id: '3', name: 'Firebase' },
          { id: '4', name: 'MongoDB' },
          { id: '5', name: 'SSR' },
          { id: '6', name: 'APIs' },
          { id: '7', name: 'HTTP' }
        ]
      },
      {
        id: '3',
        graphic_design: [
          { id: '1', name: 'Photoshop' },
          { id: '1', name: 'Illustrator' },
          { id: '1', name: 'Adobe XD' },
          { id: '1', name: 'Figma' },
          { id: '1', name: 'Corel Draw' }
        ]
      }
    ]
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

  // Provider
  return (
    <AppContext.Provider
      value={{
        darkMode: state.darkMode,
        online: state.online,
        skills: state.skills,
        // Methods
        setDarkModeMethod,
        setOnlineMethod,
        setSkillsMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStore;
