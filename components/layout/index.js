import Footer from 'components/footer';
import Header from 'components/header';
import { useEffect, useState } from 'react';
import Seo from './seo';

export default function Layout({ children }) {
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(
    () => {
      if (process.browser) {
        const footer = document.getElementById('footer-content');
        setFooterHeight(footer.clientHeight);
      }
    },
    [
      /* dependencia */
    ]
  );
  return (
    <>
      <Seo />
      <Header />
      <div id="modal-section" className="relative" />
      <main
        className="container mx-auto px-3 md:px-6 py-5"
        style={{ minHeight: `calc(100vh - 60px - ${footerHeight}px)` }}>
        {children}
      </main>
      <Footer />
      <style jsx>{`
        main {
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}
