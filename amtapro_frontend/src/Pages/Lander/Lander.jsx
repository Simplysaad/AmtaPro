import React from 'react';
import Hero from './Hero';
import Header from '../Header'
import Footer from '../Footer'
import heroBg from '../../assets/hero-bg.jpg'
import Footballers from '../Footballers/Footballers';
import Academies from '../Academies/Academies';
import News from '../News/News';
import Statistics from '../Statistics/Statistics';


const Lander = () => {
    return (
        <div>
            <Header />
            <div
                className='bg-cover bg-center'
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <Hero />
            </div>
            <Statistics />
            <Footballers />
            <Footer />
        </div>
    );
}

export default Lander;