import SkeletonLoading from 'components/resources/skeleton-loading';
import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';
import AsideCardSkillItem from './aside-card__skill_item';

export default function AsideCardSkills({ loading }) {
  const { perfil } = useContext(AppContext);

  return (
    <article className="text-blueGray-400 text-sm leading-5 mb-14 md:mb-0">
      <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
      <h2 className="text-lg font-medium text-center md:text-left mb-2">Herramientas</h2>
      {loading ? (
        <SkeletonLoading nItems={20} itemHeight="0.8rem" />
      ) : (
        <>
          <AsideCardSkillItem title="FrontEnd" skills={perfil?.skills_categories?.frontend}>
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
            skills={perfil?.skills_categories?.backend}>
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
            skills={perfil?.skills_categories?.graphic_design}>
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
        </>
      )}
    </article>
  );
}
