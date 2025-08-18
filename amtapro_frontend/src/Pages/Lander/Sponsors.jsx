import React from 'react';

const sponsors = [
  '/sponsors/nike.png',
  '/sponsors/adidas.png',
  '/sponsors/puma.png',
  '/sponsors/standard-bank.png',
  '/sponsors/total.png',
  '/sponsors/mtn.png',
];

const Sponsors = () => {
  return (
    <section className="bg-[var(--background)] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-[var(--foreground)]">Our Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:scale-105 transition duration-300"
            >
              <img src={logo} alt={`Sponsor ${index}`} className="mx-auto h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
