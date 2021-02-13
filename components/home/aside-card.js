import MainButton from 'components/resources/main-button';
import SecondaryButton from 'components/resources/secondary-button';
import AppContext from 'context/AppContext/AppContext';
import { useContext, useState } from 'react';
import AsideCardAvatar from './aside-card__avatar';
import Languages from './aside-card__languages';
import AsideCardSkills from './aside-card__skills';
import AsideCardSocialNetwork from './aside-card__social-network';

export default function Asidecard({ ...props }) {
  const [more, setMore] = useState(false);

  const { loading, perfil } = useContext(AppContext);

  const showSection = () => {
    const section = document.getElementById('skills-section');
    if (section.classList.contains('show-section')) {
      section.classList.remove('show-section');
    } else {
      section.classList.add('show-section');
    }
    setMore(!more);
  };

  return (
    <aside>
      <article {...props}>
        <AsideCardAvatar
          avatarURL={perfil?.avatar?.thumbnail}
          name={perfil?.name}
          address={perfil?.address}
          title={perfil?.title}
        />
        <span className="grid gap-3 grid-cols-2">
          {loading ? (
            <>
              <div className="min-h-9 rounded bg-brand-500 dark:bg-brand-400"></div>
              <div className="min-h-9 rounded bg-brand-500 dark:bg-teal-400 bg-opacity-10 dark:bg-opacity-20"></div>
            </>
          ) : (
            <>
              <MainButton type="button">
                <svg
                  className="w-5 h-5 min-w-5 min-h-5 inline-block mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>{' '}
                Descargar CV
              </MainButton>
              <SecondaryButton type="button">
                <svg
                  className="w-5 h-5 inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contactar
              </SecondaryButton>
            </>
          )}
        </span>
        <hr className="border-blueGray-200 my-5 dark:border-blueGray-700 dark:border-opacity-60" />
        <span id="skills-section" className="hidden md:block">
          <Languages
            loading={loading}
            languages={perfil?.languages}
            className="text-sm tracking-wide text-blueGray-400"
          />
          <AsideCardSkills loading={loading} />
        </span>
        <button
          onClick={showSection}
          type="button"
          className="md:hidden dark:text-teal-400 text-brand-500 text-sm flex items-center justify-center gap-x-2 w-full p-2 bg-brand-100 dark:bg-blueGray-800 rounded">
          <svg
            className={`duration-700 transition-transform transform ${
              more && 'rotate-180'
            } w-3 h-3 inline-block`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {more ? 'Ocultar' : 'Conocimientos técnicos y habilidades'}
          <svg
            className={`duration-700 transition-transform transform ${
              more && '-rotate-180'
            } w-3 h-3 inline-block`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <AsideCardSocialNetwork />
      </article>
      <style jsx>{`
        span.show-section {
          display: block !important;
        }
      `}</style>
    </aside>
  );
}
