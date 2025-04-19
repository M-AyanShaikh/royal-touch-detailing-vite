import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PackageCard from '../../components/PackageCard';
import PackageModal from '../../components/PackageModal';

const packages = [
  {
    title: 'Basic In and Out',
    shortDescription: 'Perfect for a quick refresh of your car.',
    price: { gold: '$110', white: '$150' },
    features: [
      'Interior',
      'Full vacuum',
      'All door panels disinfected and cleaned',
      'Centre console and dash are cleaned and disinfected',
      'Rubber floor mats are washed',
      'Windows are cleaned and left streak free',
      '---',
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
    title: 'Gold Package',
    shortDescription: 'Includes everything in Basic plus premium upgrades.',
    price: { gold: '$170', white: '$220' },
    features: [
      'Everything in Basic +',
      'Interior',
      '+ Seat shampooing and Steaming',
      '+ Leather seats and surfaces disinfected and protected',
      '+ Interior Panels conditioned and protected',
      '+ Vents are steamed and disinfected',
      '+ Pedals are steamed',
      '+ Door jambs are wiped down',
      '---',
      'Exterior',
      '+ Paint Sealant/Wax applied to all panels',
    ],
    previousFeatures: {
      basic: [
        'Interior',
        'Full vacuum',
        'All door panels disinfected and cleaned',
        'Centre console and dash are cleaned and disinfected',
        'Rubber floor mats are washed',
        'Windows are cleaned and left streak free',
        '---',
        'Exterior',
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
    title: 'Royal Touch',
    shortDescription: 'The ultimate package for a pristine car.',
    price: { gold: '$250', white: '$300' },
    features: [
      'Everything in Gold +',
      'Interior',
      '+ Salt Stain Removal',
      '+ Headliner Cleaning',
      '+ Pet Hair Removal',
      '---',
      'Exterior',
      '+ Full clay bar decontamination',
      '+ Chemical iron decontamination',
      '+ Rain repellant applied to glass surfaces',
    ],
    previousFeatures: {
      gold: [
        'Interior:',
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
        '---',
        'Exterior:',
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

const Package = () => {
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
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Our Packages</h1>
        <p className="text-lg text-gray-300">
          Choose the perfect package for your vehicle's needs.
        </p>
      </header>

      {/* Packages Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-20">
        {packages.map((pkg, index) => (
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

export default Package;