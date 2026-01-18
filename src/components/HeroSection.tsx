import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Design your future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">precision.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          The ultimate platform for creators and developers to build, scale, and manage modern applications with ease. Experience the next generation of digital tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
            Start Building Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-semibold border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
            View Documentation
          </button>
        </div>
        
        {/* Mockup Placeholder */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="aspect-video bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex items-center justify-center">
            <p className="text-gray-500 font-mono">Application Dashboard Preview</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
