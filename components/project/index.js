import AppContext from 'context/AppContext/AppContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import NavHedare from './nav-header';
import TitleHeader from './title-header';

export default function ProjectMainContent() {
  const [project, setproject] = useState({});
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { slug } = router.query;

  const { projects } = useContext(AppContext);

  useEffect(() => {
    if (projects.length > 0) {
      const project = projects.find((item) => item?.repo_slug === slug);
      setproject(project);
    }
  }, [projects]);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/plazmediaLab/${slug}/master/README.md`)
      .then((res) => res.text())
      .then((data) => {
        setReadme(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <section>
      <NavHedare slug={slug} />
      <TitleHeader project={project} />
    </section>
  );
}
