import DangerButton from 'components/resources/danger-button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CircleButtons from './circle-buttons';

export default function NavLoggedMenu({ darkMode, ...props }) {
  const router = useRouter();

  return (
    <nav {...props}>
      <Link href="/">
        <a
          className={`${
            router.asPath === '/'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-1 md:py-3 px-2 hover:text-brand-500 relative w-full md:w-auto whitespace-nowrap`}>
          Perfil
        </a>
      </Link>
      <Link href="/dashboard">
        <a
          className={`${
            router.asPath === '/dashboard'
              ? 'active-link text-brand-500 dark:text-teal-400 dark:hover:text-teal-300'
              : 'dark:text-font-secondary dark:hover:text-font-light'
          } py-1 md:py-3 px-2 hover:text-brand-500 relative w-full md:w-auto whitespace-nowrap`}>
          Dashboard
        </a>
      </Link>
      <CircleButtons className="md:flex gap-x-3 items-center justify-self-end hidden" />
      <DangerButton>Salir</DangerButton>
      <style jsx>{`
        nav.toggle-logged-menu {
          display: hidden;
        }
        nav.toggle-logged-menu.open {
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
