import React from 'react';
import { dataA } from '../../assets/links';
import Header from '../Header';
import Footer from '../Footer';
import Title from '../Title'

const Academies = () => {
  return (
    <div className="bg-background p-2">
      <Title title={`Explore over ${dataA.length - 1}0+ Academies and Scouts`}/>
      <section className="max-w-6xl mx-auto px-5 mb-5">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dataA.map((academy) => (
            <article
              key={academy.id}
              className="bg-white shadow-md rounded-xl p-10 hover:shadow-lg transition duration-300 border border-green-100"
            >
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-green-800">
                  {academy.name}
                </h2>
              </div>

              <div className="space-y-2 text-sm">
                <p>📌 <span className="font-medium">Location:</span> {academy.location}</p>
                <p>📧 <span className="font-medium">Email:</span> {academy.email}</p>
                <p>
                  🔗 <span className="font-medium">Social:</span>{" "}
                  <a
                    href={`https://${academy.socialLink}`}
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academies;