import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom'
import { quickLinks } from '../../assets/links';
import Title from '../Title';

const About = () => {
  return (
    <div className="min-h-screen text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-3xl mx-auto border border-green-700">
          {/* <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
            About AmtaPro
          </h1> */}
          <Title title="About AmtaPro" />

          <p className="text-lg mb-4 text-center">
            AmtaPro is a football initiative dedicated to empowering young football talents all over the world. We believe in the power of sport to transform lives, build communities, and create opportunities.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-green-600">🌍 Our Mission</h2>
              <p>
                To discover, develop, and promote football talent by providing access to training, mentorship, scouting opportunities, and global exposure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-green-600">⚽ What We Do</h2>
              <ul className="list-disc list-inside space-y-2">
                {/* <li>Organize football camps and showcase events</li> */}
                <li>Connect players with clubs, agents, and scouts</li>
                {/* <li>Offer mentorship and career guidance</li> */}
                <li>Promote grassroots development and community engagement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-green-600">💡 Our Vision</h2>
              <p>
                A future where every talented footballer—regardless of background—has the opportunity to shine on the world stage.
              </p>
            </section>

            <section className='mb-5'>
              <h2 className="text-xl font-semibold mb-2 text-green-600">🤝 Join Us</h2>
              <p>
                Whether you're a player, coach, sponsor, or fan—there’s a place for you in the AmtaPro family. Together, we can build something extraordinary.
              </p>
            </section>
          </div>
          <Link to={quickLinks.find(link => link.name === "Support").to}><button className="outline-none px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
              Support us
          </button></Link>
        </div>
        <div className="text-center mt-10 text-sm text-gray-600">
          AmtaPro is more than football. It’s a movement.
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
