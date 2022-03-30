import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './layouts/Auth';
import Alumno from './routers/Alumno';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/alumno" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
