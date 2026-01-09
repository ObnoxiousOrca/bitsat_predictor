import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [score, setScore] = useState('');
  const navigate = useNavigate();

  const handlePredict = () => {
    if (!score || isNaN(score) || parseInt(score) < 0) {
      alert("Please enter a valid positive integer.");
      return;
    }
    // Mock user tracking
    const currentCount = parseInt(localStorage.getItem('userCount') || '0');
    localStorage.setItem('userCount', (currentCount + 1).toString());
    
    navigate('/predict', { state: { score } });
  };

  // Placeholder images - using gradients/colors for now as source is to be added later
  const ImageButton = ({ label, color }) => (
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105">
      <div className={`h-40 w-full ${color} flex items-center justify-center`}>
        <span className="text-white font-bold text-xl drop-shadow-md">{label}</span>
      </div>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
    </div>
  );

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* 4 Image Buttons Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImageButton label="Resource A" color="bg-gradient-to-br from-blue-400 to-blue-600" />
          <ImageButton label="Resource B" color="bg-gradient-to-br from-purple-400 to-purple-600" />
          <ImageButton label="Resource C" color="bg-gradient-to-br from-teal-400 to-teal-600" />
          <ImageButton label="Resource D" color="bg-gradient-to-br from-orange-400 to-orange-600" />
        </div>
      </section>

      {/* Warning/Note Section */}
      <section className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-sm">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Note</h3>
        <p className="text-amber-900 leading-relaxed">
          [PLACEHOLDER] This is a space for a large wall of text or warning. 
          Please note that predictions are based on past year trends and may not be 100% accurate for the current year. 
          Edit this text later with actual content.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Prediction Input Section */}
      <section className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Predict Your Branch</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="score" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your BITSAT Score
            </label>
            <input
              type="number"
              id="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="e.g. 300"
              className="block w-full text-center text-2xl p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all outline-none"
              min="0"
            />
          </div>
          <button
            onClick={handlePredict}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Predict Branch ✨
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
