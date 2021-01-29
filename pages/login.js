import Layout from 'components/layout';
import MainButton from 'components/resources/main-button';

export default function Login() {
  return (
    <Layout>
      <section className="grid place-items-center">
        <form className="w-full md:w-auto flex flex-col gap-y-4 p-5 rounded-md bg-white dark:bg-background-middle">
          <h3 className="text-3xl font-bold text-center mb-5">Inicio de sesión</h3>
          <div className="">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="focus:ring ring-brand-200 dark:ring-brand-800 border border-blueGray-200 dark:border-blueGray-600 rounded-md py-2 px-3 dark:bg-blueGray-800"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Contraseña"
              className="focus:ring ring-blue-200 border border-blueGray-200 dark:border-blueGray-600 rounded-md py-2 px-3 dark:bg-blueGray-800"
            />
          </div>
          <MainButton type="submit">Entrar</MainButton>
        </form>
        <style jsx>{`
          section {
            min-height: 60vh;
          }
          input {
            width: 100%;
          }
          @media (min-width: 768px) {
            section {
              min-height: 70vh;
            }
            input {
              width: 350px;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
}
