import Layout from 'components/layout';
import HomeMainContent from 'components/home';
import useSWR from 'swr';
import fetcher from 'helpers/fetcher';

function Home() {
  const { data, error } = useSWR('/api/profile', fetcher);
  console.log(data);
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
