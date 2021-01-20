import MainButton from 'components/resources/main-button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkModeSwitch from './dark-mode-switch';

export default function NavMenu({ darkMode, setDarkMode, ...props }) {
  return (
    <nav {...props}>
      <MainButton>Escribir Post</MainButton>
      <Link href="/">Inicio</Link>
      <Link href="/posts">Publicaciones</Link>
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
}
