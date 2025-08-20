import React from 'react';
import {Link} from 'react-router-dom';

function Button({link, text}) {
    return (
        <div>
            <Link to={link}><button className="outline-none px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
              {text}
          </button></Link>
        </div>
    );
}

export default Button;