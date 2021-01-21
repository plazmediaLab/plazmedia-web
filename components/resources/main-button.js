export default function MainButton({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className="font-medium py-1 px-3 rounded bg-brand-500 hover:bg-opacity-90 border border-brand-500 dark:bg-brand-400 dark:border-brand-400 text-white whitespace-nowrap">
      {children}
    </button>
  );
}
