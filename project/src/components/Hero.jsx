import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
          alt="Medical students"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Study MBBS Abroad
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Begin your medical journey with world-class education at prestigious international universities
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;