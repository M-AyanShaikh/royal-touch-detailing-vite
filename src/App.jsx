import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
// import Exterior from './pages/packages/Exterior';
import Interior from './pages/packages/Interior';
import Package from './pages/packages/Package';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/packages/exterior" element={<Exterior />} /> */}
      <Route path="/packages/interior" element={<Interior />} />
      <Route path="/packages/package" element={<Package />} />
    </Routes>
  );
};

export default App;