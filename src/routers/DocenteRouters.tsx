import { Route, Routes } from 'react-router-dom';
import { DocenteHome } from '../pages/docente/DocenteHome';

function DocenteRouters() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DocenteHome />} />
      </Routes>
    </>
  )
}
export default DocenteRouters;
