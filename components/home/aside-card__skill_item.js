import { v4 as uuidv4 } from 'uuid';

export default function AsideCardSkillItem({ title, subtitle, children, skills = [] }) {
  return (
    <>
      <h4 className="flex items-center text-center md:text-left font-medium mb-2 dark:text-font-secondary">
        {children} {title} {subtitle && <small className="font-normal ml-1">({subtitle})</small>}
      </h4>
      <ul className="ml-0 md:ml-6 text-xs tracking-wide flex mx-auto flex-wrap gap-2 mb-5">
        {skills?.map((item) => (
          <li className="tag-list-item dark:font-medium" key={uuidv4()}>
            {item?.title}
          </li>
        ))}
      </ul>
    </>
  );
}
