import SectionProjectsItem from './section-projects__item';
import { v4 as uuidv4 } from 'uuid';
import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';

export default function SectionProjects() {
  const repos = [
    {
      repo_slug: 'spotify-electron',
      title: 'Clon spotify (Desktop app)',
      stack: ['rc', 'tw', 'el', 'fb'],
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-screen-1.jpg?alt=media&token=2f667eac-24f8-4edf-8645-634410b79cbe'
    },
    {
      repo_slug: 'plazmedia-web',
      title: 'CV Web (Portafolio)',
      stack: ['nx', 'tw', 'st'],
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-plazmedia-web.png?alt=media&token=aeb1b3bc-913b-40fd-ac93-df0362900c2b'
    },
    {
      repo_slug: 'alain-boutique-client',
      title: 'Alain Boutique v2 Cliente (FrontEnd)',
      stack: ['nx', 'tw', 'jw'],
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-v2.png?alt=media&token=90950080-3d10-4009-87ac-eed898e702a6'
    },
    {
      repo_slug: 'alain-boutique-api',
      title: 'Alain Boutique v2 API (BackEnd)',
      stack: ['nd', 'ex', 'mg', 'jw'],
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-api.png?alt=media&token=1c1215be-32e3-43f2-8f92-faf0608951ed'
    },
    {
      repo_slug: 'grupo-torres',
      title: 'Gruppo Torres (Bienes raíces)',
      stack: ['nx', 'tw'],
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-grupo-torres.png?alt=media&token=9a9b9ef0-73e6-4666-b851-8fbb1ded59e2'
    },
    {
      repo_slug: 'alain-boutique',
      title: 'Alain Boutique v1',
      stack: ['gb', 'tw', 'fb'],
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-v1.png?alt=media&token=dd65c21a-ed59-4a2a-b117-cb667e22cb4d'
    }
  ];

  const { loading, loadingProjects } = useContext(AppContext);
  console.log(loading);

  return (
    <section>
      <h3 className="text-2xl font-medium mb-7">Mis proyectos destacados</h3>
      <span className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {repos.map((item) => (
          <SectionProjectsItem item={item} key={uuidv4()} />
        ))}
      </span>
    </section>
  );
}
