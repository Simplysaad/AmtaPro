import React from 'react';
import logo from '.././assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();
  const quickLinks = [
    { name: "Footballers", to: "/footballers" },
    { name: "Academies", to: "/academies" },
    { name: "About", to: "/about" },
    { name: "News", to: "/news" },
    { name: "Support", to: "/support" },
    { name: "Contact", to: "/contact" },
    { name: "Back to top", to: "/" },
  ];
  const socialLinks = [
    { name: "Whatsapp", to: "https://chat.whatsapp.com/JOzPp9sQ9XCAMkk9METGws?mode=ac_t" },
    { name: "X", to: "/" },
  ];
  const legalLinks = [
    { name: "Terms and Conditions", to: "/terms" },
    { name: "Privacy Policy", to: "/privacy-policy" },
  ];

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
            <a href="mailto:amtapro@gmail.com" className="mt-3 text-blue-500 underline">amtapro@gmail.com</a>
          </div>
        </div>

        
      </footer>
      <div className="bg-primary text-center text-white">
        {
          date === 2025 ?
            <h3>Copyright © AmtaPro 2025. All rights reserved.</h3>
            :
            <h3>Copyright © AmtaPro 2025–{date}. All rights reserved.</h3>
        }
      </div>
    </div>
  );
};

export default Footer;
