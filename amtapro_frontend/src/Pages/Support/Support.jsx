import React, {useState} from 'react';
import Header from '../Header'
import Footer from '../Footer'
import Alert from '../Alert';
import {Link} from 'react-router-dom'
import { quickLinks } from '../../assets/links';

const Support = () => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertData, setAlertData] = useState({ header: '', message: '' });
    

    const closeAlertBox = () => {
        setAlertVisible(false);
    };
    const showAlert = (header, message) => {
        setAlertData({ header, message });
        setAlertVisible(true);
    };
    const donateOnline = () => {
        showAlert(
        'Error',
        "We're still working on that!"
        );
    }

  return (
    <div>
        <Alert
        header={alertData.header}
        message={alertData.message}
        show={alertVisible}
        closeAlertBox={closeAlertBox}
      />
        <Header />
        <div className="min-h-screen bg-green-50 text-green-900 p-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Support the mission</h1>

            <p className="text-lg mb-4 text-center">
            Your support helps us empower footballers, grow grassroots talent, and build a stronger football community across Africa.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-green-700">
            <h2 className="text-xl font-semibold mb-4">Why Support AmtaPro?</h2>
            <ul className="list-disc list-inside space-y-2 mb-5">
                <li>We provide visibility and scouting opportunities for young footballers.</li>
                {/* <li>We organize training camps, mentorship programs, and showcase events.</li> */}
                <li>We connect players with clubs, agents, and sponsors.</li>
            </ul>

            <Link to={quickLinks.find(link => link.name === "Contact").to}><button className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
                Contact Us
            </button></Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-green-700">
            <h2 className="text-xl font-semibold mb-4">Donate via Bank Transfer</h2>
            <div className="space-y-2">
                <p><span className="font-semibold">Bank Name:</span>Nil</p>
                <p><span className="font-semibold">Account Name:</span>AmtaPro Football Initiative</p>
                <p><span className="font-semibold">Account Number:</span>Nil</p>
            </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-green-700">
            <h2 className="text-xl font-semibold mb-4">Donate Online</h2>
            <p className="mb-4">
                You can also support us securely through online payment. Click the button below to proceed.
            </p>
            <button onClick={donateOnline} className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
                Donate Online
            </button>
            </div>

            <div className="text-center mt-10 text-sm text-gray-600">
            Thank you for believing in our mission. Every contribution makes a difference.
            </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Support;
