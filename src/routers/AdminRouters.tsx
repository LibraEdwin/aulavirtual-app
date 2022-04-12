import { Route, Routes } from 'react-router-dom';
import { AdminHome } from '../pages/admin/AdminHome';
import { AsignacionAlumnos } from '../pages/admin/AsignacionAlumnos';
import { RegistroUsuarioAlumno } from '../pages/admin/RegistroUsuarioAlumno';

function AdminRouters() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/registroUsuariosAlumnos" element={<RegistroUsuarioAlumno />} />
      <Route path="/asignacionAula" element={<AsignacionAlumnos />} />
      <Route path="/asignacionAula" element={<AsignacionAlumnos />} />
    </Routes>
  )
}
export default AdminRouters;
