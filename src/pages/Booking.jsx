import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carType: '',
    seaters: '',
    location: '',
    dateRange: null, // Updated to store a Date object
    time: {
      hour: '',
      minute: '',
      ampm: '',
    },
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateRange: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Car Make: ${formData.carMake}
      Car Model: ${formData.carModel}
      Location: ${formData.location}
      Estimated Date Range: ${formData.dateRange ? formData.dateRange.toLocaleDateString() : ''}
      Preferred Time: ${formData.time.hour}:${formData.time.minute} ${formData.time.ampm}
      Additional Information: ${formData.additionalInfo}
    `;

    try {
      await fetch('https://formsubmit.co/test@test.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'New Booking Request',
          message: emailBody,
        }),
      });
      alert('Booking request sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        carMake: '',
        carModel: '',
        carType: '',
        seaters: '',
        location: '',
        dateRange: null,
        time: {
          hour: '',
          minute: '',
          ampm: '',
        },
        additionalInfo: '',
      });
    } catch (error) {
      alert('Failed to send booking request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold text-[#FFD700] mb-4">Book Your Detailing</h1>
        <p className="text-lg text-gray-300">
          Fill out the form below to schedule your car detailing appointment.
        </p>
      </header>

      {/* Booking Form */}
      <div className="max-w-4xl mx-auto px-6 md:px-20">
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="carMake" className="block text-sm font-medium text-gray-300">
                Car Make
              </label>
              <input
                type="text"
                id="carMake"
                name="carMake"
                value={formData.carMake}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="carModel" className="block text-sm font-medium text-gray-300">
                Car Model
              </label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-300">
                Location for Detailing
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="dateRange" className="block text-sm font-medium text-gray-300">
                Estimated Date Range
              </label>
              <DatePicker
                selected={formData.dateRange}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select a date"
                className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-300">
                Preferred Time
              </label>
              <div className="flex space-x-2">
                {/* Hour Selector */}
                <select
                  name="hour"
                  value={formData.time.hour || ''}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      time: { ...prevData.time, hour: e.target.value },
                    }))
                  }
                  required
                  className="bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
                >
                  <option value="" disabled>
                    Hour
                  </option>
                  {[...Array(12).keys()].map((hour) => (
                    <option key={hour + 1} value={hour + 1}>
                      {hour + 1}
                    </option>
                  ))}
                </select>

                {/* Minute Selector */}
                <select
                  name="minute"
                  value={formData.time.minute || ''}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      time: { ...prevData.time, minute: e.target.value },
                    }))
                  }
                  required
                  className="bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
                >
                  <option value="" disabled>
                    Minute
                  </option>
                  {[0, 15, 30, 45].map((minute) => (
                    <option key={minute} value={minute}>
                      {minute.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>

                {/* AM/PM Selector */}
                <select
                  name="ampm"
                  value={formData.time.ampm || ''}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      time: { ...prevData.time, ampm: e.target.value },
                    }))
                  }
                  required
                  className="bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
                >
                  <option value="" disabled>
                    AM/PM
                  </option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-md shadow-sm focus:ring-[#FFD700] focus:border-[#FFD700] p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#FFD700] transition-all"
          >
            Submit Booking
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;