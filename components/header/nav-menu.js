import MainButton from 'components/resources/main-button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkModeSwitch from './dark-mode-switch';

// TODO · Solucionar los enlaces 01/19/2021

function Activelink({ href, darkMode, children, test }) {
  const router = useRouter();
  console.log(test);
  return (
    <>
      <Link href={href}>
        <p
          className={`${
            router?.asPath === href ? 'text-brand-500 font-me' : ''
          } hover:text-brand-500 cursor-pointer relative py-2 dark:text-font-secondary dark:hover:text-font-light`}>
          {children}
        </p>
      </Link>
      {router?.asPath === href && (
        <style jsx>{`
          p::after {
            content: '';
            width: 100%;
            height: 2px;
            position: absolute;
            background-color: ${darkMode ? '#dbbffd' : '#7000f8'};
            bottom: 0;
            left: 0;
            border-radius: 1px;
          }
        `}</style>
      )}
    </>
  );
}

export default function NavMenu({ darkMode, setDarkMode, ...props }) {
  return (
    <nav {...props}>
      <MainButton>Escribir Post</MainButton>
      <Activelink href="/posts" test="Test 1" darkMode={darkMode}>
        Entradas
      </Activelink>
      <Activelink href="/projects" test="Test 2" darkMode={darkMode}>
        Proyectos
      </Activelink>
      <Activelink href="/downloads" test="Test 3" darkMode={darkMode}>
        Descargas
      </Activelink>
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  );
}
