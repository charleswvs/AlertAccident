import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AccidentForm from '../pages/AccidentForm';
import ViewAccidentRecord from '../pages/ViewAccidentRecord';
import SuccessScreen from '../pages/SuccessScreen';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastrar-acidente" element={<AccidentForm />} />
      <Route path="/visualizar-acidente/:id" element={<ViewAccidentRecord />} />
      <Route path="/sucesso/:id" element={<SuccessScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
