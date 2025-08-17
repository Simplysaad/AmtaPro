import React, {useRef, useEffect} from 'react';
import Hero from './Hero';
import Header from '../Header'
import Footer from '../Footer'
import heroBg from '../../assets/hero-bg.jpg'
import Footballers from '../Footballers/Footballers';
import Academies from '../Academies/Academies';
import News from '../News/News';
import Statistics from '../Statistics/Statistics';
import Amta from '../Amta/Amta';
import goal from '../../assets/goal.mp3'


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

            {/* <button
                onClick={() => audioRef.current && audioRef.current.play()}
                className="px-4 py-2 bg-yellow-500 rounded-xl text-black font-semibold shadow-lg"
            >
                Play 🎶
            </button> */}

            <Header />
            <div
                className='bg-cover bg-center'
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <Hero />
            </div>
            <Statistics />
            <Amta />
            <Footballers />
            {/* <Academies /> */}
            <Footer />
        </div>
    );
}

export default Lander;