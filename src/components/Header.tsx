import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-xl font-bold text-gray-900">BrandLogo</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
