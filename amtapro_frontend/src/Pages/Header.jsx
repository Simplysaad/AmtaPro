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
        <div className="md:p-2"></div>
        <div className="pl-20 pr-20">
          <header className="hidden rounded-full sticky top-0 z-9998 p-3 md:flex text-center justify-between bg-[#fff] pl-12 pr-12">
              <img src={logo} className='rounded-full size-15' alt="AmtaPro-Logo" />
              <ul className="flex pt-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="m-3 p-1 rounded-full hover:text-[#81C13E] hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between">
                <button className="p-1 m-1 md:p-2 md:m-2 text-[#02342B] bg-[#81C13E] hover:bg-[#02342B] hover:text-[#81C13E]">
                  Login
                </button>
                <button className="p-1 m-1 md:p-2 md:m-2 text-[#02342B] border-2 border-[#81C13E] hover:bg-[#02342B] hover:text-[#81C13E] hover:border-0">
                  Sign Up
                </button>
              </div>
          </header>
        </div>

        {/* MOBILE NAV HEADERS*/}
        <div className="p-2 md:hidden"></div>
        <div className="pl-5 pr-5 sm:hidden md:hidden xl:hidden 2xl:hidden">
          <header className="flex justify-between bg-[#fff] p-2 rounded-full sticky top-[0px] pl-5 pr-5">
            <img src={logo} className='rounded-full size-10' alt="AmtaPro-Logo" />
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 
                <X size={28} />
              : 
                <Menu size={28} />
              }
            </button>
          </header>
        </div>
        
      </div>

      


      {/* OPENED MOBILE NAV */}
      {isOpen && (
        <div className="bg-white sm:hidden md:hidden xl:hidden 2xl:hidden">
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
            
            <hr />
            
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