import React from 'react';
import logo from '.././assets/logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    const date = new Date().getFullYear()
    const links = [
        { name: "Field", to: "/" },
        { name: "About", to: "#" },
        { name: "News", to: "/news" },
        { name: "Support", to: "#" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <div className=''>
            <footer className='text-center bg-yellow-500'>
                <div></div>
                <div></div>
                <div className='flex justify-center p-5'>
                    <img className='rounded-full size-20' src={logo} alt="Amtapro-logo" />
                </div>
                <ul className="*:mb-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className=""
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                </ul>

                <div className='bg-green-800'>
                {
                    date === 2025 ?
                    <h3>Copyright © AmtaPro 2025. All rights reserved.</h3>
                    :
                    <h3>Copyright © AmtaPro 2025-{date}. All rights reserved.</h3>
                }
                </div>
            </footer>
        </div>
    );
}

export default Footer;
