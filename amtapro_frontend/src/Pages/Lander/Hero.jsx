import React from 'react';

const Hero = () => {
    return (
        <div className="relative z-10 max-w-2xl w-full px-6 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 sm:max-w-[70%] w-3/4">
                Showcase your <span className="text-green-400">Football Talent</span> to the world.
            </h1>
            <p className="text-lg mb-10 font-medium drop-shadow">
                Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="p-8 cursor-pointer font-semibold shadow-lg transition">
                    I'm a Talent
                </button>
                <button className="p-8 cursor-pointer text-green-700 font-semibold shadow-lg transition">
                    Hire a Talent
                </button>
            </div>
        </div>
    );
}

export default Hero;