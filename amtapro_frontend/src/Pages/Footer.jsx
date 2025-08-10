import React from 'react';
import logo from '.././assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer>
                <img src={logo} className='rounded-full size-15 m-5' alt="AmtaPro_Logo" />
            </footer>
        </div>
    );
}

export default Footer;