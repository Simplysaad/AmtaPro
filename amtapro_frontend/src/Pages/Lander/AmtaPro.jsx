import React from 'react';

const AmtaPro = () => {
    return (
        <div>
            <section className="w-full bg-green-50 py-12 mt-10">
                <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">What is AmtaPro?</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    AmtaPro is more than just a platform—it's a community built to empower footballers and scouts to connect, grow, and succeed. Here’s what sets us apart:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                    <span className="text-4xl mb-3">🌍</span>
                    <h3 className="font-semibold text-lg mb-2 text-green-700">Global Exposure</h3>
                    <p className="text-gray-600 text-center">Showcase your talent to clubs, scouts, and agents worldwide—no boundaries, just opportunities.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                    <span className="text-4xl mb-3">🤝</span>
                    <h3 className="font-semibold text-lg mb-2 text-green-700">Real Connections</h3>
                    <p className="text-gray-600 text-center">Connect directly with decision-makers and like-minded players to grow your network and career.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                    <span className="text-4xl mb-3">🚀</span>
                    <h3 className="font-semibold text-lg mb-2 text-green-700">Career Growth</h3>
                    <p className="text-gray-600 text-center">Access resources, opportunities, and support designed to help you reach your football dreams.</p>
                    </div>
                </div>
                </div>
            </section>    
        </div>
    );
}

export default AmtaPro;