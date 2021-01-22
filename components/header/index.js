import Logo from 'components/resources/logo';
import AppContext from 'context/AppContext/AppContext';
import Link from 'next/link';
import { useContext } from 'react';
import ButtonToggleMenu from './button-toggle-menu';
import NavMenu from './nav-menu';

export default function Header() {
  const appContext = useContext(AppContext);
  const { online, setDarkModeMethod } = appContext;

  return (
    <header className="fixed top-0 z-50 border-b border-blueGray-200 dark:border-blueGray-900 w-full grid place-items-center bg-white dark:bg-background-middle">
      <section className="container px-3 md:px-6 py-3 md:my-0 mx-auto grid items-center gap-3 md:gap-y-0">
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
        <ButtonToggleMenu className="md:hidden bg-blueGray-100 rounded-full text-blueGray-500 dark:hover:text-font-light hover:bg-blueGray-200 dark:bg-blueGray-800 justify-self-end w-9 h-9 grid place-items-center" />
        <NavMenu
          setDarkModeMethod={setDarkModeMethod}
          className="col-span-2 md:col-span-1 flex-1 flex justify-end items-center gap-x-4"
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
