export default function LoadingIcon({
  width = '1.25rem',
  height = '1.25rem',
  stroke = '3px',
  spinColor = 'rgba(255, 255, 255, 1)',
  borderColor = 'rgba(255, 255, 255, 0.5)'
}) {
  return (
    <span className="my-0.5 block animate-spin rounded-full bg-transparent">
      <style jsx>{`
        span {
          width: ${width};
          height: ${height};
          border-width: ${stroke};
          border-color: ${borderColor};
          border-top-color: ${spinColor};
        }
      `}</style>
    </span>
  );
}
