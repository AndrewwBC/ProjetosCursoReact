import React from 'react';
import Produto from './Produto';
import Specs from './Specs';
import Contato from './Contato';
import Error404 from './Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
        <Route path="specs/:nome" element={<Specs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
