import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PackageCard from '../../components/PackageCard';
import PackageModal from '../../components/PackageModal';

const exteriorPackages = [
  {
    title: 'Quick Wash',
    shortDescription: 'A quick and thorough wash for your vehicle.',
    price: { gold: '$40', white: '$50' },
    features: [
      'Exterior',
      'Full pre-rinse',
      'Full foam cannon spray down',
      'Wheels and wheel wells cleaned',
      'Full contact wash',
      'Hand / Blow dried',
      'Tire Shine Applied',
    ],
  },
  {
    title: 'Wash and Wax',
    shortDescription: 'Add a protective wax to your wash.',
    price: { gold: '$60', white: '$80' },
    features: [
      'Everything in Quick Wash +',
      '+ Paint Sealant/Wax applied to all panels',
    ],
    previousFeatures: {
      quick: [
        'Full pre-rinse',
        'Full foam cannon spray down',
        'Wheels and wheel wells cleaned',
        'Full contact wash',
        'Hand / Blow dried',
        'Tire Shine Applied',
      ],
    },
  },
  {
    title: 'Complete Wash',
    shortDescription: 'The ultimate exterior care for your vehicle.',
    price: { gold: '$80', white: '$100' },
    features: [
      'Everything in Wash and Wax +',
      '+ Full clay bar decontamination',
      '+ Chemical iron decontamination',
      '+ Rain repellant applied to glass surfaces',
    ],
    previousFeatures: {
      wash: [
        'Full pre-rinse',
        'Full foam cannon spray down',
        'Wheels and wheel wells cleaned',
        'Full contact wash',
        'Hand / Blow dried',
        'Tire Shine Applied',
        'Paint Sealant/Wax applied to all panels',
      ],
    },
  },
];

const Exterior = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
    setExpanded({});
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Exterior Packages</h1>
        <p className="text-lg text-gray-300">
          Choose the perfect exterior detailing package for your vehicle.
        </p>
      </header>

      {/* Packages Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-20">
        {exteriorPackages.map((pkg, index) => (
          <PackageCard
            key={index}
            pkg={pkg}
            onClick={() => setSelectedPackage(pkg)}
          />
        ))}
      </div>

      {/* Modal */}
      <PackageModal
        selectedPackage={selectedPackage}
        expanded={expanded}
        onClose={handleCloseModal}
        onToggleExpand={handleToggleExpand}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Exterior;