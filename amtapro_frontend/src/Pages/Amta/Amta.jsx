import React from 'react';
import amta from '../../assets/amta.jpg';
import { Link } from 'react-router-dom';

const Amta = () => {
  return (
    <section className="mb-10 px-5">
      <div className="flex flex-col xl:flex-row bg-white shadow-lg mt-10 rounded-4xl overflow-hidden">
        
        <div className="xl:w-1/2 w-full">
          <img
            src={amta}
            alt="Amta"
            className="w-full h-full object-cover xl:rounded-l-4xl"
          />
        </div>

        
        <article className="xl:w-1/2 w-full bg-yellow-500 text-white p-10 flex flex-col justify-center xl:justify-start items-center xl:items-start text-center xl:text-left space-y-3">
          <h1 className="text-4xl font-extrabold tracking-wide">Amta</h1>
          <hr className="w-16 border-white" />

          <p className="text-base italic">Founder of AmtaPro</p>
          <p className="text-lg">📍 Location: Nigeria</p>
          <p className="text-lg">⚽ Position: Striker</p>
          {/* <p className="text-lg">🎂 Age: 24</p> */}
          <p className="text-lg">📏 Height: 6'1"</p>
          <p className="text-lg">🦶 Preferred Foot: Right</p>
          <p className="text-lg">🏟️ Current Club: Rising Stars FC</p>
          <p className="text-lg">🏆 Achievements: 2023 Golden Boot Winner, 2022 Youth League MVP</p>

          <p className="text-sm mt-4 max-w-md">
            Amta is a dynamic forward known for explosive pace, clinical finishing, and visionary leadership on and off the pitch. His journey from grassroots football to founding AmtaPro is a testament to passion, grit, and purpose.
          </p>

          <Link
            to="/contact"
            className="bg-white text-yellow-500 font-semibold px-6 py-2 rounded-full hover:bg-yellow-100 transition duration-300 mt-4"
          >
            View Full Profile
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Amta;
