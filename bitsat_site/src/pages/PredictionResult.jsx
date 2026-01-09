import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const PredictionResult = () => {
  const location = useLocation();
  const score = location.state?.score || "N/A";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate calculation delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Prediction Results</h1>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 text-lg">Analyzing trends for score: {score}...</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="mb-8">
            <span className="text-gray-500 text-lg">Your Score</span>
            <div className="text-5xl font-extrabold text-blue-600 mt-2">{score}</div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Likely Branches</h3>
            <ul className="text-left space-y-3 text-green-900">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Computer Science (Pilani) - Low Chance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Electronics & Instrumentation (Goa) - High Chance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Mechanical Engineering (Hyderabad) - Guaranteed
              </li>
            </ul>
            <p className="text-xs text-green-700 mt-4 italic">
              * Note: These are example predictions. Actual logic to be implemented later.
            </p>
          </div>

          <Link to="/" className="inline-block px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Check Another Score
          </Link>
        </div>
      )}
    </div>
  );
};

export default PredictionResult;
