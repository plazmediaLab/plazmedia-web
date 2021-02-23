import GitHubIcon from 'components/resources/icons/githob-icon';
import Link from 'next/link';

export default function NavHedare({ slug }) {
  return (
    <section className="flex gap-x-2 text-lg dark:text-font-secondary font-light tracking-wide mb-5">
      <Link href="/">
        <a className="whitespace-nowrap opacity-40 dark:opacity-70 hover:opacity-100 dark:hover:opacity-100 hover:underline">
          Inicio
        </a>
      </Link>
      <span>/</span>
      <Link href="/projects">
        <a className="whitespace-nowrap opacity-40 dark:opacity-70 hover:opacity-100 dark:hover:opacity-100 hover:underline">
          Proyectos
        </a>
      </Link>
      <span>/</span>
      <p className="whitespace-nowrap opacity-100 dark:opacity-100">{slug}</p>
    </section>
  );
}
