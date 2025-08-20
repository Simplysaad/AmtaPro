import React from 'react';

const FootballerDashBoard = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto py-10 px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 bg-white rounded-xl shadow p-6 flex flex-col items-center">
                    <img src="/path/to/profile.jpg" alt="Profile" className="w-28 h-28 rounded-full mb-3"/>
                    <h2 className="text-xl font-bold mb-1">John Doe</h2>
                    <p className="text-green-700 mb-2">Striker</p>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-full mt-2">Edit Profile</button>
                    </div>
                    <div className="md:w-2/3">
                    <div className="bg-green-50 rounded-xl shadow p-6 mb-6">
                        <h3 className="font-semibold text-lg mb-2">Video Highlights</h3>
                        {/* Video player or thumbnails */}
                    </div>
                    <div className="bg-green-50 rounded-xl shadow p-6 mb-6">
                        <h3 className="font-semibold text-lg mb-2">Stats & Achievements</h3>
                        {/* List of stats */}
                    </div>
                    <div className="bg-green-50 rounded-xl shadow p-6">
                        <h3 className="font-semibold text-lg mb-2">Opportunities</h3>
                        {/* List of invites, trials, offers */}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FootballerDashBoard;