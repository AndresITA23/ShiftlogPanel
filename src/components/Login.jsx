import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import bgImage from '../assets/images/background.jpg';
import LoginLogo from '../assets/loginLogo.svg';

const Login = ({ csrfToken }) => {
  const formik = useFormik({
    initialValues: {
      payrollNumber: '',
      password: '',
    },
    validationSchema: Yup.object({
      payrollNumber: Yup.string()
        .required('El número de nómina es obligatorio.')
        .matches(/^\d{5,10}$/, 'El número de nómina debe tener entre 5 y 10 dígitos.'),
      password: Yup.string()
        .required('La contraseña es obligatoria.')
        .min(6, 'La contraseña debe tener al menos 6 caracteres.'),
    }),
    onSubmit: (values) => {
      // Aquí puedes manejar el envío del formulario con Fetch o Axios
      console.log(values);
    },
  });

  console.log(bgImage)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-25"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'blur(8px)',
          zIndex: -1,
        }}
      ></div>

      {/* Contenedor principal */}
      <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-8 text-center relative">
        {/* Logo */}
        <div>
            <img src={LoginLogo} alt="Logo" className="mx-auto w-28" />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Iniciar Sesión</h2>
        <label className="block text-gray-700 text-sm font-normal mb-8">
          Inicia sesión con tu número de nómina
        </label>

        {/* Formulario */}
        <form onSubmit={formik.handleSubmit}>
          {/* Campo No. Nómina */}
          <div className="mb-4">
            <input type="hidden" name="_csrf" value={csrfToken} />
            <label htmlFor="payrollNumber" className="block text-gray-700 text-sm font-semibold mb-2">
              No. Nómina
            </label>
            <input
              id="payrollNumber"
              type="number"
              name="payrollNumber"
              placeholder="No. Nómina"
              value={formik.values.payrollNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.payrollNumber && formik.errors.payrollNumber && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.payrollNumber}</p>
            )}
          </div>

          {/* Campo Contraseña */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="*********"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
            )}
          </div>

          {/* Botón de envío */}
          <button
            onClick={formik.handleSubmit}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-2/3 focus:outline-none focus:shadow-outline"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Enlace Olvidaste tu contraseña */}
        <p className="text-sm text-blue-500 mt-4 cursor-pointer">¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
};

export default Login;
