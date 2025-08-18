import React from 'react';
import { team } from '../assets/links';
import Title from '../Pages/Title';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

const Team = () => {
  return (
    <div>
      <Header />
      <section className="bg-background py-16 px-4">
        <div autoFocus className="max-w-6xl mx-auto text-center">
          <Title title="Meet the Team" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
                title={member.name}
              >
                <img
                  src={member.src}
                  alt={`Photo of ${member.name}`}
                  className="mx-auto size-30 rounded-full object-cover mb-4 border-4 border-green-500 hover:border-green-600 transition duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-800 hover:text-green-600">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-lg mt-2 text-gray-600">{member.role}</p>
                )}
                {member.href && (
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-sm text-green-600 font-medium hover:underline"
                  >
                    View Profile ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
