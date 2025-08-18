import React from 'react';
import Number from './Number';
import { data, dataA } from '../../assets/links';
import { motion } from 'framer-motion';

const Statistics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className=" bg-green-500 text-white p-5 text-center xl:p-15 shadow m-5 rounded-4xl"
    >
    <h1 className='md:text-[60px] text-[35px] mb-15 uppercase text-4xl font-extrabold tracking-wide'>Join a community of</h1>
    <div className='flex md:flex-row md:justify-around flex-col'>
        <Number number={`${data.length}+`} text={"Footballers"} />
        <Number number={`${dataA.length}+`} text={"Academies"} />
        <Number number={"20+"} text={"Connections"} />
    </div>
    </motion.div>
  );
};

export default Statistics;
