import Layout from 'components/layout';
import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';

export default function Home() {
  const appContext = useContext(AppContext);
  const { online, setOnlineMethod } = appContext;

  return (
    <Layout>
      <h1>Main section</h1>
      <button
        type="button"
        onClick={setOnlineMethod}
        className={`${online ? 'text-red-500' : 'text-green-500'}`}>
        {online ? 'Disconnect' : 'Connect'}
      </button>
    </Layout>
  );
}
