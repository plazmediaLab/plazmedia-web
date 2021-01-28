import SkeletonLoading from 'components/resources/skeleton-loading';
import AppContext from 'context/AppContext/AppContext';
import useGetSkills from 'hooks/useGetSkills';
import { useContext, useEffect } from 'react';

export default function MainHomeSkills() {
  const appContext = useContext(AppContext);
  const { skills } = appContext;

  const [getSkills, loading] = useGetSkills();

  useEffect(() => {
    if (skills.length === 0) {
      getSkills();
    }
  }, []);

  const [frontend, backend, graphic_design] = skills;

  return (
    <>
      <h2 className="text-center md:text-left text-2xl font-bold mb-4">
        Conocimientos técnicos y habilidades
      </h2>
      <h4 className="text-center md:text-left font-medium mb-2 dark:text-font-secondary">
        <svg
          className="w-5 h-5 inline-block"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>{' '}
        Desarrollo FrontEnd
      </h4>
      <ul className="ml-0 md:ml-6 text-xs tracking-wide flex justify-center md:justify-start mx-auto flex-wrap gap-2 mb-5">
        {loading ? (
          <SkeletonLoading />
        ) : (
          frontend?.skills?.map((item) => (
            <li className="tag-list-item" key={item?.id}>
              {item?.name}
            </li>
          ))
        )}
      </ul>
      <h4 className="text-center md:text-left font-medium mb-2 dark:text-font-secondary">
        <svg
          className="w-5 h-5 inline-block"
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
        {loading ? (
          <SkeletonLoading />
        ) : (
          backend?.skills?.map((item) => (
            <li className="tag-list-item" key={item?.id}>
              {item?.name}
            </li>
          ))
        )}
      </ul>
      <h4 className="text-center md:text-left font-medium mb-2 dark:text-font-secondary">
        <svg
          className="w-5 h-5 inline-block"
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
        {loading ? (
          <SkeletonLoading nItems={5} />
        ) : (
          graphic_design?.skills?.map((item) => (
            <li className="tag-list-item" key={item?.id}>
              {item?.name}
            </li>
          ))
        )}
      </ul>
    </>
  );
}
