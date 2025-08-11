import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
    const [text, setText] = useState("Talent")
    const indexRef = useRef(0);
    const keys = ["Talent", "Academy", "Team", "Passion", "Scout", "Highlights", "Profile"]
    useEffect(() => {
        const textInterval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % keys.length;
            setText(keys[indexRef.current])
        }, 2000);

        return () => clearInterval(textInterval)
    })
   
    return (
        <div className='md:pl-20 sm:pt-10 p-5 md:*:mb-10 *:mb-5 md:text-left text-center items-center justify-center'>
            <h1 className="text-[#FAFAFA] sm:text-8xl text-bold text-5xl">
                Showcase your Football<span className="text-[#81C13E]"> {text}</span> to the world.
            </h1>
            <p className="text-[#FFFFFF] md:text-xl text-sm">
                Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide.
            </p>
            <div className="flex md:text-left md:justify-start text-center items-center justify-center">
                <button className="bg-[#02342B] p-3 m-3 sm:mr-20 ml-15 hover:bg-[#81C13E] hover:text-[#02342B] text-[#81C13E]">
                    I'm a Talent
                </button>
                <button className="bg-[#02342B] p-3 m-3 hover:bg-[#81C13E] hover:text-[#02342B] text-[#81C13E]">
                    Hire a Talent
                </button>
            </div>
        </div>
    );
}

export default Hero;