import React from 'react';
import { dataA } from './academyData';
import Header from '../Header';
import Footer from '../Footer';

const Academies = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <section className="max-w-6xl mx-auto px-5 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
          Start Searching Through {dataA.length - 1}+ Academies
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataA.map((academy) => (
            <article
              key={academy.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-green-800">
                {academy.name}
              </h2>
              <p className="text-sm mb-1">📍 Location: {academy.location}</p>
              <p className="text-sm mb-1">📧 Email: {academy.email}</p>
              <p className="text-sm mb-1">
                🔗 Social:{" "}
                <a
                  href={academy.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  {academy.socialLink}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academies;
