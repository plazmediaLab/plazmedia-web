import { useEffect, useState } from 'react';

export default function AsideCardBiography({ loading, about_me }) {
  const [resume, setResume] = useState('');
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (about_me?.length > 330) {
      let reduce = about_me?.substr(0, 330);
      reduce = reduce.split('');
      reduce.push('...');
      setResume(reduce);
    } else {
      setResume(about_me);
    }
  }, [about_me]);

  return (
    <article className="text-blueGray-400 text-sm leading-5 hidden md:block">
      <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
      <h2 className="text-lg font-medium text-center md:text-left mb-2">Hacerca de mi</h2>
      {loading ? (
        <>
          <div className="skeleton-pulse w-full h-2 overflow-hidden rounded mx-auto mb-1" />
          <div className="skeleton-pulse w-full h-2 overflow-hidden rounded mx-auto mb-1" />
          <div className="skeleton-pulse w-full h-2 overflow-hidden rounded mx-auto mb-1" />
          <div className="skeleton-pulse w-full h-2 overflow-hidden rounded mx-auto mb-1" />
          <div className="skeleton-pulse w-full h-2 overflow-hidden rounded mx-auto mb-1" />
          <div className="skeleton-pulse w-full h-2 overflow-hidden rounded mx-auto mb-1" />
        </>
      ) : (
        <>
          {readMore ? (
            <p className="whitespace-pre-line">{about_me}</p>
          ) : (
            <p className="whitespace-pre-line">{resume}</p>
          )}
          {about_me?.length > 330 && (
            <button
              onClick={() => setReadMore(!readMore)}
              title="Leer más sobre mi"
              type="button"
              className="text-brand-500 dark:text-teal-400 cursor-pointer mt-2">
              {readMore ? 'Ocultar' : '...leer más'}
            </button>
          )}
        </>
      )}
    </article>
  );
}
