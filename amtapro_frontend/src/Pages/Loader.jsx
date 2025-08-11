import React, {useEffect} from 'react';
import ball from '../assets/ball.jpeg'

const Loader = () => {
    useEffect(() => {
        const loading = setTimeout(() => {
            return (
                <div>
                    <img src={ball} alt="ball" />
                </div>
            );
        }, 2000)
        return () => clearTimeout(loading)
    })
    
    return (
        <div>
            <img src={ball} alt="ball" />
        </div>
    );
}

export default Loader;