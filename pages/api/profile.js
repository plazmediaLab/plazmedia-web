export default function profile(req, res) {
  res.status(200).json({
    welcome:
      '<span class="hi">¡Hola! … Soy un programador Frontend jr. autodidacta con casi 3 años en practicas y trabajos con proyectos independientes, actualmente funcionales.</span>Mi enfoque es el manejo de tecnologías JavaScript en conjunto con React, me gusta estar en continuo aprendizaje y adquiriendo nuevas habilidades en función a las actuales y futuras demandas tecnológicas en el campo del diseño y desarrollo de aplicaciones web en general.<br/>',
    about_me:
      '<br/>Diseñador grafico con mas de 10 años de experiencia en desarrollo de identidad visual para marcas comerciales, trasladando esta pación por el diseño al Frontend.<br/><br/>Especialidad en el desarrollo de logotipos y marcas comerciales, habido en los entornos digitales.<br/><br/>Alegre y comunicativo, líder introvertido capas de administrar, supervisar y manejar proceso de desarrollo logísticos u operaciones en entornos complejos.<br/><br/>De rápido aprendizaje y ferviente usuario de la tecnología.<br/><br/>Responsable, serio y puntual en horarios de trabajo que tomen las tareas a realizar.<br/><br/>Variedad de proyectos personales creados y en desarrollo con Stack MERN y conocimientos medios en bases de datos no relacionales (MongoDB y Firebase).',
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
      frontend: [
        { id: 1, title: 'React' },
        { id: 2, title: 'Next Js' },
        { id: 3, title: 'Gatsby Js' }
      ],
      backend: [
        { id: 1, title: 'Node Js' },
        { id: 2, title: 'Express' },
        { id: 3, title: 'Strapi' },
        { id: 4, title: 'MongoDB' },
        { id: 5, title: 'Firebase' }
      ],
      graphic_design: [
        { id: 1, title: 'Photoshop' },
        { id: 2, title: 'Illustrator' },
        { id: 3, title: 'Figma' },
        { id: 4, title: 'Adobe XD' }
      ]
    }
  });
}
