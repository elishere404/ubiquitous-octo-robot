import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Profile';
import Projects from './pages/Projects';
import Hobby from './pages/Hobby/Hobby';
import HobbyPage from './pages/Hobby/HobbyPage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/hobby/:id" element={<HobbyPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
