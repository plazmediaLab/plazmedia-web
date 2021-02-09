import ExpressIcon from 'components/resources/icons/express-icon';
import FirebaseIcon from 'components/resources/icons/firebase-icon';
import GatsbyIcon from 'components/resources/icons/gatsby-icon';
import MongoDbIcon from 'components/resources/icons/mongo-bd-icon';
import NextJsIcon from 'components/resources/icons/next-js-icon';
import NodeJsIcon from 'components/resources/icons/node-js-icon';
import ReactIcon from 'components/resources/icons/react-icon';
import StrapiIcon from 'components/resources/icons/strapi-icon';
import TailwimdIcon from 'components/resources/icons/tailwind-icon';
import ElectronIcons from 'components/resources/icons/elctron-icon';
import Link from 'next/link';

export default function SectionProjects() {
  const slug = 'spotify-electron';
  return (
    <section>
      <h3 className="text-2xl font-medium">Mis proyectos destacados</h3>
      <FirebaseIcon />
      <ExpressIcon />
      <GatsbyIcon />
      <MongoDbIcon />
      <NextJsIcon />
      <NodeJsIcon />
      <ReactIcon />
      <StrapiIcon />
      <TailwimdIcon />
      <ElectronIcons />
      <Link href={`/project/${slug}`}>
        <a>Clon spotify - Electron</a>
      </Link>
    </section>
  );
}
