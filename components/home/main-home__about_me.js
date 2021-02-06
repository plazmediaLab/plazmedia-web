import parser from 'html-react-parser';

export default function MainHomeAboutMe({ text }) {
  return (
    <section className="">
      <h2 className="font-bold text-xl text-blue-500 dark:text-pink-400 mb-1 text-center md:text-left">
        Sobre mí
      </h2>
      <p className="leading-5 text-blueGray-500 dark:text-blueGray-300">{parser(text)}</p>
      <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
      <style global jsx>{`
        h3.hi {
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.01rem;
          line-height: 1.15;
          margin-bottom: 0.7rem;
        }
        @media (min-width: 768px) {
          h3.hi {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
