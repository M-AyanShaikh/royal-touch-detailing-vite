// PackageComparison.jsx
import React from 'react';

const PackageComparison = () => {
  return (
    <section className="py-20 px-6 bg-[#FAFAFA] border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center text-black">Compare Our Packages</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-300">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#F1F1F1] text-[#FFD700] uppercase">
                <th className="p-4 border-b border-gray-300">Package</th>
                <th className="p-4 border-b border-gray-300">Interior</th>
                <th className="p-4 border-b border-gray-300">Exterior</th>
                <th className="p-4 border-b border-gray-300">Engine Bay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-4 border-b border-gray-200 font-medium">Basic</td>
                <td className="p-4 border-b border-gray-200">Vacuum + Wipe Down</td>
                <td className="p-4 border-b border-gray-200">Wash & Dry</td>
                <td className="p-4 border-b border-gray-200">-</td>
              </tr>
              <tr className="bg-[#FCFCFC]">
                <td className="p-4 border-b border-gray-200 font-medium">Premium</td>
                <td className="p-4 border-b border-gray-200">Shampoo + Leather Treat</td>
                <td className="p-4 border-b border-gray-200">Clay + Wax</td>
                <td className="p-4 border-b border-gray-200">-</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 border-b border-gray-200 font-medium">Elite</td>
                <td className="p-4 border-b border-gray-200">Steam Clean + Protection</td>
                <td className="p-4 border-b border-gray-200">Detail + Wax + Tire Shine</td>
                <td className="p-4 border-b border-gray-200">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;
