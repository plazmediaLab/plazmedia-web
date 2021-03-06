export default function MainButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="min-h-9 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-full md:w-auto font-medium py-1 px-3 rounded bg-brand-500 hover:bg-opacity-90 border border-brand-500 dark:bg-brand-400 dark:border-brand-400 text-white whitespace-nowrap">
      {children}
    </button>
  );
}
