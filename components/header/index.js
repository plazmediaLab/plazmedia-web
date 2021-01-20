import Logo from 'components/resources/logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavMenu from './nav-menu';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let theme = localStorage.theme;
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    } else {
      document.querySelector('html').classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    }
  }, [darkMode]);

  return (
    <header className="border-b border-blueGray-200 dark:border-blueGray-900 w-full grid place-items-center dark:bg-background-middle">
      <section className="container px-3 md:px-6 mx-auto flex items-center gap-x-4">
        <Link href="/">
          <Logo className="w-9 h-9" darkMode={darkMode} />
        </Link>
        <input
          type="text"
          className="border border-blueGray-200 rounded py-1 px-3 focus:ring-4 focus:ring-brand-100 placeholder-blueGray-300"
          placeholder="Buscar..."
        />
        <NavMenu
          className="flex-1 flex justify-end items-center gap-x-4"
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
      </section>
      <style jsx>{`
        header {
          height: 60px;
        }
      `}</style>
    </header>
  );
}
