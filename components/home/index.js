import Asidecard from './aside-card';
import MainHome from './main-home';

export default function HomeMainContent() {
  return (
    <>
      <section className="grid gap-10">
        <Asidecard className="p-5 rounded-md border border-blueGray-200 dark:border-blueGray-800 bg-white dark:bg-background-middle" />
        <MainHome />
      </section>
      <style jsx>{`
        section {
          grid-template-columns: 100%;
        }
        @media (min-width: 768px) {
          section {
            grid-template-columns: 350px auto;
          }
        }
      `}</style>
    </>
  );
}
