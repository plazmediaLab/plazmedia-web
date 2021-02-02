import Layout from 'components/layout';
import HomeMainContent from 'components/home';

function Home() {
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
