import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Background from './pages/Background';
import About from './pages/About';
import PredictionResult from './pages/PredictionResult';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<PredictionResult />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
