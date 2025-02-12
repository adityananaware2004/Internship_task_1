import React from 'react';

const countries = [
  {
    name: 'Russia',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80',
    features: ['Top Medical Universities', 'Affordable Tuition', 'Rich Culture']
  },
  {
    name: 'Kazakhstan',
    image: 'https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&q=80',
    features: ['Modern Facilities', 'English Medium', 'Safe Environment']
  },
  {
    name: 'Philippines',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80',
    features: ['US-Based Curriculum', 'Clinical Rotations', 'Tropical Medicine']
  },
  {
    name: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80',
    features: ['European Standards', 'No Language Barrier', 'Beautiful Location']
  }
];

const Countries = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Top Destinations for MBBS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{country.name}</h3>
                <ul className="space-y-2">
                  {country.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;