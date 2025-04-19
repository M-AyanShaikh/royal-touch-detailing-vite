import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PackageCard from '../../components/PackageCard';
import PackageModal from '../../components/PackageModal';

const interiorPackages = [
  {
    title: 'Basic Interior',
    shortDescription: 'A quick refresh for your car’s interior.',
    price: { gold: '$80', white: '$110' },
    features: [
      'Full vacuum',
      'All door panels disinfected and cleaned',
      'Centre console and dash are cleaned and disinfected',
      'Rubber floor mats are washed',
      'Windows are cleaned and left streak free',
    ],
  },
  {
    title: 'Deep Interior',
    shortDescription: 'Deep cleaning and protection for your car’s interior.',
    price: { gold: '$130', white: '$150' },
    features: [
      'Everything in Basic Interior +',
      '+ Seat shampooing and Steaming',
      '+ Leather seats and surfaces disinfected and protected',
      '+ Interior Panels conditioned and protected',
      '+ Vents are steamed and disinfected',
      '+ Pedals are steamed',
      '+ Door jambs are wiped down',
    ],
    previousFeatures: {
      basic: [
        'Full vacuum',
        'All door panels disinfected and cleaned',
        'Centre console and dash are cleaned and disinfected',
        'Rubber floor mats are washed',
        'Windows are cleaned and left streak free',
      ],
    },
  },
  {
    title: 'Interior Reset',
    shortDescription: 'The ultimate care for your car’s interior.',
    price: { gold: '$180', white: '$230' },
    features: [
      'Everything in Deep Interior +',
      '+ Salt Stain Removal',
      '+ Headliner Cleaning',
      '+ Pet Hair Removal',
    ],
    previousFeatures: {
      deep: [
        'Full vacuum',
        'All door panels disinfected and cleaned',
        'Centre console and dash are cleaned and disinfected',
        'Rubber floor mats are washed',
        'Windows are cleaned and left streak free',
        'Seat shampooing and Steaming',
        'Leather seats and surfaces disinfected and protected',
        'Interior Panels conditioned and protected',
        'Vents are steamed and disinfected',
        'Pedals are steamed',
        'Door jambs are wiped down',
      ]
    },
  },
];

const Interior = () => {
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
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Interior Packages</h1>
        <p className="text-lg text-gray-300">
          Choose the perfect interior detailing package for your vehicle.
        </p>
      </header>

      {/* Packages Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-20">
        {interiorPackages.map((pkg, index) => (
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

export default Interior;