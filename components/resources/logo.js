import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';

export default function Logo({ ...props }) {
  const appContext = useContext(AppContext);
  const { darkMode } = appContext;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.62 410" {...props}>
      <title>{'Plazmedia isotype'}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__isotypes">
          <g id="prefix__isotype-dark-fill">
            <path
              fill={`${darkMode ? '#fff' : '#1D1D1B'}`}
              className="bg-white"
              d="M367.62 125.9v158.21a46.75 46.75 0 01-23.39 40.5l-5.68 3.28c-.92.52-1.78 1-2.65 1.53l-.51.31-41.27 23.83-8.31 4.78-78.59 45.37a46.64 46.64 0 01-46.79 0l-137-79.1A46.81 46.81 0 010 284.11V125.9a46.81 46.81 0 0123.39-40.53l137-79.11a46.83 46.83 0 0146.79 0l137 79.11a46.75 46.75 0 0123.44 40.53z"
            />
            <path
              fill={`${darkMode ? '#1D1D1B' : '#fff'}`}
              className="bg-background-brand"
              d="M177.13 151.54L88 240.64l-23.3-23.35a17.38 17.38 0 010-24.58l76.79-76.8zM230.58 98.09L195 133.72l-35.69-35.63 23.34-23.34a17.39 17.39 0 0124.59 0zM271.74 163.83l-59 59-35.63-35.64 71.28-71.27 23.33 23.34a17.38 17.38 0 01.02 24.57zM236.11 306.38l-28.87 28.87a17.38 17.38 0 01-24.58 0l-76.8-76.8L159.31 205l76.8 76.8a17.38 17.38 0 010 24.58z"
            />
            <path
              fill={`${darkMode ? '#fff' : '#1D1D1B'}`}
              className="bg-white"
              d="M291.08 375.63v-3.9h20.45v3.9h-7.92v21.73H299v-21.73zM315.45 371.73h5.69l7.6 18.57h.3l7.61-18.57h5.68v25.63h-4.45v-17.61h-.24l-7.08 17.54h-3.33l-7.08-17.57h-.24v17.64h-4.46z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
