import React, { useState } from 'react';
import LoginModal from '../../components/auth/LoginModal';
import SignupModal from '../../components/auth/SignupModal';

const Login = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleSwitchToSignup = () => {
        setShowLogin(false);
        setShowSignup(true);
    };

    const handleSwitchToLogin = () => {
        setShowSignup(false);
        setShowLogin(true);
    };

    return (
        <>
            <button 
                onClick={() => setShowLogin(true)}
                className="p-1 m-1 md:p-2 md:m-2 text-[#02342B] bg-[#81C13E] hover:bg-[#02342B] hover:text-[#81C13E] rounded-lg transition-colors"
            >
                Login
            </button>
            
            <LoginModal 
                isOpen={showLogin} 
                onClose={() => setShowLogin(false)}
                onSwitchToSignup={handleSwitchToSignup}
            />
            
            <SignupModal 
                isOpen={showSignup} 
                onClose={() => setShowSignup(false)}
                onSwitchToLogin={handleSwitchToLogin}
            />
        </>
    );
}

export default Login;