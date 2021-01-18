import Link from 'next/link';
import NavMenu from './nav-menu';

export default function Header() {
  return (
    <header className="border-b border-blueGray-200 w-full grid place-items-center">
      <section className="container px-3 md:px-6 mx-auto flex items-center gap-x-4">
        <Link href="/">
          <img
            title="Página Inicio"
            src="/isotype-dark-fill.svg"
            alt="Plazmedia logo"
            className="h-9 cursor-pointer"
          />
        </Link>
        <input
          type="text"
          className="border border-blueGray-200 rounded py-1 px-3 focus:ring-4 focus:ring-brand-100 placeholder-blueGray-300"
          placeholder="Buscar..."
        />
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
