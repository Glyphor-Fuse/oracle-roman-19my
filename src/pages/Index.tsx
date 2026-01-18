import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Optional: Add more sections here if needed */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by industry leaders</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale mt-8">
              <div className="text-xl font-bold">ACME CORP</div>
              <div className="text-xl font-bold">GLOBEX</div>
              <div className="text-xl font-bold">SOYLENT</div>
              <div className="text-xl font-bold">INITECH</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
