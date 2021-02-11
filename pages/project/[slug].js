import Layout from 'components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import marked from 'marked';
import Link from 'next/link';
import RepositoriIcon from 'components/resources/icons/repositori-icon';

export default function Project() {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { slug } = router.query;

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

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
    <Layout>
      <div className="flex gap-x-2 text-lg dark:text-font-secondary font-light tracking-wide">
        <Link href="/">
          <a className="opacity-40 dark:opacity-70 hover:opacity-100 dark:hover:opacity-100 hover:underline">
            Inicio
          </a>
        </Link>
        <span>/</span>
        <Link href="/projects">
          <a className="opacity-40 dark:opacity-70 hover:opacity-100 dark:hover:opacity-100 hover:underline">
            Proyectos
          </a>
        </Link>
        <span>/</span>
        <p className="opacity-100 dark:opacity-100">{slug}</p>
        <RepositoriIcon />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: marked(readme) }}></div> */}
    </Layout>
  );
}
