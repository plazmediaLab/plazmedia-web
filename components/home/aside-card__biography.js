import { useState } from 'react';

export default function AsideCardBiography() {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="text-blueGray-400 text-sm leading-5 hidden md:block">
      <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
      <h2 className="text-lg font-medium text-center mb-2">Hacerca de mi</h2>
      <p>
        Programador autodidacta con enfoque en manejo de tecnologías JavaScript entre las que se
        encuentran Next.js, Gatsby.js, Node js, Express, TailwindCSS, etc. Frameworks y librerías de
        JS.
      </p>
      <br />
      <p>
        Diseñador gráfico con 10 años de experiencia, especialidad en el desarrollo de logotipos y
        marcas comerciales, habido en los entornos digitales.
      </p>
      {readMore && (
        <p>
          <br />
          Alegre y comunicativo, líder introvertido capas de administrar, supervisar y manejar
          proceso de desarrollo logísticos u operaciones en entornos complejos.
          <br />
          <br /> De rápido aprendizaje y ferviente usuario de la tecnología.
          <br />
          <br /> Responsable, serio y puntual en horarios de trabajo que tomen las tareas a
          realizar.
          <br />
          <br /> Variedad de proyectos personales creados y en desarrollo con Stack MERN y
          conocimientos medios en bases de datos no relacionales (MongoDB y Firebase).
        </p>
      )}
      <br />
      <button
        onClick={() => setReadMore(!readMore)}
        title="Leer más sobre mi"
        type="button"
        className="text-brand-500 dark:text-teal-400 cursor-pointer">
        {readMore ? 'Ocultar' : '...leer más'}
      </button>
    </article>
  );
}
