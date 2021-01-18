import Header from 'components/header';
import Seo from './seo';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <footer>Footer section</footer>
    </>
  );
}
