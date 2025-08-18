import React, {useRef, useEffect} from 'react';
import Hero from './Hero';
import Header from '../Header'
import Footer from '../Footer'
import heroBg from '../../assets/hero-bg.jpg'
import Footballers from '../Footballers/Footballers';
import Academies from '../Academies/Academies';
import Statistics from '../Statistics/Statistics';
import Amta from './Amta';
import goal from '../../assets/goal.mp3'
import Testimonials from './Testimonials';
import Sponsors from './Sponsors';
import Gallery from './Gallery';


const Lander = () => {
    const audioRef = useRef(null);

    window.addEventListener("DOMContentLoaded",
        useEffect(() => {
            const audio = audioRef.current;
            if (audio) {
                audio.volume = 0;
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise
                    .then(() => {
                        let vol = 0;
                        const fade = setInterval(() => {
                            if (vol < 1) {
                                vol += 0.1;
                                audio.volume = vol;
                            } else {
                                clearInterval(fade);
                            }
                        }, 200);
                    })
                    .catch((err) => console.log("Autoplay blocked:", err));
                }
            }
        }, [])
    )

    return (
        <div>
            <audio ref={audioRef} src={goal} preload="auto" />
            <Header />
            <Hero />
            <Amta />
            <Footballers />
            <Academies />
            <Statistics />
            <Testimonials />
            <Sponsors />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Lander;