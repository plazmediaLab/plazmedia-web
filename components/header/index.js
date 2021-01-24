import Logo from 'components/resources/logo';
import AppContext from 'context/AppContext/AppContext';
import Link from 'next/link';
import { useContext } from 'react';
import NavMenu from './nav-menu';
import CircleButtons from './circle-buttons';

export default function Header() {
  const appContext = useContext(AppContext);
  const { darkMode, online, setDarkModeMethod } = appContext;

  const handleToggleMenu = () => {
    const toggleMenu = document.getElementById('toggle-menu');
    if (!toggleMenu.classList.contains('open')) {
      toggleMenu.classList.add('open');
    } else {
      toggleMenu.classList.remove('open');
    }
  };

  return (
    <header className="fixed top-0 z-50 border-b border-blueGray-200 dark:border-blueGray-800 w-full grid place-items-center bg-white dark:bg-background-middle shadow-light-header md:shadow-none dark:shadow-dark-header md:dark:shadow-none">
      <section className="container px-3 md:px-6 py-3 md:py-0 mx-auto grid items-center gap-3 md:gap-y-0">
        <span className="relative">
          <Link href="/">
            <a>
              <Logo className="w-9 h-9" />
            </a>
          </Link>
          <div
            title="Conectado para responder dudas"
            className={`${
              online ? 'bg-green-500 dark:bg-teal-400' : 'bg-blueGray-300 dark:bg-blueGray-500'
            } w-2 h-2 rounded-full absolute -top-1 -left-0`}></div>
        </span>
        <CircleButtons
          handleToggleMenu={handleToggleMenu}
          className="flex gap-x-3 items-center justify-self-end md:hidden"
        />
        <NavMenu
          id="toggle-menu"
          darkMode={darkMode}
          setDarkModeMethod={setDarkModeMethod}
          className="toggle-menu hidden w-full md:w-auto col-span-2 md:col-span-1 justify-self-start md:justify-self-end md:flex items-center gap-x-3 flex-col md:flex-row gap-y-3 md:gap-y-0"
        />
      </section>
      <style jsx>{`
        header {
          height: auto;
        }
        section {
          grid-template-columns: 2.5rem calc(100% - 2.5rem - 0.75rem);
        }
        @media (min-width: 768px) {
          header {
            height: 60px;
          }
        }
      `}</style>
    </header>
  );
}
