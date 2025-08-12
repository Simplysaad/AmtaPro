import React, { useState, useEffect, useRef } from 'react';
import heroBg from '../../assets/hero-bg.jpg'
import ImATalent from '../Buttons/ImATalent'
import FindATalent from '../Buttons/FindATalent'

const Hero = () => {
    const [text, setText] = useState("Talent")
    const indexRef = useRef(0);
    const keys = ["Talent", "Academy", "Team", "Passion", "Scout", "Highlights", "Profile", "Journey"]
    useEffect(() => {
        const textInterval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % keys.length;
            setText(keys[indexRef.current])
        }, 2500);

        return () => clearInterval(textInterval)
    })
   
    return (
        <div 
            className='mt-[-100px] md:pl-20 sm:pt-30 pt-30 p-5 md:*:mb-12 *:mb-7 md:text-left text-center items-center justify-center'>
            <h1 className="text-[#FAFAFA] sm:text-8xl text-bold text-6xl">
                Showcase your <span className="text-[#81C13E]">Football {text}</span> to the world.
            </h1>
            <p className="hidden md:block text-[#FFFFFF] text-xl sm:w-3/4">
                Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide, <strong>take your football journey to the next level and be seen by the right people.</strong> 
            </p>
            <p className="md:hidden text-[#FFFFFF] text-xl">
                Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide.
            </p>
            <div className="flex md:text-left md:justify-start text-center items-center justify-center">
                <ImATalent />
                <FindATalent />
            </div>
        </div>
    );
}

export default Hero;