import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Countries from './components/Countries';
import Process from './components/Process';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Countries />
      <Process />
      <ContactForm />
    </div>
  );
}

export default App;