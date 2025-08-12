import React, {useState} from 'react';
import {data} from './footballerData'

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
    <div className="min-h-screen bg-white text-green-800 p-6">
        <h1 className='text-3xl font-bold text-center mb-6'>Start Searching Through {footballers.length - 1}+ Footballers</h1>
        
        <form action="" className="bg-green-100 border border-green-700 rounded-lg p-6 mb-8 sm:mr-30 sm:ml-30  shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
                <label htmlFor="genders" className="block mb-1 font-semibold">Gender</label>
                <select title="Select a Gender" id="genders" value={gender} onChange={genderChange} className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <label htmlFor="position">Position</label>
            <input title="Select a Position" placeholder="Position" type="text" id="position" list="positions" onChange={position=>setPosition(position.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            <datalist id="positions">
                {
                    positions.map((position, index) => (
                        <option key={index} value={position}>{position}</option>
                    ))
                }
            </datalist>

            <label htmlFor="location">Location</label>
            <input title="Select a Location" placeholder="Location" type="text" id="location" list="locations" onChange={location=>setLocation(location.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            <datalist id="locations">
                {
                    locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))
                }
            </datalist>

            {/* <label htmlFor="name">Name</label>
            <input placeholder="Name" id="name" type="text" onChange={name=>setUsername(name.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            
            <label htmlFor="height">Height</label>
            <input placeholder="Height" type="number" id="height" onChange={height=>setHeight(height.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/>
            
            <label htmlFor="age">Age</label>
            <input placeholder="Age" type="number" id="age" onChange={age=>setAge(age.target.value)} className="p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"/> */}
            <h1 className='text-black font-bold'>{filteredData.length} footballers found</h1>
        </form>

    

    {
        (
            () => {
            
                if (filteredData.length === 0) {
                    return <h2 className="text-center text-red-600 font-semibold">No such player was found</h2>;
                }

                return filteredData.map(footballer => (
                    <div className='md:border-2 rounded-4xl border-green-900 mb-10 text-center md:ml-20 md:mr-20 justify-around md:flex flex-col md:flex-row items-center'>
                        <div className='md:w-[50%] items-center justify-center text-center flex'>
                            <img className='border-5 border-green-900 rounded-full md:size-35 size-30 mb-[-40px]' src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random() * 60) + 1}.jpg`} alt="profile"/>
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
                            {/* {footballer.age && (
                                <h5 className="text-sm mb-1">Age: {footballer.age}</h5>
                            )} */}
                            {footballer.position && (
                                <h6 className="text-sm italic mb-2">Position: {footballer.position}</h6>
                            )}
                            <h1 className='text-bold underline'>&copy; AmtaPro</h1>
                        </article>
                        </div>
                    </div>


// {/* <article key={footballer.id}>
//     {footballer.id !== undefined && footballer.id !== "" && <h1>Id: {footballer.id}</h1>}
//     {footballer.username && <h1>Footballer: {footballer.username}</h1>}
//     {footballer.height && <h2>Height: {footballer.height}</h2>}
//     {footballer.gender && <h3>Gender: {footballer.gender}</h3>}
//     {footballer.location && <h4>Location: {footballer.location}</h4>}
//     {footballer.age && <h5>Age: {footballer.age}</h5>}
//     {footballer.position && <h6>Position: {footballer.position}</h6>}
//     <hr />
// </article> */}
                ));
            }
        )()
    }
    </div>
)
    
}

export default Footballers;