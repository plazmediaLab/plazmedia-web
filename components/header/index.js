import Logo from 'components/resources/logo';
import Link from 'next/link';
import NavMenu from './nav-menu';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 border-b border-blueGray-200 dark:border-blueGray-900 w-full grid place-items-center bg-white dark:bg-background-middle">
      <section className="container px-3 md:px-6 mx-auto flex items-center gap-x-4">
        <Link href="/">
          <a>
            <Logo className="w-9 h-9" />
          </a>
        </Link>
        <NavMenu className="flex-1 flex justify-end items-center gap-x-4" />
      </section>
      <style jsx>{`
        header {
          height: 60px;
        }
      `}</style>
    </header>
  );
}
