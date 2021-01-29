import Layout from 'components/layout';
import InputFieldForm from 'components/resources/input-field-form';
import LoadingIcon from 'components/resources/loading-icon';
import MainButton from 'components/resources/main-button';
import ShowPassField from 'components/resources/show-pass-field';
import useLogin from 'hooks/useLogin';
import { useState } from 'react';

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [formik, loading] = useLogin();
  return (
    <Layout>
      <section className="grid place-items-center" onSubmit={formik.handleSubmit}>
        <form className="w-full md:w-auto flex flex-col gap-y-4 p-5 rounded-md bg-white dark:bg-background-middle">
          <h3 className="text-3xl font-bold text-center mb-5">Inicio de sesión</h3>
          <InputFieldForm
            name="identifier"
            type="email"
            placeholder="Correo electrónico"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            error={
              (formik.touched.identifier || formik.errors.identifier) && formik.errors.identifier
            }></InputFieldForm>
          <InputFieldForm
            name="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={(formik.touched.password || formik.errors.password) && formik.errors.password}>
            <ShowPassField showPass={showPass} setShowPass={setShowPass} />
          </InputFieldForm>
          <MainButton disabled={loading} type="submit">
            {loading ? <LoadingIcon /> : 'Entrar'}
          </MainButton>
        </form>
        <style jsx>{`
          section {
            min-height: 60vh;
          }
          @media (min-width: 768px) {
            section {
              min-height: 70vh;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
}
