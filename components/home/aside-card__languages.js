export default function Languages({ ...props }) {
  const languages = [
    { id: 1, language: 'Español', domain: 100 },
    { id: 2, language: 'Ingles', domain: 25 }
  ];

  return (
    <section {...props}>
      <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
      <h2 className="text-lg font-medium text-center md:text-left mb-2">Idiomas</h2>
      {languages?.map((item) => (
        <div className="grid justify-between gap-x-2 gap-y-1" key={item?.id}>
          <p className="font-medium">{item?.language}</p>
          <small
            className={`${item?.domain === 100 && 'text-blue-500 font-medium dark:text-pink-400'}`}>
            {item?.domain === 100 ? 'Nativo' : item?.domain >= 50 ? 'Secundario' : ''}
          </small>
          <span className="relative col-span-2 block h-1.5 overflow-hidden w-full bg-blueGray-200 dark:bg-blueGray-700 rounded-full">
            <div
              className={`absolute top-0 left-0 h-1.5 ${
                item?.domain === 100
                  ? 'bg-blue-500 dark:bg-pink-500'
                  : item?.domain >= 50
                  ? 'bg-blue-400 dark:bg-pink-400'
                  : 'bg-blue-300 dark:bg-pink-300'
              }`}
              style={{ width: `${item?.domain}%` }}
            />
          </span>
        </div>
      ))}
      <style jsx>{`
        div {
          grid-template-columns: 1fr auto;
        }
        section > *:not(:last-child) {
          margin-bottom: 0.5rem;
        }
        span::after {
          content: '';
          display: block;
          height: 0.375rem;
          width: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }
      `}</style>
    </section>
  );
}
