import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const ImATalent = () => {
    return (
        <>
            <Link to="/signup"><button 
                className="p-3 m-3 bg-primary hover:bg-foreground hover:text-primary text-foreground rounded-lg transition-colors"
            >
                I'm a Talent
            </button></Link>
        </>
    );
}

export default ImATalent;