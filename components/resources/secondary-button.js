export default function SecondaryButton({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className="flex items-center justify-center w-full font-medium text-brand-500 dark:text-teal-400 py-1 px-3 rounded bg-transparent hover:bg-font-secondary hover:bg-opacity-10 dark:hover:bg-opacity-20 border border-transparent whitespace-nowrap">
      {children}
    </button>
  );
}
