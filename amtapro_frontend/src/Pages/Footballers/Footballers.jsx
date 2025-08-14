import React, {useState} from 'react';
import {data} from './footballerData'
import FindATalent from '../Buttons/FindATalent';

const Footballers = () => {
    // const [username, setUsername] = useState("")
    // const [height, setHeight] = useState("")
    // const [age, setAge] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [newData, setNewData] = useState(data)

    let locations = [];
    let positions = [];
    let footballers = [];
    data.forEach(footballer => {
        locations.push(footballer.location)
        locations = [...new Set(locations)]
        positions.push(footballer.position)
        positions = [...new Set(positions)]
        footballers.push(footballer.username)
        footballers = [...new Set(footballers)]
    })

    const genderChange = (e) => {
        const genderValue = e.target.value
        setGender(genderValue);
        genderValue === "" ? setNewData(data) : setNewData(data.filter(footballer => footballer.gender === genderValue))
    }

    const filteredData = newData
    // .filter(footballer => !username || footballer.username?.toLowerCase().includes(username.toLowerCase()))
    // .filter(footballer => !height || footballer.height?.includes(height))
    // .filter(footballer => !age || footballer.age?.includes(age))
    .filter(footballer => !position || footballer.position?.toLowerCase().includes(position.toLowerCase()))
    .filter(footballer => !location || footballer.location?.toLowerCase().includes(location.toLowerCase()));
return(
    <div className="bg-white text-green-800 p-6">
        <h1 className='text-4xl font-bold text-center mb-6 shadow-2xl'>Start Searching Through {footballers.length - 1}+ Footballers</h1>
        
        <form action="" className="bg-green-100 border border-green-700 rounded-lg p-6 mb-8 sm:mr-30 sm:ml-30  shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
                <label htmlFor="genders" className="block mb-1 font-semibold">Gender</label>
                <select title="Select a Gender" id="genders" value={gender} onChange={genderChange} className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className="col-span-1 md:col-span-2">
                <label htmlFor="positions" className="block mb-1 font-semibold">Position</label>
                <select title="Select a Position" id="positions" onChange={position=>setPosition(position.target.value)} className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                    {
                        positions.map((position, index) => (
                            <option key={index} value={position}>{position}</option>
                        ))
                    }
                </select>
            </div>

            <div className="col-span-1 md:col-span-2">
                <label htmlFor="location" className="block mb-1 font-semibold">Location</label>
                <select title="Select a Location" id="locations" onChange={location=>setLocation(location.target.value)} className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                    {
                        locations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))
                    }
                </select>
            </div>

            {/* <label htmlFor="name">Name</label>
            <input placeholder="Name" id="name" type="text" onChange={name=>setUsername(name.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            
            <label htmlFor="height">Height</label>
            <input placeholder="Height" type="number" id="height" onChange={height=>setHeight(height.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            
            <label htmlFor="age">Age</label>
            <input placeholder="Age" type="number" id="age" onChange={age=>setAge(age.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/> */}
            {
                filteredData.length == 1 || filteredData.length == 0  ? <h1 className='text-black font-bold'>{filteredData.length} footballer found</h1>
                :
                <h1 className='text-black font-bold'>{filteredData.length} footballers found</h1>
            }
        </form>

    
        <div className='flex overflow-x-scroll'>
            {
                (
                    () => {
                    
                        if (filteredData.length === 0) {
                            return <h2 className="text-center text-red-600 font-semibold">No such player was found</h2>;
                        }

                        return filteredData.map(footballer => (
                            <div key={footballer.id} className='xl:min-w-lg min-w-full md:border-2 rounded-4xl m-5 border-green-900 text-center justify-between md:flex flex-col md:flex-row'>
                                <div className='md:w-[50%] items-center text-center justify-center flex'>
                                    {
                                        footballer.gender === "male" ? <img className='border-5 border-green-900 rounded-full md:size-30 size-20 md:mb-0 mb-[-40px]' src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random() * 60) + 1}.jpg`} alt={`${footballer.username} profile picture`}/>
                                        :
                                        footballer.gender === "female" ? <img className='border-5 border-green-900 rounded-full md:size-30 size-20 md:mb-0 mb-[-40px]' src={`https://xsgames.co/randomusers/assets/avatars/female/${Math.floor(Math.random() * 60) + 1}.jpg`} alt={`${footballer.username} profile picture`}/>
                                        : 
                                        <div className='border-5 border-green-900 bg-green-900 rounded-full md:size-30 size-20 md:mb-0 mb-[-40px]'></div>
                                    }
                                </div>

                                <div className='rounded-4xl bg-green-900 md:w-[50%]'>
                                    <article
                                        key={footballer.id}
                                        className="text-white p-10"
                                        >
                                        {footballer.username && (
                                            <h1 className="text-3xl font-bold mb-3">{footballer.username}</h1>
                                        )}
                                        <hr className='mb-2'/>
                                        {footballer.height && (
                                            <h2 className="text-base font-medium mb-2">Height: {footballer.height}</h2>
                                        )}
                                        {footballer.location && (
                                            <h4 className="text-base mb-2">Location: {footballer.location}</h4>
                                        )}
                                        {footballer.position && (
                                            <h6 className="text-sm italic mb-2">Position: {footballer.position}</h6>
                                        )}
                                        <button className='underline p-3'>Go to Profile</button>
                                    </article>
                                </div>
                            </div>
                        ));
                    }
                )()
            }
        </div>
    </div>
)
    
}

export default Footballers;