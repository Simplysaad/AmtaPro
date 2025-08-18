import React, { useState } from 'react';
import Header from '../Pages/Header'
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-4xl mx-auto border border-green-700">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">1. Overview</h2>
            <p>
              At AmtaPro, we value your privacy. This policy outlines how we collect, use, and protect your personal information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal details such as name, email, and password during registration</li>
              <li>Profile information including location, position, and gender</li>
              <li>Usage data such as page visits, interactions, and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To create and manage your account</li>
              <li>To connect footballers with academies, agents, and clubs</li>
              <li>To improve our services and user experience</li>
              <li>To send updates, notifications, and relevant content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with trusted partners only to facilitate football-related connections or improve platform functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">5. Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. However, no system is 100% secure, and we encourage users to safeguard their own credentials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">6. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You can update or delete your account at any time</li>
              <li>You can request access to the data we hold about you</li>
              <li>You can opt out of communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-600 mb-2">7. Cookies</h2>
            <p>
              AmtaPro may use cookies to enhance your experience. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-600 mb-2">8. Contact</h2>
            <p>
              For questions about this policy, reach out to us at{' '}
              <a href="mailto:amtapro@gmail.com" className="text-blue-500 underline">amtapro@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
