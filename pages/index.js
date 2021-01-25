import Layout from 'components/layout';
import HomeMainContent from 'components/home';
import AppContext from 'context/AppContext/AppContext';
import { useContext, useEffect } from 'react';

function Home({ skills }) {
  const appContext = useContext(AppContext);
  const { setSkillsMethod } = appContext;

  useEffect(() => {
    if (skills) {
      setSkillsMethod(skills);
    }
  }, [skills]);

  return (
    <Layout>
      <HomeMainContent />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(`http://localhost:3000/api/skills`);
  const json = await res.json();

  return {
    skills: json ? json : []
  };
};

export default Home;
