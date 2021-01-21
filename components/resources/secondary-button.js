export default function SecondaryButton({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className="font-medium text-brand-500 dark:text-font-alternative py-1 px-3 rounded bg-transparent hover:bg-font-secondary hover:bg-opacity-10 dark:hover:bg-opacity-20 border border-transparent whitespace-nowrap">
      {children}
    </button>
  );
}
