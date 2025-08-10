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
        <div className="">
            <h1 className="">
                Showcase your <span className="">Football {text}</span> to the world.
            </h1>
            <p className="">
                Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide.
            </p>
            <div className="">
                <button className="">
                    I'm a Talent
                </button>
                <button className="">
                    Hire a Talent
                </button>
            </div>
        </div>
    );
}

export default Hero;