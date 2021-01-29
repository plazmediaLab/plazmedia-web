export default function LineButton({ children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className="transition-colors duration-200 ease-in-out flex items-center justify-center w-full md:w-auto py-1 px-3 rounded bg-transparent hover:bg-blueGray-100 border border-blueGray-200 dark:bg-blueGray-800 dark:hover:bg-blueGray-700 dark:border-blueGray-700 dark:hover:border-blueGray-500 whitespace-nowrap">
      {children}
    </button>
  );
}
