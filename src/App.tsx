import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './layouts/Auth';
import { Main } from './pages/Main';
import Alumno from './routers/Alumno';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
