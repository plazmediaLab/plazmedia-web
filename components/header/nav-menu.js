import MainButton from 'components/resources/main-button';
import AppContext from 'context/AppContext/AppContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import DarkModeSwitch from './dark-mode-switch';

export default function NavMenu({ ...props }) {
  const appContext = useContext(AppContext);
  const { darkMode, setDarkModeMethod } = appContext;

  useEffect(() => {
    if (process.browser) {
      let theme = localStorage.theme;
      if (theme === 'dark') {
        console.log('Dark done...');
        document.querySelector('html').classList.add('dark');
        setDarkModeMethod(true);
      }
    }
  }, []);

  return (
    <nav {...props}>
      <MainButton>Escribir Post</MainButton>
      <Link href="/">
        <a className="text-brand-500">Home</a>
      </Link>
      <Link href="/posts">
        <a>Publicaciones</a>
      </Link>
      <DarkModeSwitch /*darkMode={darkMode} setDarkMode={setDarkMode}*/ />
    </nav>
  );
}
