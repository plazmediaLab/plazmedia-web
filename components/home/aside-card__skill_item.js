import { useState } from 'react';

export default function AsideCardSkillItem({ skills, title, subtitle, filterStr, children }) {
  const [filter] = useState(skills?.filter((item) => item.title === filterStr));
  console.log(filter[0]?.skills);
  return (
    <>
      <h4 className="flex items-center text-center md:text-left font-medium mb-2 dark:text-font-secondary">
        {children} {title} {subtitle && <small className="font-normal ml-1">({subtitle})</small>}
      </h4>
      {/* <ul className="ml-0 md:ml-6 text-xs tracking-wide flex justify-center md:justify-start mx-auto flex-wrap gap-2 mb-5">
        {frontend?.map((item) => (
          <li className="tag-list-item" key={item?.id + item?.name}>
            {item?.name}
          </li>
        ))}
      </ul> */}
    </>
  );
}
