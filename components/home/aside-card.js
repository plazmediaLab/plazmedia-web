import MainButton from 'components/resources/main-button';
import SecondaryButton from 'components/resources/secondary-button';
import AsideCardAvatar from './aside-card__avatar';
import AsideCardBiography from './aside-card__biography';
import Languages from './aside-card__languages';
import AsideCardSocialNetwork from './aside-card__social-network';

export default function Asidecard({ ...props }) {
  return (
    <aside>
      <article {...props}>
        <AsideCardAvatar />
        <span className="grid gap-3 grid-cols-2">
          <SecondaryButton type="button">
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
          </SecondaryButton>
          <MainButton type="button">
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contactar
          </MainButton>
        </span>
        <Languages className="text-sm tracking-wide text-blueGray-400" />
        <AsideCardBiography />
        <AsideCardSocialNetwork />
      </article>
    </aside>
  );
}
