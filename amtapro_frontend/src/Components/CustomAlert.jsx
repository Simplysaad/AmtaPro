import React from 'react';
import logo from '../assets/logo.png';

const CustomAlert = ({ header, message}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-1000 font-inter">
      <div className="bg-background p-6 rounded-[30px] shadow-lg text-center max-w-[400px] w-[90%] border-[3px] border-border">
        <img
          src={logo}
          alt="Amtapro-Logo"
          className="mx-auto mb-4 size-15 rounded-full"
        />
        <h1 className="text-green-700 text-2xl font-bold mb-2">{header}</h1>
        <p className="text-[16px] text-green-800 mb-5">{message}</p>
        <button
          onClick={closeAlertBox}
          className="bg-primary text-white px-5 py-2 rounded font-semibold text-[15px] hover:bg-foreground transition"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
