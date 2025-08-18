import React from 'react';

const galleryImages = [
  '/gallery/game1.jpg',
  '/gallery/game2.jpg',
  '/gallery/training1.jpg',
  '/gallery/team1.jpg',
  '/gallery/coach-talk.jpg',
  '/gallery/victory.jpg',
];

const Gallery = () => {
  return (
    <section className="bg-[var(--background)] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-[var(--foreground)]">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-lg">
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
