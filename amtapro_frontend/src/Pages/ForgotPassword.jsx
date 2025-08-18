import React, { useState } from 'react';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import {login} from '../assets/links'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Forgot password logic
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md mx-auto border border-green-700">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Forgot Password</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-600">
            Remembered your password?{' '}
            <Link to={login} className="text-blue-500 underline">
              Go back to login
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
