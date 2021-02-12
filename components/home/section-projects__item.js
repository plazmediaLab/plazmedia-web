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
import JsonWebTokenIcon from 'components/resources/icons/json-web-token-icon';
import { useRouter } from 'next/router';

export default function SectionProjectsItem({ item }) {
  const router = useRouter();

  const icons = [];
  console.log(icons.length);

  for (let i = 0; i < item?.stack?.length; ++i) {
    switch (item?.stack[i]) {
      case 'ex':
        icons.push(<ExpressIcon />);
        break;
      case 'fb':
        icons.push(<FirebaseIcon />);
        break;
      case 'gb':
        icons.push(<GatsbyIcon />);
        break;
      case 'mg':
        icons.push(<MongoDbIcon />);
        break;
      case 'nx':
        icons.push(<NextJsIcon />);
        break;
      case 'nd':
        icons.push(<NodeJsIcon />);
        break;
      case 'rc':
        icons.push(<ReactIcon />);
        break;
      case 'st':
        icons.push(<StrapiIcon />);
        break;
      case 'tw':
        icons.push(<TailwimdIcon />);
        break;
      case 'el':
        icons.push(<ElectronIcons />);
        break;
      case 'jw':
        icons.push(<JsonWebTokenIcon />);
        break;
    }
  }

  return (
    <div className="p-3 rounded-md overflow-hidden relative border border-blueGray-200">
      <button
        onClick={() => router.push(`/project/${item?.repo_slug}`)}
        className="projects-item cursor-pointer background hover:opacity-100 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        style={{ backgroundImage: `url(${item?.thumbnail})` }}
      />
      <span className="p-3 text-center grid place-items-center contain-title transition duration-500 ease-in-out absolute w-full h-full top-0 left-0 bg-black bg-opacity-80 pointer-events-none">
        <p className="relative font-medium text-font-light pointer-events-none">{item?.title}</p>
      </span>
      <span className="icons-container absolute bottom-2 right-2 icons flex items-center gap-1 transition duration-500 ease-in-out opacity-50 bg-blueGray-900 bg-opacity-80 dark:bg-opacity-95 rounded-full py-1 px-2 shadow-xl">
        {icons}
      </span>
      <style jsx>{`
        div {
          height: 10rem;
        }
        span,
        p {
          z-index: 10;
        }
        span.contain-title {
          opacity: 0;
        }
        button.projects-item:hover ~ span.contain-title {
          opacity: 1;
        }
        button.projects-item:hover ~ span.icons-container,
        span.icons-container:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
