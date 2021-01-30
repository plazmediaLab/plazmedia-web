import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import jwtVerification from 'helpers/jwt-verification';
import { useRouter } from 'next/router';
import AppContext from 'context/AppContext/AppContext';

function useLogin() {
  const [error] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const appContext = useContext(AppContext);
  const { setLoggedMethod } = appContext;

  const formik = useFormik({
    initialValues: {
      identifier: 'adrian@gmail.com',
      password: '12345678'
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .email('Ingresa un correo valido.')
        .required('El email es requerido.'),
      password: Yup.string().required('La contraseña es requerida.')
    }),
    onSubmit: async (values) => {
      setLoading(true);

      const res = await fetch('https://plazmedia-web-strapi.herokuapp.com/auth/local', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(values), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res?.status === 200) {
        const { jwt } = await res.json();
        const verify = new jwtVerification(jwt).isValid;
        console.log(verify);
        setLoggedMethod(true);
        router.push('/');
      } else {
        console.log(res);
      }

      setLoading(false);
    }
  });

  return [formik, loading, error];
}

export default useLogin;
