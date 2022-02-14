import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles/components/layout/normalize.css';
import './App.css';

import Hd from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import NovedadesPage from './pages/Novedades';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>

      <Hd />
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/productos" exact element={<Productos />} />
        <Route path="/servicios" exact element={<Servicios />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<Contacto />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
