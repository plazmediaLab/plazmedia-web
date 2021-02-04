import AppContext from 'context/AppContext/AppContext';
import { useContext } from 'react';

function useGetPerfilData() {
  const appContext = useContext(AppContext);
  const { setPerfilMethod, setLoadingMethod } = appContext;

  const getPerfilData = () => {
    fetch('https://plazmedia-web-strapi.herokuapp.com/profiles/6018713c4b7ade373c92d174')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const avatar = {
          thumbnail: `https://plazmedia-web-strapi.herokuapp.com${data?.avatar.formats.thumbnail.url}`,
          large: `https://plazmedia-web-strapi.herokuapp.com${data?.avatar.formats.large.url}`,
          medium: `https://plazmedia-web-strapi.herokuapp.com${data?.avatar.formats.medium.url}`,
          small: `https://plazmedia-web-strapi.herokuapp.com${data?.avatar.formats.small.url}`
        };

        let languages = [];
        data?.languages.map((item) => {
          const id = item?.id;
          const name = item?.name;
          const percentage = item?.percentage;
          languages.push({ id, name, percentage });
        });

        const info = {
          about_me: data?.about_me,
          title: data?.title,
          address: data?.address,
          languages,
          name: data?.name,
          avatar
        };

        setPerfilMethod(info);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingMethod(false);
        console.log('Finally...');
      });
  };

  return [getPerfilData];
}

export default useGetPerfilData;
