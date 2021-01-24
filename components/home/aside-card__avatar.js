import Image from 'next/image';

export default function AsideCardAvatar() {
  return (
    <>
      <div className="relative w-36 h-36 overflow-hidden rounded-full bg-blueGray-300 mx-auto dark:bg-blueGray-700">
        <Image
          src="/img/avatar.jpg"
          alt="Picture of the author"
          quality={50}
          layout="fill"
          loading="eager"
        />
      </div>
      <h1 className="text-xl font-medium text-center mb-2 mt-4">Adrian Nieves Uribe</h1>
      <p className="text-sm text-center w-full md:w-4/5 mx-auto text-blueGray-400">
        Programador WEB · Desarrollador Front-end en React · Diseñador gráfico
      </p>
      <p className="text-sm text-blueGray-400 flex items-center justify-center mt-2 mb-6">
        <svg
          className="w-3 h-3 inline-block mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        Colón Querétaro, México.
      </p>
    </>
  );
}
