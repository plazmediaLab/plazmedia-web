import { useEffect, useState } from 'react';
import AsideLeftRepoInfo from './aside-left__repo-info';
import AsideRightRepoInfo from './aside-right__repo-info';

export default function RepoInfoSection({ project }) {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/plazmediaLab/${project?.repo_slug}/master/README.md`)
      .then((res) => res.text())
      .then((data) => {
        setReadme(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [project?.repo_slug]);

  console.log(project);

  return (
    <section className="mt-10 md:mt-14 flex flex-col md:flex-row gap-5 md:gap-12">
      <AsideLeftRepoInfo thumbnail={project.screenshot} className="bg-pink-500 p-5" />
      <AsideRightRepoInfo readme={readme} />
      <style jsx>{`
        section {
          grid-template-columns: auto;
        }
        @media (min-width: 768px) {
          section {
            grid-template-columns: 350px 1fr;
          }
        }
      `}</style>
    </section>
  );
}
