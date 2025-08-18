import React, { useState, useEffect, useRef } from 'react';
import heroBg from '../../assets/hero-bg.jpg';
import ImATalent from '../Buttons/ImATalent';
import FindATalent from '../Buttons/FindATalent';

const Hero = () => {
  const [text, setText] = useState("Talent");
  const indexRef = useRef(0);
  const keys = ["Talent", "Academy", "Team", "Passion", "Scout", "Highlights", "Profile", "Journey"];

  useEffect(() => {
    const textInterval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % keys.length;
      setText(keys[indexRef.current]);
    }, 2500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="mt-[-100px] pt-30 pb-20 p-10 2xl:h-screen text-center flex flex-col items-center justify-center bg-cover bg-center bg-green-400 bg-blend-multiply" style={{ backgroundImage: `url(${heroBg})` }}>
      <h1 className="text-[#FAFAFA] sm:text-7xl text-5xl font-bold max-w-6xl mx-auto">
        Showcase your <span className="text-primary">Football {text}</span> to the world.
      </h1>
      <p className="hidden md:block text-[#FFFFFF] text-xl max-w-2xl mx-auto mt-8 mb-3">
        Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide, <strong>take your football journey to the next level and be seen by the right people.</strong>
      </p>
      <p className="md:hidden text-[#FFFFFF] text-xl max-w-xl mx-auto mt-5 mb-3">
        Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide.
      </p>
      <div className="flex items-center justify-center gap-4 mt-6">
        <ImATalent />
        <FindATalent />
      </div>
    </div>
  );
};

export default Hero;
