import Footer from 'components/footer';
import Header from 'components/header';
import Seo from './seo';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <div id="modal-section" className="relative" />
      <main className="container mx-auto px-3 md:px-6 py-5">{children}</main>
      <Footer />
      <style jsx>{`
        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
