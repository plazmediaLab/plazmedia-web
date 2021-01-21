import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';

export default function DarkModeSwitch() {
  const appContext = useContext(AppContext);
  const { darkMode, setDarkModeMethod } = appContext;

  const setTheme = () => {
    if (!darkMode) {
      document.querySelector('html').classList.add('dark');
      localStorage.theme = 'dark';
      setDarkModeMethod(true);
    } else {
      document.querySelector('html').classList.remove('dark');
      localStorage.theme = 'light';
      setDarkModeMethod(false);
    }
  };

  return (
    <button
      onClick={setTheme}
      title="Activar modo oscuro"
      className="w-8 h-8 grid place-items-center bg-blueGray-100 rounded-full text-blueGray-500 hover:bg-blueGray-200 dark:bg-blueGray-700">
      {darkMode ? (
        <svg
          className="w-5 h-5 text-amber-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
