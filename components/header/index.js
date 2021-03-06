import Logo from 'components/resources/logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavMenu from './nav-menu';
import CircleButtons from './circle-buttons';
import ReactDOM from 'react-dom';
// import useGetPerfilData from 'hooks/useGetPerfilData';

export default function Header() {
  const [open, setOpen] = useState(false);

  // const [getPerfilData] = useGetPerfilData();

  const handleToggleMenu = () => {
    const toggleMenu = document.getElementById('toggle-menu');
    if (!toggleMenu?.classList.contains('open')) {
      toggleMenu?.classList.add('open');
      setOpen(true);
    } else {
      toggleMenu?.classList.remove('open');
      setOpen(false);
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
        </span>
        <CircleButtons
          handleToggleMenu={handleToggleMenu}
          className="flex gap-x-3 items-center justify-self-end md:hidden"
        />
        <NavMenu
          id="toggle-menu"
          className="toggle-menu hidden w-full md:w-auto col-span-2 md:col-span-1 justify-self-start md:justify-self-end md:flex items-center gap-x-3 flex-col md:flex-row gap-y-3 md:gap-y-0"
        />
        {open &&
          ReactDOM.createPortal(
            <button
              onClick={handleToggleMenu}
              type="button"
              className="w-screen h-screen bg-opacity-0 fixed top-0 left-0 md:hidden"
            />,
            document.getElementById('modal-section')
          )}
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
