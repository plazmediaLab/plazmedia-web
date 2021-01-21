import LogoFull from 'components/resources/logo-full';

export default function Footer() {
  return (
    <footer className="text-sm w-full grid place-items-center bg-blueGray-200 dark:bg-background-middle">
      <section className="container px-3 md:px-6 mx-auto my-9">
        <span>
          <LogoFull className="w-28" />
        </span>
        <span className="flex items-center justify-between">
          <p className="tracking-wid">Copyright © 2021 Plazmedia. All rights reserved.</p>
          <button className={`border border-font-secondary border-opacity-20 py-1 px-3 rounded`}>
            Status:{' '}
            <span className={`ml-1 inline-block w-2 h-2 rounded-full bg-blueGray-400`}></span>{' '}
            <span className={`text-font-secondary`}>Disconnected</span>
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
