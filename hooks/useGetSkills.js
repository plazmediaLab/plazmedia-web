import AppContext from 'context/AppContext/AppContext';
import { useContext, useState } from 'react';

const skills = [
  {
    id: '1',
    skills: [
      { id: '1', name: 'Html5' },
      { id: '2', name: 'Ccs3, Flexbox, Css Grid' },
      { id: '3', name: 'Javascript' },
      { id: '4', name: 'React' },
      { id: '5', name: 'Next Js' },
      { id: '6', name: 'Gatsby Js' },
      { id: '7', name: 'TailwindCSS' },
      { id: '8', name: 'Style Component' },
      { id: '9', name: 'Git' }
    ]
  },
  {
    id: '2',
    skills: [
      { id: '1', name: 'Node Js' },
      { id: '2', name: 'Express' },
      { id: '3', name: 'Firebase' },
      { id: '4', name: 'MongoDB' },
      { id: '5', name: 'SSR' },
      { id: '6', name: 'APIs' },
      { id: '7', name: 'HTTP' }
    ]
  },
  {
    id: '3',
    skills: [
      { id: '1', name: 'Photoshop' },
      { id: '1', name: 'Illustrator' },
      { id: '1', name: 'Adobe XD' },
      { id: '1', name: 'Figma' },
      { id: '1', name: 'Corel Draw' }
    ]
  }
];

function useGetSkills() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const appContext = useContext(AppContext);
  const { setSkillsMethod } = appContext;

  const getSkills = async () => {
    setLoading(true);
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/skills-categories`);
    // const json = await res.json();

    setSkillsMethod(skills);
    // setSkillsMethod(json);
    setLoading(false);
  };

  return [getSkills, loading, error];
}

export default useGetSkills;
