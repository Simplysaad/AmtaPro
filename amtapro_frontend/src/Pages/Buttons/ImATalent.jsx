import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {register} from '../../assets/links'

const ImATalent = () => {
    return (
        <>
            <Link to={register}><button 
                className="p-2 m-3 bg-primary hover:bg-foreground hover:text-primary text-foreground rounded-lg transition-colors"
            >
                I'm a Talent
            </button></Link>
        </>
    );
}

export default ImATalent;