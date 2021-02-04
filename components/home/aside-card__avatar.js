import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';

export default function AsideCardAvatar({ avatarURL, name, address, title }) {
  const appContext = useContext(AppContext);
  const { loading, online } = appContext;
  return (
    <>
      <section className="relative w-36 h-36 mx-auto">
        {loading ? (
          <div className="skeleton-pulse relative w-36 h-36 overflow-hidden rounded-full mx-auto" />
        ) : (
          <div className="relative w-36 h-36 overflow-hidden rounded-full">
            <img className="bg-cover bg-no-repeat" src={avatarURL} alt="Perfil avatar" />
          </div>
        )}
        {online && (
          <div
            title="Conectado..."
            className={`bg-green-400 dark:bg-teal-400 border-2 border-white dark:border-background-middle w-4 h-4 rounded-full absolute top-4 left-2`}></div>
        )}
        <div
          title="Conectado..."
          className={`${
            online
              ? 'bg-green-400 dark:bg-teal-400 animate-ping bg-opacity-50'
              : 'bg-blueGray-300 dark:bg-blueGray-500 border-2 border-white dark:border-background-middle'
          } w-4 h-4 rounded-full absolute top-4 left-2`}></div>
      </section>
      {loading ? (
        <>
          <div className="skeleton-pulse w-2/3 h-6 overflow-hidden rounded-full mx-auto mb-2 mt-4" />
          <div className="skeleton-pulse w-1/2 h-4 overflow-hidden rounded-full mx-auto mb-6" />
        </>
      ) : (
        <>
          <h1 className="text-xl font-medium text-center mb-2 mt-4">{name}</h1>
          <p className="text-sm text-center w-full md:w-4/5 mx-auto text-blueGray-400">{title}</p>
          <p className="text-sm text-blueGray-400 flex items-center justify-center mt-2 mb-6">
            <svg
              className="w-3 h-3 inline-block mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {address}
          </p>
        </>
      )}
    </>
  );
}
