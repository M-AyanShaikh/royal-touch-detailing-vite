import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Interior Detailing',
      description: 'Does the inside of your car need a refresh? Carpets looking a bit muddy or got a few stains in your seats? Take a look at our interior packages to get your car feeling brand new!',
      image: '/images/interior-detailing.jpg',
      link: '/services/interior',
    },
    {
      title: 'Exterior Detailing',
      description: 'Does your car have one too many mud spots? Bird droppings and tree sap plaguing your paint? Look through our exterior services to get your car looking like it just drove out of the dealership!',
      image: '/images/exterior-detailing.jpg',
      link: '/services/exterior',
    },
    {
      title: 'Ceramic Coatings',
      description: 'Ultimate protection, effortless maintenance. Shield your car from the elements, preserve its shine, and reduce upkeep. Elevate your vehicle\'s appearance and longevity with ease!',
      image: '/images/ceramic-coatings.jpg',
      link: '/services/ceramic',
    },
  ];

return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
        <header className="text-center py-16">
            <h1 className="text-4xl font-bold text-gold mb-4">Our Services</h1>
            <p className="text-lg text-gray-300">
                Choose from our premium car detailing services to keep your vehicle looking its best.
            </p>
        </header>

        <div className="space-y-16 px-6 md:px-20">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } items-center gap-8`}
                >
                    {/* Image */}
                    <Link
                        to={service.link}
                        className="group relative block w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_5px_#fbbf24] transition-shadow"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    {/* Description */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gold">{service.title}</h2>
                        <p className="text-gray-300 mt-4">{service.description}</p>
                        <Link
                            to={service.link}
                            className="inline-block mt-6 bg-gold text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default Services;