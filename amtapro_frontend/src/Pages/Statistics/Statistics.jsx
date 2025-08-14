import React from 'react';
import Number from './Number';
import {data} from '../Footballers/footballerData'
import {dataA} from '../Academies/academyData'

const Statistics = () =>{
    return (
        <div className='bg-green-500 text-white p-10 text-center rounded shadow'>
            <Number number={`${data.length}+`} text={"Footballers Registered"} />
            <Number number={`${dataA.length}+`} text={"Academies Registered"} />
            <Number number={"20+"} text={"Connections Made"} />
        </div>
    );
}

export default Statistics;