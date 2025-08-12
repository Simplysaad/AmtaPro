import React, { useState } from "react";
import logo from '.././assets/logo.png'
import logoM from '.././assets/logo-mobile.png'
import { Menu, X } from "lucide-react";
import {Link} from 'react-router-dom'
import Login from '../Pages/Buttons/Login'
import SignUp from '../Pages/Buttons/SignUp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Field", to: "/" },
    { name: "About", to: "#" },
    { name: "News", to: "/news" },
    { name: "Support", to: "#" },
    { name: "Contact", to: "#" },
  ];

  return (
    <nav className="sticky top-0 z-9998">

      <div className="">

        {/* OPENED MOBILE NAV */}
          {isOpen && (
            <div className=" p-5 bg-white md:hidden xl:hidden 2xl:hidden text-center items-center">
              <div className="flex justify-between text-center items-center">
                <img src={logo} className='rounded-full size-15' alt="AmtaPro-Logo" />
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
              </div>
              
              <ul className="*:mb-5">
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
                  <Login onClick={() => setIsOpen(false)}/>
                </li>
                <li>
                  <SignUp onClick={() => setIsOpen(false)}/>
                </li>
              </ul>
            </div>
          )}
        </div>




        {/* DESKTOP NAV */}
        <div className="md:p-1"></div>
        <div className="pl-12 pr-12">
          <header className="hidden rounded-full p-2.5 md:flex text-center justify-between bg-[#fff] pl-10 pr-10">
              <img src={logo} className='rounded-full size-15' alt="AmtaPro-Logo" />
              <ul className="flex pt-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="m-2.5 p-1 rounded-full hover:text-[#81C13E] hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between">
                <Login/>
                <SignUp/>
              </div>
          </header>
        </div>




        {/* MOBILE NAV*/}
        {
          !isOpen && 
            <div>
              <div className="p-1 md:hidden"></div>    
                <div className="pl-5 pr-5 md:hidden">
                <header className="flex justify-between bg-[#fff] p-2 rounded-full pl-5 pr-5">
                  <img src={logoM} className='rounded-full size-10' alt="AmtaPro-Logo" />
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
            
        }


    </nav>
  );
};

export default Navbar;