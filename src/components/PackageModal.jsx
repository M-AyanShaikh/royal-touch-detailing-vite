import React from 'react';
import { motion } from 'framer-motion';

const PackageModal = ({ selectedPackage, expanded, onClose, onToggleExpand }) => {
  if (!selectedPackage) return null;

  // Helper function to get features of the previous package
  const getPreviousPackageFeatures = (feature) => {
    if (feature.startsWith('Everything in Basic')) {
      return selectedPackage.previousFeatures?.basic || [];
    }
    if (feature.startsWith('Everything in Gold')) {
      return selectedPackage.previousFeatures?.gold || [];
    }
    return [];
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={(e) => e.target.id === 'modal-background' && onClose()}
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
                feature.startsWith('Everything') && onToggleExpand(i)
              }
            >
              {feature}
              {/* Expandable List */}
              {feature.startsWith('Everything') && expanded[i] && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expanded[i] ? 'auto' : 0,
                    opacity: expanded[i] ? 1 : 0,
                  }}
                  className="pl-4 mt-2 text-gray-400 overflow-hidden"
                >
                  {getPreviousPackageFeatures(feature).map((subFeature, j) => (
                    <li key={j}>{subFeature}</li>
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
          onClick={onClose}
          className="mt-6 bg-[#FFD700] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#FFD700] transition-all"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default PackageModal;