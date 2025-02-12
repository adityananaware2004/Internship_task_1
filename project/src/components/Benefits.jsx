import React from 'react';
import { Award, BookOpen, Globe2, Coins } from 'lucide-react';

const benefits = [
  {
    icon: <Globe2 className="w-12 h-12 text-blue-600" />,
    title: 'Global Recognition',
    description: 'Degrees recognized worldwide with opportunities to practice internationally'
  },
  {
    icon: <Coins className="w-12 h-12 text-blue-600" />,
    title: 'Affordable Education',
    description: 'Quality medical education at a fraction of domestic costs'
  },
  {
    icon: <BookOpen className="w-12 h-12 text-blue-600" />,
    title: 'Quality Education',
    description: 'World-class facilities and experienced faculty members'
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Cultural Experience',
    description: 'Immerse yourself in diverse cultures while studying'
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Study MBBS Abroad?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;