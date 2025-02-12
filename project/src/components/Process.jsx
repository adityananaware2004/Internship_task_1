import React from 'react';
import { ClipboardCheck, FileCheck, GraduationCap, Plane } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="w-12 h-12 text-blue-600" />,
    title: 'Document Preparation',
    description: 'Gather all required academic and personal documents'
  },
  {
    icon: <FileCheck className="w-12 h-12 text-blue-600" />,
    title: 'Eligibility Check',
    description: 'Verify your qualifications match university requirements'
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: 'University Selection',
    description: 'Choose from our partner universities worldwide'
  },
  {
    icon: <Plane className="w-12 h-12 text-blue-600" />,
    title: 'Visa Process',
    description: 'Complete visa application with our guidance'
  }
];

const Process = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Admission Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;