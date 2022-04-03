import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AdminHome } from '../pages/admin/AdminHome';
import { AsignacionAlumnos } from '../pages/admin/AsignacionAlumnos';
import { RegistroAlumno } from '../pages/admin/RegistroAlumno';

function AdminRouters() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/registroAlumno" element={<RegistroAlumno />} />
      <Route path="/asignacionAula" element={<AsignacionAlumnos />} />
    </Routes>
  )
}
export default AdminRouters;
