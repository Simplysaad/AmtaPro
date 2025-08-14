import React from 'react';

const Number = ({ number, text }) => {
    return (
        <div className="mb-10">
            <h1 className="text-[40px] font-bold">{number}</h1>
            <h1 className="text-xl text-black mt-3">{text}</h1>
        </div>
    );
};

export default Number;
