import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AccidentForm from '../pages/AccidentForm';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastrar-acidente" element={<AccidentForm />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
