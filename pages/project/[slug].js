import Layout from 'components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import marked from 'marked';

export default function Project() {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { slug } = router.query;

  marked.setOptions({
    highlight: function (code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
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
      <h1>Project: {slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(readme) }}></div>
    </Layout>
  );
}
