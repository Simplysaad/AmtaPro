import React, { useState } from 'react';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { forgotPassword, register } from '../../assets/links';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Login Logic
    console.log('Logging in with:', form);
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md mx-auto border border-green-700">
          <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Login</h1>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoFocus
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
              Login
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            <Link to={forgotPassword} className="text-blue-500 underline">
              Forgot your password?
            </Link>
          </div>

          <div className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to={register} className="text-blue-500 underline">
              Sign up here
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
