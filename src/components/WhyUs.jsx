// WhyUs.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react'; // optional: if you're using Lucide for icons

const reasons = [
  "Completely Mobile – No need to leave the house",
  "100% Satisfaction Guarantee",
  "100+ 5 Star Reviews",
  "3+ Years in Service",
  "Licensed and Insured",
  "Serving the Greater Toronto Area",
];

const WhyUs = () => {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-10 text-black">Why Choose Royal Touch?</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-700">
          {reasons.map((reason, i) => (
            <li key={i} className="flex items-start gap-3 bg-[#FAFAFA] p-4 rounded-md shadow-sm border border-gray-200">
              <CheckCircle className="text-[#FFD700] w-6 h-6 mt-1" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
