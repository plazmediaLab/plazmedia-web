export default function SkeletonProjectItem() {
  return (
    <div className="skeleton-pulse">
      <span className="absolute bottom-2 right-2 w-30 h-8 rounded-full bg-blueGray-300 bg-opacity-50"></span>
      <style jsx>{`
        div {
          position: relative;
          height: 10rem;
          border-radius: 0.375rem;
        }
      `}</style>
    </div>
  );
}
