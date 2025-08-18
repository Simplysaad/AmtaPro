import React from 'react';
import { dataA } from '../../assets/links';
import Header from '../Header';
import Footer from '../Footer';

const Academies = () => {
  return (
    <div className="bg-background">
      <h1 className="xl:text-3xl text-2xl font-bold text-center mb-4 p-3 shadow-2xl">
        Explore over {dataA.length - 1}+ Academies
      </h1>
      <section className="max-w-6xl mx-auto px-5 mb-5">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataA.map((academy) => (
            <article
              key={academy.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 border border-green-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-green-800">
                  🏫 {academy.name}
                </h2>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  ID: {academy.id}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <p>📍 <span className="font-medium">Location:</span> {academy.location}</p>
                <p>📧 <span className="font-medium">Email:</span> {academy.email}</p>
                <p>
                  🔗 <span className="font-medium">Social:</span>{" "}
                  <a
                    href={academy.socialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {academy.socialLink}
                  </a>
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  Verified
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                  Youth Program
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academies;