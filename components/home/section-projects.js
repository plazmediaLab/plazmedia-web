import SectionProjectsItem from './section-projects__item';

export default function SectionProjects() {
  const slug = 'spotify-electron';

  const repos = [
    {
      repo_slug: 'spotify-electron',
      title: 'Clon spotify (Desktop app)',
      stack: ['nd', 'el', 'fb']
    },
    { repo_slug: 'plazmedia-web', title: 'CV Web (Portafolio)', stack: ['nd'] },
    { repo_slug: 'alain-boutique', title: 'Alain Boutique v2' },
    { repo_slug: 'grupo-torres', title: 'Gruppo Torres (Bienes raíces)' },
    { repo_slug: 'alain-boutique-client', title: 'Alain Boutique v1 Cliente (FrontEnd)' },
    { repo_slug: 'alain-boutique-api', title: 'Alain Boutique v1 API (BackEnd)' }
  ];

  return (
    <section>
      <h3 className="text-2xl font-medium mb-7">Mis proyectos destacados</h3>
      {/* <FirebaseIcon />
      <ExpressIcon />
      <GatsbyIcon />
      <MongoDbIcon />
      <NextJsIcon />
      <NodeJsIcon />
      <ReactIcon />
      <StrapiIcon />
      <TailwimdIcon />
      <ElectronIcons /> */}
      <span className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {repos.map((item, index) => (
          <SectionProjectsItem item={item} key={index} />
        ))}
      </span>
    </section>
  );
}
