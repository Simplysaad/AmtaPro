import React from 'react';
import { data, dataA } from '../../assets/links';
import { motion } from 'framer-motion';
import Title from '../Title';

const Statistics = () => {
  const stats = [
    { number: `${data.length}0+`, label: 'Footballers' },
    { number: `${dataA.length}0+`, label: 'Academies' },
    { number: '20+', label: 'Connections' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" py-12 px-6 md:px-20 rounded-3xl shadow-lg"
    >
      <Title title="🌍 Join a thriving community of"/>

      <div className="mt-10 text-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-green-700 rounded-2xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl font-extrabold mb-2">{stat.number}</div>
            <div className="text-lg font-medium tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Statistics;
