// Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-3/5 h-4/5 px-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b sticky top-0 bg-white z-10 py-4">
          <h2 className="text-lg font-semibold text-gray-800">Registro de Usuario</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            Cerrar X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
