import React, { useState } from 'react';

const ImATalent = () => {
    return (
        <>
            <button 
                onClick={() => setShowProfileModal(true)}
                className="p-3 m-3 bg-primary hover:bg-foreground hover:text-primary text-foreground rounded-lg transition-colors"
            >
                I'm a Talent
            </button>
        </>
    );
}

export default ImATalent;