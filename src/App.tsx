import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './layouts/Auth';
import { Main } from './routers/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
