import Layout from 'components/layout';
import HomeMainContent from 'components/home';
import useSWR from 'swr';
import fetcher from 'helpers/fetcher';
import AppContext from 'context/AppContext/AppContext';
import { useContext, useEffect } from 'react';

function Home() {
  const { data, error } = useSWR('/api/profile', fetcher);

  const { perfil, setPerfilMethod, setLoadingMethod } = useContext(AppContext);

  useEffect(() => {
    if (!perfil && !error) {
      setPerfilMethod(data);
      setLoadingMethod(false);
    }
  }, [data]);

  return (
    <Layout>
      <HomeMainContent />
    </Layout>
  );
}

// export async function getStaticProps(ctx) {
//   console.log(ctx);
//   // const cookies = await getCookie('PLAZMEDIA_THEME', ctx);
//   // console.log(cookies);

//   return {
//     props: {}
//   };
// }

export default Home;
