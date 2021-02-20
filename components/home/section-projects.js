import SectionProjectsItem from './section-projects__item';
import { v4 as uuidv4 } from 'uuid';
import AppContext from 'context/AppContext/AppContext';
import { useContext, useEffect } from 'react';
import useGetProjects from 'hooks/useGetProjects';
import SkeletonProjectItem from 'components/resources/skeleton-project-item';

export default function SectionProjects() {
  const { projects, setProjectsMethod, loadingProjects, setLoadingProjectsMethod } = useContext(
    AppContext
  );

  const { data, isLoading, isError } = useGetProjects('/api/projects');

  useEffect(() => {
    if (!isLoading && !isError && projects.length === 0) {
      setProjectsMethod(data);
      setLoadingProjectsMethod(false);
    }
  }, [isLoading]);

  return (
    <section>
      <h3 className="text-2xl font-medium mb-5 mt-4">Mis proyectos destacados</h3>
      <span className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {loadingProjects ? (
          <>
            <SkeletonProjectItem />
            <SkeletonProjectItem />
            <SkeletonProjectItem />
            <SkeletonProjectItem />
            <SkeletonProjectItem />
            <SkeletonProjectItem />
          </>
        ) : (
          <>
            {projects.map((item) => (
              <SectionProjectsItem item={item} key={uuidv4()} />
            ))}
          </>
        )}
      </span>
    </section>
  );
}
