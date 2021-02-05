import SkeletonLoading from 'components/resources/skeleton-loading';
import { useEffect, useState } from 'react';
import AsideCardSkillItem from './aside-card__skill_item';

export default function AsideCardSkills({ skills, loading }) {
  // const [frontend, setFrontend] = useState([]);
  // const [backend, setBackend] = useState([]);
  // const [graphicDesign, setGraphicDesign] = useState([]);

  // useEffect(() => {
  //   if (process.browser) {
  //     const front = ;
  //     if (front?.length > 0) {
  //       setFrontend(front[0]?.skills);
  //     }
  //     const back = skills?.filter((item) => item.title === 'backend');
  //     if (back?.length > 0) {
  //       setBackend(back[0]?.skills);
  //     }
  //     const graph = skills?.filter((item) => item.title === 'graphic-design');
  //     if (graph?.length > 0) {
  //       setGraphicDesign(graph[0]?.skills);
  //     }
  //   }
  // }, [loading, skills]);

  return (
    <article className="text-blueGray-400 text-sm leading-5 hidden md:block">
      <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
      <h2 className="text-lg font-medium text-center md:text-left mb-2">
        Conocimientos técnicos y habilidades
      </h2>
      {loading ? (
        <SkeletonLoading nItems={20} itemHeight="0.8rem" />
      ) : (
        <>
          <AsideCardSkillItem title="Desarrollo FrontEnd" skills={skills} filterStr="frontend">
            <svg
              className="w-4 h-4 inline-block mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </AsideCardSkillItem>
          <AsideCardSkillItem
            title="BackEnd & DB"
            subtitle="Non-Relational Database"
            skills={skills}
            filterStr="backend">
            <svg
              className="w-4 h-4 inline-block mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
          </AsideCardSkillItem>
          <AsideCardSkillItem
            title="Diseño gráfico & UI"
            skills={skills}
            filterStr="graphic-design">
            <svg
              className="w-4 h-4 inline-block mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
          </AsideCardSkillItem>
          {/* <h4 className="flex items-center text-center md:text-left font-medium mb-2 dark:text-font-secondary">
            <svg
              className="w-4 h-4 inline-block mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>{' '}
            BackEnd & DB <small className="font-normal">(Non-Relational Database)</small>
          </h4>
          <ul className="ml-0 md:ml-6 text-xs tracking-wide flex justify-center md:justify-start mx-auto flex-wrap gap-2 mb-5">
            {backend?.map((item) => (
              <li className="tag-list-item" key={item?.id + item?.name}>
                {item?.name}
              </li>
            ))}
          </ul>
          <h4 className="flex items-center text-center md:text-left font-medium mb-2 dark:text-font-secondary">
            <svg
              className="w-4 h-4 inline-block mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>{' '}
            Diseño gráfico & UI
          </h4>
          <ul className="ml-0 md:ml-6 text-xs tracking-wide flex justify-center md:justify-start mx-auto flex-wrap gap-2 mb-5">
            {graphicDesign?.map((item) => (
              <li className="tag-list-item" key={item?.id + item?.name}>
                {item?.name}
              </li>
            ))}
          </ul> */}
        </>
      )}
      {/* <ul className="ml-0 md:ml-6 text-xs tracking-wide flex justify-center md:justify-start mx-auto flex-wrap gap-2 mb-5">
        {loading && localLoading ? (
          <SkeletonLoading />
        ) : (
          frontend?.skills?.map((item) => (
            <li className="tag-list-item" key={item?.id + item?.name}>
              {item?.name}
            </li>
          ))
        )}
      </ul> */}
    </article>
  );
}
