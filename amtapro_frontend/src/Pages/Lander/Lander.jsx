import React from 'react';
import Hero from './Hero';
import Header from '../Header'
import Footer from '../Footer'
import heroBg from '../../assets/hero-bg.jpg';
import Footballers from '../Footballers/Footballers';
import Academies from '../Academies/Academies';
import News from '../News/News';


const Lander = () => {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <Header />
            <Hero />
            <Footballers />
            <Academies />
            <News />
            <Footer />
        </div>
    );
}

export default Lander;