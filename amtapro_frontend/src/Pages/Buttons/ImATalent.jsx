import React, { useState } from 'react';
import AthleteProfileModal from '../../components/profile/AthleteProfileModal';

const ImATalent = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);

    const handleProfileSuccess = (profileData) => {
        console.log('Profile created:', profileData);
        // You can add additional success handling here
    };

    return (
        <>
            <button 
                onClick={() => setShowProfileModal(true)}
                className="p-3 m-3 sm:mr-15 sm:ml-15 bg-[#02342B] hover:bg-[#81C13E] hover:text-[#02342B] text-[#81C13E] rounded-lg transition-colors"
            >
                I'm a Talent
            </button>
            
            <AthleteProfileModal 
                isOpen={showProfileModal}
                onClose={() => setShowProfileModal(false)}
                onSuccess={handleProfileSuccess}
            />
        </>
    );
}

export default ImATalent;