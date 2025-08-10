import React, { useState } from "react";
import logo from '.././assets/logo.png'
import { Menu, X } from "lucide-react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Field", to: "#" },
    { name: "About", to: "#" },
    { name: "News", to: "/news" },
    { name: "Footballers", to: "/footballers" },
    { name: "Academies", to: "/academies" },
    { name: "Support", to: "#" },
    { name: "Contact", to: "#" },
  ];

  return (
    <nav className="">

      {/* DESKTOP NAV */}
      <div className="">
        <img src={logo} className='rounded-full size-15 m-10' alt="AmtaPro-Logo" />
        
        <div className="hidden md:flex">
          <ul className="">
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
          
          <div className="">
            <button className="">
              Login
            </button>
            <button className="">
              Sign Up
            </button>
          </div>
        </div>

        
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      


      {/* MOBILE NAV */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className=""
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            
            <li>
              <button
                className=""
                onClick={() => setIsOpen(false)}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className=""
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;