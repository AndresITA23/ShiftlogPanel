// AdminPanel.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import UserForm from "./UserForm";

const AdminPanel = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const users = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      payroll_number: "1234",
      phone_number: "4491234567",
      team: { name: "Equipo A" },
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      payroll_number: "5678",
      phone_number: "4499876543",
      team: { name: "Equipo B" },
    },
  ];

  const handleUserSubmit = (data) => {
    console.log("User data:", data);
    setModalOpen(false); // Cerrar el modal después de enviar el formulario
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <h1 className="text-xl font-bold">Panel de Administración</h1>
        <div className="flex gap-4">
          <button
            onClick={handleOpenModal}
            className="px-5 py-3 rounded-md text-neutral-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Agregar Usuario
          </button>
          <button className="px-5 py-3 rounded-md text-neutral-100 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserForm onSubmit={handleUserSubmit} />
      </Modal>

      <div className="px-8 mt-5">
        {/* Tabla */}
        <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-300">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Status</th>
              <th>No.Nómina</th>
              <th>Teléfono</th>
              <th>Equipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td>{index + 1}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  Activo
                  <i className="bx bxs-circle text-xs text-lime-500 ml-1"></i>
                </td>
                <td>{user.payroll_number}</td>
                <td>{user.phone_number}</td>
                <td>{user.team.name}</td>
                <td className="py-3 flex justify-center items-center gap-4">
                  <button className="px-3 py-1 text-indigo-500 border rounded-md border-indigo-500 hover:text-neutral-100 hover:bg-indigo-500">
                    <i className="bx bx-window-alt"></i>
                  </button>
                  <button className="px-3 py-1 text-emerald-500 border rounded-md border-emerald-500 hover:text-neutral-100 hover:bg-emerald-500">
                    <i className="bx bxs-edit-alt"></i>
                  </button>
                  <button className="px-3 py-1 text-red-500 border rounded-md border-red-500 hover:text-neutral-100 hover:bg-red-500">
                    <i className="bx bxs-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
