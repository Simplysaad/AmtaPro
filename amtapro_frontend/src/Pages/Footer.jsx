import React from 'react';
import logo from '.././assets/logo.png'

const Footer = () => {
    return (
        <div className=''>
            <footer className='text-center'>
                <h3>&copy; AmtaPro {new Date().getFullYear()}</h3>
            </footer>
        </div>
    );
}

export default Footer;