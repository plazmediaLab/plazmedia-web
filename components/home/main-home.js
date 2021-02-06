import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';
import MainHomeAboutMe from './main-home__about_me';

export default function MainHome() {
  const appContext = useContext(AppContext);
  const { perfil, online, setOnlineMethod } = appContext;

  return (
    <main>
      <MainHomeAboutMe text={perfil?.welcome ? perfil?.welcome : ''} />
      <button
        type="button"
        onClick={setOnlineMethod}
        className={`${online ? 'text-red-500' : 'text-green-500'}`}>
        {online ? 'Disconnect' : 'Connect'}
      </button>
    </main>
  );
}
