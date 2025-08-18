import React from 'react';
import {Link} from 'react-router-dom'

const FindATalent = () => {
    return (
        <div>
            <Link to="/signup"><button 
                className="p-3 m-3 bg-primary hover:bg-foreground hover:text-primary rounded-lg transition-colors"
            >
                Find a Talent
            </button></Link>
        </div>
    );
}

export default FindATalent;