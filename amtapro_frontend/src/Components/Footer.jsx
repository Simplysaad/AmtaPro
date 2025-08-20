import React from 'react';
import logo from '.././assets/logo.png';
import { Link } from 'react-router-dom';
import {quickLinks, socialLinks, legalLinks, email} from '../assets/links'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-card text-center px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 p-5 text-left">
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">Socials</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.to} className="hover:underline" target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-md">
            <img className="rounded-full w-20 h-20 mb-4" src={logo} alt="Amtapro-logo" />
            <p className="text-sm text-gray-600">
              AmtaPro is a digital showcase for football talent — a space where players, scouts, teams, and academies connect. It empowers athletes to build profiles, share highlight reels, and be discovered by the right people. Whether you're a rising star or a seasoned scout, this is where football journeys begin and evolve.
            </p>
            <a href="mailto:amtapro@gmail.com" className="mt-3 text-blue-500 underline">{email}</a>
          </div>
        </div>

        
      </footer>
      <div className="bg-foreground xl:pb-4 pb-7 pt-3 text-center text-white">
        {
          date === 2025 ?
            <h3>Copyright © AmtaPro 2025. All rights reserved.</h3>
            :
            <h3>Copyright © AmtaPro 2025–{date}. All rights reserved.</h3>
        }
        <div className="mt-2 space-x-4">
          <Link to={legalLinks.find(link => link.to === "/terms-of-service").to} className="underline">Terms of Service</Link>
          <Link to={legalLinks.find(link => link.to === "/privacy-policy").to} className="underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
