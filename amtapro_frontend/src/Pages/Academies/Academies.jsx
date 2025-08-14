import React, {useState} from 'react';
import {dataA} from './academyData'


const Academies = () => {
return(
    <div>
        <h1 className='underline'>Search Academies</h1>
        {
            dataA.map(academy => (
                
                <article key={academy.id}>
                    <h1>Id: {academy.id}</h1>
                    <h1>Academy: {academy.name}</h1>
                    <h2>Location: {academy.location}</h2>
                    <h3>Email: {academy.email}</h3>
                    <h4>Social Link: {academy.socialLink}</h4>
                    <hr />
                </article>
                
            ))
        }
    </div>
)
    
}

export default Academies;