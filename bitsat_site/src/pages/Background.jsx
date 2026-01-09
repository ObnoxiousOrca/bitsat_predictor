import React from 'react';
import { Link } from 'react-router-dom';

const Background = () => {
  // Placeholder data for subheadings
  const sections = [
    { title: "Historical Cutoffs", description: "Analysis of past 5 years of BITSAT trends.", link: "/background/history" },
    { title: "Campus Stats", description: "Placement records and campus infrastructure data.", link: "/background/stats" },
    { title: "Branch Overview", description: "Detailed curriculum and scope for each engineering branch.", link: "/background/branches" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Background Information</h1>
        <p className="text-lg text-gray-600">Explore usage statistics, historical data, and branch details.</p>
      </div>

      <div className="grid gap-6">
        {sections.map((section, index) => (
          <Link 
            key={index} 
            to="#" // Placeholder link as requested "linked to a new page" (pages not yet defined)
            onClick={(e) => { e.preventDefault(); alert("Detailed page coming soon!"); }}
            className="block group bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h2>
                <p className="text-gray-600 mt-2">{section.description}</p>
              </div>
              <div className="text-gray-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Background;
