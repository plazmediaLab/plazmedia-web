export default function MainButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="py-1 px-3 rounded bg-brand-500 border border-brand-500 text-white whitespace-nowrap">
      {children}
    </button>
  );
}
