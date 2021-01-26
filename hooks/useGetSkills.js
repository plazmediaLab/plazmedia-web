import AppContext from 'context/AppContext/AppContext';
import { useContext, useState } from 'react';

function useGetSkills() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const appContext = useContext(AppContext);
  const { setSkillsMethod } = appContext;

  const getSkills = async () => {
    setLoading(true);
    console.log(process.env.NEXT_PUBLIC_API_HOST);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/skills-categories`);
    const json = await res.json();

    setLoading(false);
    setSkillsMethod(json);
  };

  return [getSkills, loading, error];
}

export default useGetSkills;
