export default function SkeletonLoading({ nItems = 10, itemHeight = '1rem' }) {
  let stars = [];

  function random(min, max) {
    let random = Math.random() * (max - min) + min;
    random = Math.floor(random);
    if (random % 2) {
      return `w-${random + 1}`;
    } else {
      return `w-${random}`;
    }
  }

  function getVarian2(i) {
    let delayMilliseconds;
    const count = i * 4;
    if (count < 10) {
      delayMilliseconds = `1.0${String(count)}s`;
    } else {
      delayMilliseconds = `1.${String(count)}s`;
    }
    return delayMilliseconds;
  }

  for (let i = 0; i < nItems; ++i) {
    stars.push(
      <span className={`${random(8, 40)} skeleton-pulse rounded-full`} key={i}>
        <style jsx>{`
          span {
            display: block;
            animation: pulse__item 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            animation-delay: ${getVarian2(i)};
            height: ${itemHeight};
          }

          @keyframes pulse__item {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </span>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap w-full mb-3">
      {stars}
      <style jsx>{`
        div {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 0s;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
