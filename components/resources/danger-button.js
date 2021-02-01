export default function DangerButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out flex items-center justify-center w-full md:w-auto font-medium py-1 px-3 rounded bg-red-500 hover:bg-opacity-90 border border-red-500 text-white whitespace-nowrap">
      {children}
    </button>
  );
}
