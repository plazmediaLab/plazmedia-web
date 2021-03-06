export default function SecondaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="min-h-9 flex items-center justify-center w-full font-medium py-1 px-3 rounded text-brand-500 dark:text-teal-400 bg-transparent hover:bg-font-secondary hover:bg-opacity-10 dark:hover:bg-opacity-20 border border-transparent whitespace-nowrap">
      {children}
    </button>
  );
}
