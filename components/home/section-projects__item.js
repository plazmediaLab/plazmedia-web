// import ExpressIcon from 'components/resources/icons/express-icon';
import FirebaseIcon from 'components/resources/icons/firebase-icon';
// import GatsbyIcon from 'components/resources/icons/gatsby-icon';
// import MongoDbIcon from 'components/resources/icons/mongo-bd-icon';
// import NextJsIcon from 'components/resources/icons/next-js-icon';
import NodeJsIcon from 'components/resources/icons/node-js-icon';
// import ReactIcon from 'components/resources/icons/react-icon';
// import StrapiIcon from 'components/resources/icons/strapi-icon';
// import TailwimdIcon from 'components/resources/icons/tailwind-icon';
import ElectronIcons from 'components/resources/icons/elctron-icon';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function SectionProjectsItem({ item }) {
  const icons = [];
  console.log(icons.length);

  for (let i = 0; i < item?.stack?.length; ++i) {
    switch (item?.stack[i]) {
      case 'nd':
        icons.push(<NodeJsIcon />);
        break;
      case 'el':
        icons.push(<ElectronIcons />);
        break;
      case 'fb':
        icons.push(<FirebaseIcon />);
        break;
    }
  }

  return (
    <div
      className="p-3 bg-blueGray-200 dark:bg-blueGray-900 rounded overflow-hidden"
      key={uuidv4()}>
      <Link href={`/project/${item?.repo_slug}`}>
        <a>{item?.title}</a>
      </Link>
      <span className="icons flex gap-2 justify-end">{icons}</span>
      <style jsx>{`
        div {
          height: 10rem;
        }
      `}</style>
    </div>
  );
}
