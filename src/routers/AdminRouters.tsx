import { Route, Routes } from 'react-router-dom';
import { TablaUsuarioAlumnosDesactivados } from '../components/admin/TablaUsuarioAlumnosDesactivados';
import { AdminHome } from '../pages/admin/AdminHome';
import { AsignacionAlumnos } from '../pages/admin/AsignacionAlumnos';
import { RegistroAlumno } from '../pages/admin/RegistroAlumno';

function AdminRouters() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/registroUsuariosAlumnos" element={<RegistroAlumno />} />
      <Route path="/registroUsuariosAlumnosDesactivados" element={<TablaUsuarioAlumnosDesactivados />} />
      <Route path="/asignacionAula" element={<AsignacionAlumnos />} />
      <Route path="/asignacionAula" element={<AsignacionAlumnos />} />
    </Routes>
  )
}
export default AdminRouters;
