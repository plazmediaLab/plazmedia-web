import Layout from 'components/layout';
import HomeMainContent from 'components/home';
import { getCookieJson } from 'helpers/cookies';
import AppContext from 'context/AppContext/AppContext';
import { useContext, useEffect } from 'react';

function Home({ theme }) {
  const appContext = useContext(AppContext);
  const { setThemeMethod } = appContext;

  useEffect(() => {
    if (theme?.theme) {
      setThemeMethod(theme?.theme);
    }
  }, []);

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

Home.getInitialProps = async (ctx) => {
  const theme = await getCookieJson('PLAZMEDIA_THEME', ctx?.req);
  return { theme };
};

export default Home;
