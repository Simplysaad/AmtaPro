import React from 'react';
import ball from '../assets/ball.jpeg';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={ball} alt="ball" className="animate-spin rounded-full w-25 h-25" />
    </div>
  );
};

export default Loader;
