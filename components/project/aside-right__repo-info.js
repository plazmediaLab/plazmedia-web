import Markdown from 'markdown-to-jsx';

export default function AsideRightRepoInfo({ readme }) {
  return (
    <div className="readme-section">
      <Markdown>{readme}</Markdown>
      <style global jsx>{`
        .readme-section > div > *:not(:last-child) {
          margin-bottom: 1rem;
        }
        .readme-section pre {
          display: block;
          padding: 1rem;
          background-color: #1d1d1b;
          overflow-x: auto;
          border-radius: 0.5rem;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
