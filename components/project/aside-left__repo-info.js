export default function AsideLeftRepoInfo({ thumbnail }) {
  return (
    <div className="AsideLeftRepoInfo-image rounded-md border border-blueGray-400 dark:border-blueGray-500 p-2 grid place-items-center bg-white dark:bg-blueGray-800">
      <span
        className="bg-cover bg-center bg-no-repeat block w-full h-full rounded"
        style={{ backgroundImage: `url(${thumbnail})` }}></span>
      <style global jsx>{`
        div.AsideLeftRepoInfo-image {
          width: 100%;
          height: 250px;
        }
        @media (min-width: 768px) {
          div.AsideLeftRepoInfo-image {
            min-width: 350px;
            max-width: 350px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}
