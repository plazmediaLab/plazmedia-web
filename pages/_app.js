import AppStore from 'context/AppContext/AppStore';
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppStore>
      <Component {...pageProps} />
    </AppStore>
  );
}

export default MyApp;
