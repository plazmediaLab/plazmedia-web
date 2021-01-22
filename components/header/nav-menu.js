import MainButton from 'components/resources/main-button';
import SecondaryButton from 'components/resources/secondary-button';
import Link from 'next/link';
import { useEffect } from 'react';
import CircleButtons from './circle-buttons';

export default function NavMenu({ setDarkModeMethod, ...props }) {
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
      <SecondaryButton>Registrarse</SecondaryButton>
      <MainButton>Iniciar sesión</MainButton>
      <CircleButtons className="md:flex gap-x-3 items-center justify-self-end hidden" />
      {/* <MainButton>Escribir Post</MainButton>
      <Link href="/">
        <a className="hover:text-brand-500 dark:text-font-secondary dark:hover:text-font-light">
          Home
        </a>
      </Link>
      <Link href="/posts">
        <a className="hover:text-brand-500 dark:text-font-secondary dark:hover:text-font-light">
          Publicaciones
        </a>
      </Link> */}
      <style jsx>{`
        nav.toggle-menu {
          display: hidden;
        }
        nav.toggle-menu.open {
          display: flex;
        }
        @media (min-width: 768px) {
          nav.open {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
