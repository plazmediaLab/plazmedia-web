export default function StrapiIcon({ size = 'w-6 h-6' }) {
  return (
    <div title="Strapi" className={`stack-project-icon ${size}`}>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <g data-name="Capa 2">
          <g data-name="Capa 1">
            <path fill="none" opacity={0} d="M0 0h40v40H0z" />
            <path
              d="M33.48 7.07v17.79h-9V16.1a.57.57 0 00-.57-.56h-8.77v-9h17.78a.56.56 0 01.56.53z"
              fillRule="evenodd"
            />
            <path
              d="M15.15 6.5v9H6.8a.28.28 0 01-.2-.48zm9.31 26.72v-8.36h9l-8.54 8.56a.28.28 0 01-.4 0 .32.32 0 01-.08-.2zm-9.31-17.68h9a.29.29 0 01.29.28v9h-8.73a.56.56 0 01-.56-.56z"
              opacity={0.5}
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
