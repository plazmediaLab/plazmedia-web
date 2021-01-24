// import MainButton from 'components/resources/main-button';
// import SecondaryButton from 'components/resources/secondary-button';
import Link from 'next/link';
import { useEffect } from 'react';
import CircleButtons from './circle-buttons';
import { useRouter } from 'next/router';

export default function NavMenu({ darkMode, setDarkModeMethod, ...props }) {
  const router = useRouter();

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
      <Link href="/">
        <a
          className={`${
            router.asPath === '/'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-3 px-2 hover:text-brand-500 relative`}>
          Inicio
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`${
            router.asPath === '/projects'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-3 px-2 hover:text-brand-500 relative`}>
          Proyectos
        </a>
      </Link>
      <Link href="/cv">
        <a
          disabled={true}
          className={`${
            router.asPath === '/cv'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-3 px-2 hover:text-brand-500 relative`}>
          CV
        </a>
      </Link>
      <Link href="/about-plazmedia">
        <a
          disabled={true}
          className={`${
            router.asPath === '/about-plazmedia'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-3 px-2 hover:text-brand-500 relative`}>
          Sobre Plazmedia
        </a>
      </Link>
      <CircleButtons className="md:flex gap-x-3 items-center justify-self-end hidden" />
      {/* <SecondaryButton>Registrarse</SecondaryButton>
      <MainButton>Iniciar sesión</MainButton> */}
      {/* <MainButton>Escribir Post</MainButton>
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
        a.active-link::before {
          content: '';
          display: block;
          width: 4px;
          height: 4px;
          background-color: ${darkMode ? '#2dd4bf' : '#7000f8'};
          opacity: ${darkMode ? '0.5' : '0.2'};
          position: absolute;
          bottom: 0.2rem;
          left: calc(50% - 2px);
          border-radius: 50%;
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
