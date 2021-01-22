import LogoFull from 'components/resources/logo-full';
import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';
import SocialNetwork from './social-network';

export default function Footer() {
  const appContext = useContext(AppContext);
  const { online } = appContext;

  return (
    <footer className="text-sm w-full grid place-items-center bg-blueGray-200 dark:bg-background-middle">
      <section className="container px-3 md:px-6 mx-auto my-9">
        <span>
          <LogoFull className="w-28" />
        </span>
        <span className="flex items-center justify-between flex-col md:flex-row gap-y-4">
          <p className="tracking-wid">Copyright © 2021 Plazmedia. All rights reserved.</p>
          <SocialNetwork />
          <button
            className={`border border-font-secondary border-opacity-20 py-1 px-3 rounded whitespace-nowrap`}>
            Status:{' '}
            <span
              className={`ml-1 inline-block w-2 h-2 rounded-full ${
                online ? 'bg-green-500' : 'bg-blueGray-400'
              }`}></span>{' '}
            <span
              className={` ${
                online ? 'text-green-500 font-medium' : 'text-font-secondary'
              } dark:font-normal`}>
              {online ? 'Online' : 'Disconnected'}
            </span>
          </button>
        </span>
      </section>
      <style jsx>{`
        section > *:not(:first-child) {
          margin-top: 1.3rem;
        }
      `}</style>
    </footer>
  );
}
