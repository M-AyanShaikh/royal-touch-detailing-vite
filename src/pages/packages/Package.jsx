import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
      'Exterior',
      '+ Paint Sealant/Wax applied to all panels',
    ],
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
      'Exterior',
      '+ Full clay bar decontamination',
      '+ Chemical iron decontamination',
      '+ Rain repellant applied to glass surfaces',
    ],
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

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center py-16"
      >
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Our Packages</h1>
        <p className="text-lg text-gray-300">
          Choose the perfect package for your vehicle's needs.
        </p>
      </motion.header>

      {/* Packages Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-20">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-gray-800 rounded-lg shadow-lg w-full md:w-80 h-80 text-center cursor-pointer overflow-hidden group"
            onClick={() => setSelectedPackage(pkg)}
          >
            {/* Service Name */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-[#FFD700] text-2xl font-bold group-hover:translate-y-[-50%] transition-transform duration-300">
              {pkg.title}
            </div>
            {/* Short Description */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-300 text-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {pkg.shortDescription}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 text-gray-100 max-h-[90vh] overflow-y-auto transition-all duration-300 custom-scrollbar"
          >
            <h2 className="text-3xl font-bold text-[#FFD700] mb-4">
              {selectedPackage.title}
            </h2>
            <ul className="text-gray-300 space-y-2 text-left">
              {selectedPackage.features.map((feature, i) => (
                <li
                  key={i}
                  className={`${
                    feature.startsWith('+') || feature.startsWith('Everything')
                      ? 'text-[#FFD700] font-semibold cursor-pointer'
                      : feature === 'Interior' || feature === 'Exterior'
                      ? 'font-bold text-gray-100 mt-4'
                      : ''
                  }`}
                  onClick={() =>
                    feature.startsWith('Everything') && handleToggleExpand(i)
                  }
                >
                  {feature}
                  {/* Expandable List */}
                  {feature.startsWith('Everything') && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expanded[i] ? 'auto' : 0,
                        opacity: expanded[i] ? 1 : 0,
                      }}
                      className="pl-4 mt-2 text-gray-400 overflow-hidden"
                    >
                      {feature === 'Everything in Basic +' &&
                        packages[0].features.map((basicFeature, j) => (
                          <li key={j}>{basicFeature}</li>
                        ))}
                      {feature === 'Everything in Gold +' &&
                        packages[1].features.map((goldFeature, j) => (
                          <li key={j}>{goldFeature}</li>
                        ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-white font-bold">
                Sedans, Coupes, Small SUVs: {selectedPackage.price.white}
              </p>
              <p className="text-white font-bold">
                Trucks, Minivans, Large SUVs: {selectedPackage.price.gold}
              </p>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-[#FFD700] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#FFD700] transition-all"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Package;