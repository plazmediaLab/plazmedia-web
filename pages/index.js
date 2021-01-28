import Layout from 'components/layout';
import HomeMainContent from 'components/home';
import AppContext from 'context/AppContext/AppContext';
import { useContext, useEffect } from 'react';

function Home({ skills }) {
  const appContext = useContext(AppContext);
  const { setSkillsMethod } = appContext;

  useEffect(() => {
    setSkillsMethod(skills);
  }, []);

  return (
    <Layout>
      <HomeMainContent />
    </Layout>
  );
}

export async function getStaticProps() {
  console.log('');
  const res = await fetch(
    `${process.env.PRODUCTION ? process.env.PROD_API_HOST : process.env.LOCAL_API_HOST}/skills`
  );
  const json = await res.json();

  return {
    props: {
      skills: json
    }
  };
}

export default Home;
