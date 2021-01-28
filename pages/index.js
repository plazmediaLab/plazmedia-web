import Layout from 'components/layout';
import HomeMainContent from 'components/home';

function Home() {
  return (
    <Layout>
      <HomeMainContent />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.API_HOST}/skills`);
//   const json = await res.json();

//   return {
//     props: {
//       skills: json ? json : []
//     }
//   };
// }

export default Home;
