import React from 'react';
import amta from '../../assets/amta.jpg'
import { Link } from 'react-router-dom'

const Amta = () => {
    return (
        <div className='xl:flex flex-col xl:flex-row mb-20 p-5'>
            <div className="xl:w-[50%] w-full ">
                <img className="xl:rounded-l-4xl rounded-0" src={amta} alt="Amta" />
            </div>
            <article className="text-white text-center p-10 w-full bg-yellow-500 rounded-b-4xl xl:rounded-b-none xl:rounded-r-4xl">
                <h1 className="text-3xl font-bold mb-3">(Amta)</h1>
                <hr className='mb-2'/>
                <h4 className="text-base mb-2">Location: Nigeria</h4>
                <h6 className="text-sm italic mb-2">Position: Striker</h6>
                <Link to="/contact" className='underline p-3'>Go to Profile</Link>
            </article>
        </div>
    );
}

export default Amta;