import React, { useState } from 'react';
import Header from '../Pages/Header'
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // SignUp Logic
    console.log('Signing up with:', form);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md mx-auto border border-green-700">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Sign Up</h1>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 underline">
              Login here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
