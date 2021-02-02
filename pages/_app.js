import AppStore from 'context/AppContext/AppStore';
import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <AppStore>
        <Component {...pageProps} />
      </AppStore>
    </ThemeProvider>
  );
}

export default MyApp;
