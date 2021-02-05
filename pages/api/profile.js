export default function profile(req, res) {
  res.status(200).json({
    about_me:
      'Programador autodidacta con enfoque en manejo de tecnologías JavaScript entre las que se encuentran Next.js, Gatsby.js, Node js, Express, TailwindCSS, etc. Frameworks y librerías de JS. Diseñador gráfico con 10 años de experiencia, especialidad en el desarrollo de logotipos y marcas comerciales, habido en los entornos digitales. Alegre y comunicativo, líder introvertido capas de administrar, supervisar y manejar proceso de desarrollo logísticos u operaciones en entornos complejos. De rápido aprendizaje y ferviente usuario de la tecnología. Responsable, serio y puntual en horarios de trabajo que tomen las tareas a realizar. Variedad de proyectos personales creados y en desarrollo con Stack MERN y conocimientos medios en bases de datos no relacionales (MongoDB y Firebase).',
    address: 'Colón Querétaro, México.',
    avatar: {
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/albums%2FIMG_20171104_160100%20(1).jpg?alt=media&token=f0b2bf17-3993-4868-befe-9b4cc07ca54c'
    },
    languages: [
      { id: 1, name: 'Español', percentage: 100 },
      { id: 2, name: 'Ingles', percentage: 25 }
    ],
    name: 'Adrian Nieves Uribe',
    title: 'Programador WEB · Desarrollador Front-end en React · Diseñador gráfico',
    skills_categories: {
      frontend: [{ id: 1, title: '' }],
      backend: [{ id: 1, title: '' }],
      graphic_design: [{ id: 1, title: '' }]
    }
  });
}
