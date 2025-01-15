import React, { useState } from 'react';

const ForgotPassword = () => {
  const [payrollNumber, setPayrollNumber] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-opacity-25"
        style={{
          backgroundImage: "url('../images/bgLogin.jpg')",
          filter: "blur(8px)",
          zIndex: -1
        }}
      />

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-8 text-center relative">
        <div className="mb-1">
          <img 
            src="../images/loginLogo.svg" 
            alt="Logo" 
            className="mx-auto w-40"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Recupera la contraseña
        </h2>
        
        <label htmlFor="username" className="block text-gray-700 text-sm font-normal mb-8">
          Recupera la contraseña del usuario con el número de nómina
        </label>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="max-w-md mx-auto my-5">
            {errors.map((error, index) => (
              <p 
                key={index}
                className="bg-red-600 text-white uppercase text-xs text-center p-2 mb-1 font-bold"
              >
                {error.msg}
              </p>
            ))}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="payroll_number" 
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              No. nomina
            </label>
            <input
              id="username"
              type="number"
              name="payroll_number"
              placeholder="12345"
              value={payrollNumber}
              onChange={(e) => setPayrollNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-2/3 focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
