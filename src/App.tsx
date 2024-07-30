import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RoutesConfig from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesConfig></RoutesConfig>
    </BrowserRouter>
  );
}

export default App;
