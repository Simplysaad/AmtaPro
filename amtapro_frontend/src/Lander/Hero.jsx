import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <div
            className="relative flex items-start h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-opacity-60"></div>
            {/* Content */}
            <div className="relative z-10 max-w-2xl w-full px-6 text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                    Showcase your <span className="text-green-400">Football Talent</span> to the world.
                </h1>
                <p className="text-lg md:text-xl mb-8 font-medium drop-shadow">
                    Create a profile, share your highlights, and connect with scouts, teams, and academies worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg transition">
                        I'm a Talent
                    </button>
                    <button className="px-8 py-4 rounded-lg bg-white hover:bg-gray-100 text-green-700 font-semibold shadow-lg transition">
                        Hire a Talent
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;