import React from 'react';

const ResetPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-opacity-25" 
        style={{
          backgroundImage: "url('/images/bgLogin.jpg')",
          filter: "blur(8px)",
          zIndex: -1
        }}
      />

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-8 text-center relative">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Establecer nueva contraseña
        </h2>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label 
              htmlFor="password" 
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Nueva contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              className="block w-full p-2 border rounded focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="repeatPassword" 
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="******"
              className="block w-full p-2 border rounded focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
