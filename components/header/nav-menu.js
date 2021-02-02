import Link from 'next/link';
import CircleButtons from './circle-buttons';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function NavMenu({ ...props }) {
  const [dark, setDark] = useState(null);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      setDark(theme);
    } else {
      setDark(null);
    }
  }, [theme]);

  return (
    <nav {...props}>
      <Link href="/">
        <a
          className={`${
            router.asPath === '/'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-1 md:py-3 px-2 hover:text-brand-500 relative w-full md:w-auto whitespace-nowrap`}>
          Inicio
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={`${
            router.asPath === '/projects'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-1 md:py-3 px-2 hover:text-brand-500 relative w-full md:w-auto whitespace-nowrap`}>
          Proyectos
        </a>
      </Link>
      <Link href="/about-plazmedia">
        <a
          disabled={true}
          className={`${
            router.asPath === '/about-plazmedia'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-1 md:py-3 px-2 hover:text-brand-500 relative w-full md:w-auto whitespace-nowrap`}>
          Sobre Plazmedia
        </a>
      </Link>
      <CircleButtons className="md:flex gap-x-3 items-center justify-self-end hidden" />
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
          background-color: ${dark ? '#2DD4BF' : '#7000F8'};
          opacity: ${dark ? '0.5' : '0.2'};
          position: absolute;
          bottom: calc(50% - 0.2rem);
          left: calc(100% - 1rem);
          border-radius: 50%;
        }
        @media (min-width: 768px) {
          nav.open {
            display: flex !important;
          }
          a.active-link::before {
            bottom: 0.2rem;
            left: calc(50% - 2px);
          }
        }
      `}</style>
    </nav>
  );
}
