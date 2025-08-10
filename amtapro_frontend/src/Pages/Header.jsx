import React from 'react';
import logo from '.././assets/logo.png'

const Header = () => {
    return (
        <div>
            <header className='flex'> 
                <div>
                    <img src={logo} className='rounded-full size-15 m-5' alt="AmtaPro_Logo" />
                </div>
                {/* {Mobile or Desktop Nav} */}
                <div className='flex'>
                    <button className='cursor-pointer'>Kick in</button>
                    <button className='cursor-pointer'>Signup</button>
                </div>
            </header>
        </div>
    );
}

export default Header;