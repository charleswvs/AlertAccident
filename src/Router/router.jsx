import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AccidentForm from '../pages/AccidentForm';
import ViewAccidentRecord from '../pages/ViewAccidentRecord';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastrar-acidente" element={<AccidentForm />} />
      <Route path="/visualizar-acidente" element={<ViewAccidentRecord />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
