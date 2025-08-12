import React from 'react';
import logo from '.././assets/logo.png'

const Footer = () => {
    return (
        <div className='text-center items-center'>
            <footer className='text-center items-center'>
                <h1>AmtaPro</h1>
                <img src={logo} className='rounded-full size-12 m-5' alt="AmtaPro_Logo" />
                <h3></h3>
            </footer>
        </div>
    );
}

export default Footer;