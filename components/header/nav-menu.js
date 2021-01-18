import Activelink from 'components/resources/active-link';
import MainButton from 'components/resources/main-button';
import Link from 'next/link';

export default function NavMenu({ ...props }) {
  return (
    <nav {...props}>
      <MainButton>Escribir Post</MainButton>
      <Activelink href="/">Entradas</Activelink>
      <Link href="/">Entradas</Link>
      <Link href="/">Proyectos</Link>
      <Link href="/">Descargas</Link>
    </nav>
  );
}
