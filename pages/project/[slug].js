import Layout from 'components/layout';
import ProjectMainContent from 'components/project';

export default function Project() {
  return (
    <Layout>
      {/* 
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>
          README.md: <br />
          <hr />
          {readme}
        </pre>
      )} */}
      <ProjectMainContent />
    </Layout>
  );
}
