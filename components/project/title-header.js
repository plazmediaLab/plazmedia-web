export default function TitleHeader({ project }) {
  console.log(project.url);

  return (
    <section className="flex items-center justify-between">
      <h2 className="text-2xl font-medium">{project?.title}</h2>
      {project?.visit?.length > 0 && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project?.visit}
          className="border border-background-brand dark:border-white bg-background-brand hover:bg-transparent dark:hover:bg-transparent hover:text-background-brand dark:hover:text-white dark:bg-white dark:text-background-brand dark:font-semibold rounded-md p-2.5 text-white text-sm tracking-wide w-38 text-center">
          Visitar deploy
        </a>
      )}
    </section>
  );
}
