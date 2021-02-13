import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';
import MainHomeAboutMe from './main-home__about_me';
import MainHomeHello from './main-home__hello';
import SectionProjects from './section-projects';

export default function MainHome() {
  const { perfil, loading, online, setOnlineMethod } = useContext(AppContext);

  return (
    <main>
      {loading ? (
        <div className="flex flex-col gap-y-2 mb-5">
          <div className="skeleton-pulse relative w-36 h-7 overflow-hidden rounded" />
          <div className="skeleton-pulse relative w-2/3 h-8 overflow-hidden rounded" />
          <div className="skeleton-pulse relative w-1/3 h-3 overflow-hidden rounded-full mt-5" />
          <div className="skeleton-pulse relative w-11/12 h-3 overflow-hidden rounded-full" />
          <div className="skeleton-pulse relative w-7/12 h-3 overflow-hidden rounded-full" />
          <div className="skeleton-pulse relative w-5/6 h-3 overflow-hidden rounded-full" />
          <div className="skeleton-pulse relative w-2/5 h-3 overflow-hidden rounded-full" />
        </div>
      ) : (
        <>
          <MainHomeHello text={perfil?.welcome ? perfil?.welcome : ''} />
          <MainHomeAboutMe text={perfil?.about_me ? perfil?.about_me : ''} />
          <button
            type="button"
            onClick={setOnlineMethod}
            className={`${online ? 'text-red-500' : 'text-green-500'}`}>
            {online ? 'Disconnect' : 'Connect'}
          </button>
        </>
      )}
      <hr className="border-blueGray-200 mb-5 mt-3 dark:border-blueGray-700 dark:border-opacity-60" />
      <SectionProjects />
    </main>
  );
}
