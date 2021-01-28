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
//   console.log('');
//   const res = await fetch(
//     `${process.env.PRODUCTION ? process.env.PROD_API_HOST : process.env.LOCAL_API_HOST}/skills`
//   );
//   const json = await res.json();

//   return {
//     props: {
//       skills: json
//     }
//   };
// }

export default Home;
