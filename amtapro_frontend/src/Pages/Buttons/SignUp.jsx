import React, { useState } from 'react';
import SignupModal from '../../components/auth/SignupModal';
import LoginModal from '../../components/auth/LoginModal';

const SignUp = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSwitchToLogin = () => {
        setShowSignup(false);
        setShowLogin(true);
    };

    const handleSwitchToSignup = () => {
        setShowLogin(false);
        setShowSignup(true);
    };

    return (
        <>
            <button 
                onClick={() => setShowSignup(true)}
                className="p-1 m-1 md:p-2 md:m-2 text-[#02342B] border-2 border-[#81C13E] hover:bg-[#02342B] hover:text-[#81C13E] hover:border-[#02342B] rounded-lg transition-colors"
            >
                Sign Up
            </button>
            
            <SignupModal 
                isOpen={showSignup} 
                onClose={() => setShowSignup(false)}
                onSwitchToLogin={handleSwitchToLogin}
            />
            
            <LoginModal 
                isOpen={showLogin} 
                onClose={() => setShowLogin(false)}
                onSwitchToSignup={handleSwitchToSignup}
            />
        </>
    );
}

export default SignUp;