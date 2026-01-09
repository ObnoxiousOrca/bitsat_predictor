import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Helper to generate dynamic classes based on active state
  // Colors: Main -> Blue, About -> Orange (from snippet pos 2), Background -> Green (from snippet pos 3)
  // Snippet div order: Blue, Orange, Green.
  // User Prompt Order: Main, About Us, Background.
  const getButtonStyles = (path, baseColor, hoverColor, activeColor) => {
    const active = location.pathname === path;
    return `
      flex items-center justify-center h-12 px-6 rounded-full 
      text-white font-bold text-sm tracking-wide transition-all duration-300
      ${baseColor}
      ${active ? 'ring-4 ring-offset-2 ring-gray-200 scale-105 shadow-xl' : 'opacity-90 hover:opacity-100 hover:scale-105 hover:shadow-lg'}
      active:scale-95 active:shadow-inner
    `;
    // Note: User asked for h-16 (64px) which fits in h-16 navbar but takes full height. 
    // I made it h-12 to look slightly better centered, but I will check if h-16 is strictly required. 
    // User snippet has h-16. I will try to make it fit or use h-14/12 if it looks ridiculous. 
    // Actually, user gave "h-16 rounded-full". I will stick closer to that but maybe scale it down if needed.
    // Let's use h-12 for better UI balance in a h-16 header, or increase header size.
    // I'll stick to h-12 for "classy" look, or I might just use the user's exact classes if forced.
    // "Apply this tailwind css to it" -> I should probably respect h-16.
    // If I make buttons h-16, the navbar needs to be taller than h-16 (64px).
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24"> 
          {/* Increased height to accommodate larger buttons */}
          
          {/* Left side - Logo / Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent transform hover:scale-105 transition-transform">
              BITSAT Predictor
            </Link>
          </div>

          {/* Right side - Navigation Buttons */}
          <div className="hidden md:grid grid-cols-3 gap-4">
             {/* Main - Blue */}
            <Link to="/" className={`
              h-16 w-32 rounded-full bg-blue-500 shadow-md flex items-center justify-center text-white font-bold
              hover:bg-blue-600 hover:shadow-xl active:bg-blue-700 active:shadow-inner active:scale-95 transition-all duration-200
              ${location.pathname === '/' ? 'ring-4 ring-blue-200 ring-offset-2' : ''}
            `}>
              Main
            </Link>
            
            {/* About Us - Orange (Middle in snippet/user request implication) */}
             <Link to="/about" className={`
              h-16 w-32 rounded-full bg-orange-500 shadow-md flex items-center justify-center text-white font-bold
              hover:bg-orange-600 hover:shadow-xl active:bg-orange-700 active:shadow-inner active:scale-95 transition-all duration-200
              ${location.pathname === '/about' ? 'ring-4 ring-orange-200 ring-offset-2' : ''}
            `}>
              About Us
            </Link>

            {/* Background - Green */}
            <Link to="/background" className={`
              h-16 w-32 rounded-full bg-green-500 shadow-md flex items-center justify-center text-white font-bold
              hover:bg-green-600 hover:shadow-xl active:bg-green-700 active:shadow-inner active:scale-95 transition-all duration-200
              ${location.pathname === '/background' ? 'ring-4 ring-green-200 ring-offset-2' : ''}
            `}>
              Background
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
