import React from 'react';
import Hero from './Hero';
import Header from '../Header'
import Footer from '../Footer'
import heroBg from '../../assets/hero-bg.jpg';
import Footballers from '../Footballers/Footballers';


const Lander = () => {
    return (
        <div
            className="relative h-[70vh] bg-cover bg-center sm:h-screen"
            // style={{ backgroundImage: `url(${heroBg})` }}
        >
            <Header />
            <Hero />
            <Footballers />
            <Footer />
        </div>
    );
}

export default Lander;