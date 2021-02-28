import AppContext from 'context/AppContext/AppContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import NavHedare from './nav-header';
import RepoInfoSection from './repo-info-section';
import RepoLinkSection from './repo-link-section';
import TitleHeader from './title-header';

export default function ProjectMainContent() {
  const [project, setproject] = useState({});

  const router = useRouter();
  const { slug } = router.query;

  const { projects } = useContext(AppContext);

  useEffect(() => {
    if (projects.length > 0) {
      const project = projects.find((item) => item?.repo_slug === slug);
      setproject(project);
    }
  }, [projects]);

  return (
    <section>
      <NavHedare slug={slug} />
      <TitleHeader project={project} />
      <RepoLinkSection repoUrl={project?.url} />
      <RepoInfoSection project={project} />
    </section>
  );
}
