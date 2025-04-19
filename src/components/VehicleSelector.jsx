import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const vehicleSizes = {
  Sedan: 'small',
  Coupe: 'small',
  'Small SUV': 'small',
  Truck: 'large',
  'Large SUV': 'large',
  Minivan: 'large',
};

const makes = [
  'Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Nissan', 'Hyundai', 'Kia', 'Chevrolet',
  'Mazda', 'Audi', 'Volkswagen', 'Tesla', 'Lexus', 'Dodge', 'Ram', 'Subaru', 'Jeep', 'GMC', 'Acura', 'Other',
];

const models = {
  Toyota: ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Tacoma', 'Other'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Other'],
  Ford: ['F-150', 'Escape', 'Explorer', 'Other'],
  BMW: ['3 Series', 'X5', 'i4', 'Other'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'Other'],
  Other: ['Other'],
};

const packages = {
  Full: [
    { label: 'Basic In and Out', price: { small: 110, large: 150 } },
    { label: 'Gold Package', price: { small: 170, large: 220 } },
    { label: 'Royal Touch', price: { small: 250, large: 300 } },
  ],
  Interior: [
    { label: 'Basic Interior', price: { small: 80, large: 110 } },
    { label: 'Deep Interior', price: { small: 130, large: 150 } },
    { label: 'Interior Reset', price: { small: 180, large: 230 } },
  ],
  Exterior: [
    { label: 'Quick Wash', price: { small: 40, large: 50 } },
    { label: 'Wash and Wax', price: { small: 60, large: 80 } },
    { label: 'Complete Wash', price: { small: 80, large: 100 } },
  ],
};

const breakdownMap = {
  'Basic In and Out': {
    included: ['Interior vacuum', 'Disinfected panels', 'Foam wash', 'Tire shine'],
    new: [],
  },
  'Gold Package': {
    included: ['Basic In and Out package'],
    new: ['Seat shampoo', 'Leather conditioning', 'Paint sealant'],
  },
  'Royal Touch': {
    included: ['Gold Package'],
    new: ['Full interior reset', 'Clay bar', 'Iron decontamination', 'Rain repellant on glass'],
  },
  'Basic Interior': {
    included: ['Vacuum', 'Wipe down', 'Mat wash', 'Streak-free windows'],
    new: [],
  },
  'Deep Interior': {
    included: ['Basic Interior'],
    new: ['Steam clean', 'Seat shampoo', 'Leather & panel conditioning'],
  },
  'Interior Reset': {
    included: ['Deep Interior'],
    new: ['Stain removal', 'Headliner cleaning', 'Pet hair removal'],
  },
  'Quick Wash': {
    included: ['Rinse', 'Foam cannon', 'Contact wash', 'Tire shine'],
    new: [],
  },
  'Wash and Wax': {
    included: ['Quick Wash'],
    new: ['Paint sealant/wax'],
  },
  'Complete Wash': {
    included: ['Wash and Wax'],
    new: ['Clay bar', 'Iron decon', 'Glass repellant'],
  },
};

const VehicleSelector = () => {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const vehicleSize = vehicleSizes[vehicleType] || 'small';

  const handlePackageSelect = (pkg) => {
    const query = new URLSearchParams({
      vehicleType,
      make,
      model,
      serviceType,
      package: pkg.label,
      price: pkg.price[vehicleSize].toString(),
    }).toString();
    navigate(`/booking?${query}`);
  };

  return (
<section className="py-20 px-6" style={{ backgroundColor: '#f6e27f' }}>
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
    <h3 className="text-4xl font-bold mb-12 text-black">Get a Quick Quote</h3>

        {/* Vehicle Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          <div>
            <label className="block mb-2 font-medium text-black">Vehicle Type</label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full border border-black px-4 py-2 rounded text-black"
            >
              <option value="">Choose...</option>
              {Object.keys(vehicleSizes).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-black">Make</label>
            <select
              value={make}
              onChange={(e) => {
                setMake(e.target.value);
                setModel('');
              }}
              className="w-full border border-black px-4 py-2 rounded text-black"
            >
              <option value="">Choose...</option>
              {makes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-black">Model</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full border border-black px-4 py-2 rounded text-black"
            >
              <option value="">Choose...</option>
              {(models[make] || ['Other']).map((mod) => (
                <option key={mod} value={mod}>{mod}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Service Type Dropdown */}
        <div className="mb-10">
          <label className="block mb-2 font-medium text-black text-left">What type of service are you looking for?</label>
          <select
            value={serviceType}
            onChange={(e) => {
              setServiceType(e.target.value);
              setExpandedIndex(null);
            }}
            className="w-full border border-black px-4 py-2 rounded text-black"
          >
            <option value="">Choose...</option>
            {Object.keys(packages).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Package Cards */}
        {vehicleType && make && model && serviceType && (
          <div className="text-left space-y-6">
            {packages[serviceType].map((pkg, i) => {
              const breakdown = breakdownMap[pkg.label] || { included: [], new: [] };
              return (
                <div key={i} className="border border-black p-6 rounded-xl hover:shadow-lg transition">
                  <button
                    onClick={() => setExpandedIndex((prev) => (prev === i ? null : i))}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <div className="font-bold text-xl text-black">{pkg.label}</div>
                    <div className="text-[#FFD700] font-bold text-xl">${pkg.price[vehicleSize]}</div>
                  </button>

                  {expandedIndex === i && (
                    <div className="mt-4 text-black text-sm space-y-4">
                      <div>
                        <strong className="text-md">What's Included:</strong>
                        <ul className="list-disc ml-5 mt-1">
                          {breakdown.included.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      {breakdown.new.length > 0 && (
                        <div>
                          <strong className="text-md">What's New in This Package:</strong>
                          <ul className="list-disc ml-5 mt-1">
                            {breakdown.new.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <button
                        onClick={() => handlePackageSelect(pkg)}
                        className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-[#FFD700] hover:text-black transition font-semibold"
                      >
                        Continue to Booking
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleSelector;
