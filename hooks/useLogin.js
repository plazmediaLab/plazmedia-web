import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: ''
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
      const json = await res.json();
      console.log(json);
      setLoading(false);
    }
  });

  return [formik, loading, error];
}

export default useLogin;
