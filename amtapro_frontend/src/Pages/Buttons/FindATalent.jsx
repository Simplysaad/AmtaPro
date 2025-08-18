import React from 'react';
import {Link} from 'react-router-dom'
import {register} from '../../assets/links'

const FindATalent = () => {
    return (
        <div>
            <Link to={register}><button 
                className="p-2 m-3 bg-primary hover:bg-foreground hover:text-primary rounded-lg transition-colors"
            >
                Find a Talent
            </button></Link>
        </div>
    );
}

export default FindATalent;