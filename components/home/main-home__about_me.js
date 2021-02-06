import { useState } from 'react';
import parser from 'html-react-parser';

export default function MainHomeAboutMe({ text }) {
  const [more, setMore] = useState(false);
  return (
    <>
      {more && <p className="leading-5 text-blueGray-500 dark:text-blueGray-300">{parser(text)}</p>}
      <button
        type="button"
        onClick={() => setMore(!more)}
        className="cursor-pointer dark:text-teal-400 text-brand-500 text-sm flex items-center justify-center gap-x-2 w-full p-2 mt-3 bg-transparent hover:bg-blueGray-200 hover:bg-opacity-60 dark:hover:bg-blueGray-800 rounded">
        {/* <svg
          className={`duration-700 transition-transform transform ${
            more && '-rotate-180'
          } w-3 h-3 inline-block`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg> */}
        <svg
          className={`duration-700 transition-transform transform ${
            more && '-rotate-180'
          } w-3 h-3 inline-block`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {more ? 'Ocultar' : 'Leer más'}
      </button>
    </>
  );
}
