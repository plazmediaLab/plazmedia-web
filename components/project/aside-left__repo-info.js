export default function AsideLeftRepoInfo({ thumbnail }) {
  return (
    <div className="w-full h-56 rounded-md border border-blueGray-400 p-2 grid place-items-center bg-white">
      <span
        className="bg-cover bg-no-repeat block w-full h-full rounded"
        style={{ backgroundImage: `url(${thumbnail})` }}></span>
    </div>
  );
}
