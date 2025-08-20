import React from 'react';

const AcademyDashBoard = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <img src="/path/to/academy-logo.jpg" alt="Academy Logo" className="w-28 h-28 rounded-full mb-3"/>
                <h2 className="text-xl font-bold mb-1">Rising Stars Academy</h2>
                <p className="text-green-700 mb-2">Lagos, Nigeria</p>
                <button className="bg-green-700 text-white px-4 py-2 rounded-full mt-2">Edit Academy</button>
                </div>
                <div className="md:w-2/3">
                <div className="bg-green-50 rounded-xl shadow p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-2">Manage Players</h3>
                    {/* Table/list of players */}
                </div>
                <div className="bg-green-50 rounded-xl shadow p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-2">Post Opportunities</h3>
                    {/* Form to post trials/events */}
                </div>
                <div className="bg-green-50 rounded-xl shadow p-6">
                    <h3 className="font-semibold text-lg mb-2">Applications</h3>
                    {/* List of footballers who applied */}
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AcademyDashBoard;