import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Number = ({ number, text }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const cleanNumber = parseInt(number.replace(/\D/g, ''));

  return (
    <div ref={ref} className="mb-10">
      <h1 className="xl:text-[55px] text-[30px] font-bold">
        {inView ? <CountUp end={cleanNumber} duration={5} /> : 0}
        {number.includes('+') && '+'}
      </h1>
      <h1 className="text-2xl text-black mt-2">{text}</h1>
    </div>
  );
};

export default Number;