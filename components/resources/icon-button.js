export default function IconButton({ children, ...props }) {
  return (
    <a
      {...props}
      className="cursor-pointer w-8 h-8 grid place-items-center rounded-full text-blueGray-500 bg-transparent hover:bg-font-secondary hover:bg-opacity-10 dark:hover:bg-opacity-20 dark:hover:text-font-light">
      {children}
    </a>
  );
}
