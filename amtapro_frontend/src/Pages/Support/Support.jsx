import React, {useState} from 'react';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Link} from 'react-router-dom'
import { quickLinks } from '../../assets/links';
import Title from '../../Components/Title';
import Button from '../../Components/Button';
import Focus from '../../Components/Focus';

const Support = () => {

  return (
    <div>
        <Header />
        <div className="min-h-screen bg-green-50 text-green-900 p-6">
        <div className="max-w-4xl mx-auto">
            {/* <h1 className="text-3xl font-bold text-center mb-6">Support the mission</h1> */}
            <Title title="Support the mission"/>
            <Focus />

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

            <Button text={"Contact us"} link={quickLinks.find(link => link.name === "Contact").to}/>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-green-700">
            <h2 className="text-xl font-semibold mb-4">Donate via Bank Transfer</h2>
            <div className="space-y-2">
                <p><span className="font-semibold">Bank Name: </span>Nil</p>
                <p><span className="font-semibold">Account Name: </span>AmtaPro Football Initiative</p>
                <p><span className="font-semibold">Account Number: </span>Nil</p>
            </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-green-700">
            <h2 className="text-xl font-semibold mb-4">Donate Online</h2>
            <p className="mb-4">
                You can also support us securely through online payment. Click the button below to proceed.
            </p>
            <Button text={"Donate Online"}/>
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
