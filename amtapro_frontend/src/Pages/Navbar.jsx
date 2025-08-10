import React, { useState } from 'react';
import {Link} from react-router-dom

const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    return (
        <div className="">
            <nav>
                <ul className='decoration-'>
                    <Link><li></li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;