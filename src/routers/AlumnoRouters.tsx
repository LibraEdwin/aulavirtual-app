import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AlumnoHome } from '../pages/alumno/AlumnoHome';
import { AlunmoEvento } from '../pages/alumno/AlunmoEvento';

function AlumnoRouters() {
  return (
    <Routes>
      <Route path="/" element={<AlumnoHome />} />
      <Route path="/evento/*" element={<AlunmoEvento />} />
    </Routes>
  )
}
export default AlumnoRouters;
