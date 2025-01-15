import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      repeatPassword: '',
      payrollNumber: '',
      teamId: '',
      isAdmin: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('El nombre es obligatorio.')
        .min(2, 'El nombre debe tener al menos 2 caracteres.'),
      lastName: Yup.string()
        .required('El apellido es obligatorio.')
        .min(2, 'El apellido debe tener al menos 2 caracteres.'),
      phoneNumber: Yup.string()
        .required('El número de teléfono es obligatorio.')
        .matches(
          /^(\d{10}|\d{3} \d{3} \d{4})$/,
          'El número de teléfono debe ser válido (ejemplo: 4491234567 o 449 123 45 67).'
        ),
      password: Yup.string()
        .required('La contraseña es obligatoria.')
        .min(6, 'La contraseña debe tener al menos 6 caracteres.'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir.')
        .required('Confirmar la contraseña es obligatorio.'),
      payrollNumber: Yup.string()
        .required('El número de nómina es obligatorio.')
        .matches(/^\d{4,6}$/, 'El número de nómina debe tener entre 4 y 6 dígitos.'),
      teamId: Yup.string().required('El equipo es obligatorio.'),
    }),
    onSubmit: (values) => {
      onSubmit(values); // Enviar los datos al componente padre
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8 my-2">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre(s)</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="John"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-sm text-red-500">{formik.errors.firstName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Morgan Smith"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="text-sm text-red-500">{formik.errors.lastName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Número de Teléfono</label>
        <input
          type="number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="449 123 45 67"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <p className="text-sm text-red-500">{formik.errors.phoneNumber}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="******"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-sm text-red-500">{formik.errors.password}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
        <input
          type="password"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="******"
          className="block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword && (
          <p className="text-sm text-red-500">{formik.errors.repeatPassword}</p>
        )}
      </div>

      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">No. Nómina</label>
          <input
            type="number"
            name="payrollNumber"
            value={formik.values.payrollNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="1234"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.touched.payrollNumber && formik.errors.payrollNumber && (
            <p className="text-sm text-red-500">{formik.errors.payrollNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Equipo</label>
          <select
            name="teamId"
            value={formik.values.teamId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione un equipo</option>
            <option value="1">Equipo 1</option>
            <option value="2">Equipo 2</option>
          </select>
          {formik.touched.teamId && formik.errors.teamId && (
            <p className="text-sm text-red-500">{formik.errors.teamId}</p>
          )}
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 mr-2">Administrador</label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={formik.values.isAdmin}
            onChange={formik.handleChange}
            className="block"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Agregar Usuario
      </button>
    </form>
  );
};

export default UserForm;
