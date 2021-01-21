import MainButton from 'components/resources/main-button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkModeSwitch from './dark-mode-switch';

export default function NavMenu({ darkMode, setDarkMode, ...props }) {
  return (
    <nav {...props}>
      <MainButton>Escribir Post</MainButton>
      <Link href="/">
        <a className="text-brand-500">Home</a>
      </Link>
      <Link href="/posts">
        <a>Publicaciones</a>
      </Link>
      <DarkModeSwitch /*darkMode={darkMode} setDarkMode={setDarkMode}*/ />
    </nav>
  );
}
