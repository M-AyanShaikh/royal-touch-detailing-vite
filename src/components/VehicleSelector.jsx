// VehicleSelector.jsx
import React, { useState } from 'react';

const VehicleSelector = () => {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSubmit = () => {
    alert(`Vehicle: ${vehicle}, Make: ${make}, Model: ${model}, Package: ${selectedPackage}`);
  };

  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8 text-black">Get a Quick Quote</h3>
        {step === 1 && (
          <div>
            <label className="block mb-4">Select your vehicle type:</label>
            <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="border px-4 py-2 rounded w-full">
              <option value="">Choose...</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
              <option value="Coupe">Coupe</option>
            </select>
            <button onClick={() => setStep(2)} disabled={!vehicle} className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-[#FFD700] hover:text-black transition">
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">Make (optional)</label>
            <input value={make} onChange={(e) => setMake(e.target.value)} className="border px-4 py-2 rounded w-full mb-4" placeholder="e.g. Toyota" />
            <label className="block mb-2">Model (optional)</label>
            <input value={model} onChange={(e) => setModel(e.target.value)} className="border px-4 py-2 rounded w-full" placeholder="e.g. Corolla" />
            <button onClick={() => setStep(3)} className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-[#FFD700] hover:text-black transition">
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-4">Choose your package:</label>
            <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} className="border px-4 py-2 rounded w-full">
              <option value="">Choose...</option>
              <option value="Basic">Basic - $80</option>
              <option value="Premium">Premium - $140</option>
              <option value="Elite">Elite - $200</option>
            </select>
            <button onClick={handleSubmit} disabled={!selectedPackage} className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-[#FFD700] hover:text-black transition">
              See Estimate
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleSelector;