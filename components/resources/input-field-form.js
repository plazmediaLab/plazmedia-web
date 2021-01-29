export default function InputFieldForm({ error, children, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`${
          error
            ? 'ring ring-red-200 border-red-300 dark:ring-red-900 dark:border-red-900'
            : 'ring-brand-200 dark:ring-brand-800 border-blueGray-200 focus:border-brand-300 dark:border-blueGray-600'
        } focus:ring border   rounded-md py-2 px-3 dark:bg-blueGray-800`}
      />
      {children}
      {error && (
        <p className="w-full py-1 px-2 mt-2 tracking-wide border-l-4 border-red-500 text-red-500 text-xs">
          {error}
        </p>
      )}
      <style jsx>{`
        input {
          width: 100%;
        }
        @media (min-width: 768px) {
          input {
            width: 350px;
          }
        }
      `}</style>
    </div>
  );
}
