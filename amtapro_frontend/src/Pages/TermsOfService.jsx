import React, { useState } from 'react';
import Header from '../Pages/Header'
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import Title from './Title';
import { quickLinks } from '../assets/links';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-4xl mx-auto border border-green-700">
          {/* <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Terms of Service</h1> */}
          <Title title="Terms of Service"/>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">1. Introduction</h2>
            <p>
              Welcome to AmtaPro. By accessing or using our platform, you agree to be bound by these Terms of Service. These terms govern your use of our website, services, and any interactions facilitated through AmtaPro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use AmtaPro. By signing up, you confirm that you meet this age requirement and that all information provided is accurate and truthful.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You agree not to use AmtaPro for any unlawful or harmful activities.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You agree to treat other users with respect and professionalism.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">4. Footballer-Academy Connections</h2>
            <p>
              AmtaPro facilitates connections between footballers, academies, agents, and clubs. However, we are not responsible for the outcomes of these relationships. If a connection later backfires, results in disputes, or leads to unforeseen consequences, AmtaPro shall not be held liable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">5. Intellectual Property</h2>
            <p>
              All content on AmtaPro—including logos, designs, and written materials—is the property of AmtaPro and may not be reproduced without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account if you violate these terms or engage in behavior that harms the community.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">7. Changes to Terms</h2>
            <p>
              AmtaPro may update these Terms of Service at any time. Continued use of the platform after changes implies acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-600 mb-2">8. Contact</h2>
            <p className='mb-5'>
              If you have questions about these terms, please contact us.
            </p>
            <Link to={quickLinks.find(link => link.name === "Contact").to}><button className="outline-none px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
                Contact Us
            </button></Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
