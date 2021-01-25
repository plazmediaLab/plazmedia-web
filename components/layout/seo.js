import Head from 'next/head';

export default function Seo() {
  return (
    <Head>
      <html lang="es" />
      <meta charSet="utf-8" />
      <meta name="author" content="Adrian Nieves Uribe" />
      <meta name="copyright" content="Adrian Nieves Uribe - Plazmedia" />
      <meta
        name="description"
        content="Página WBE dedicada al almacenamiento de proyectos y publicaciones creadas bajo la marca Plazmedia"
      />
      <meta
        name="keywords"
        content="React, Next js, TailwindCSS, Frontend, Backend, Html, Javascript, css, Blog"
      />
      <link rel="icon" type="image/png" href="/favicon-dark@16x.png" />
      <meta name="theme-color" content="#1E1E1E" />
      <title>Plazmedia</title>
    </Head>
  );
}
