import React, {useState} from 'react';
import {data} from './data'

const Footballers = () => {
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState("")
    const [age, setAge] = useState("")
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [newData, setNewData] = useState(data)

    let locations = [];
    let positions = [];
    data.forEach(footballer => {
        locations.push(footballer.location)
        locations = [...new Set(locations)]
        positions.push(footballer.position)
        positions = [...new Set(positions)]
    })

    const genderChange = (e) => {
        const genderValue = e.target.value
        setGender(genderValue);
        genderValue === "" ? setNewData(data) : setNewData(data.filter(footballer => footballer.gender === genderValue))
    }

    return(
        <div className="min-h-screen bg-green-50 py-10 px-4">
            <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">Search Footballers</h1>
            <form className="bg-white rounded-xl shadow-lg p-6 mb-10 max-w-3xl mx-auto flex flex-wrap gap-4 items-end border-2 border-green-200">
                <div className="flex flex-col flex-1 min-w-[140px]">
                    <label className="text-green-700 font-semibold mb-1">Name</label>
                    <input className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Name" type="text" onChange={name=>setUsername(name.target.value.toLowerCase())}/>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                    <label className="text-green-700 font-semibold mb-1">Height</label>
                    <input className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Height" type="number" onChange={height=>setHeight(height.target.value)}/>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                    <label className="text-green-700 font-semibold mb-1">Age</label>
                    <input className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Age" type="number" onChange={age=>setAge(age.target.value)}/>
                </div>
                <div className="flex flex-col flex-1 min-w-[140px]">
                    <label className="text-green-700 font-semibold mb-1">Position</label>
                    <input className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" title="Select a Position" placeholder="Position" type="text" id="positionInput" list="positions" onChange={position=>setPosition(position.target.value)}/>
                    <datalist id="positions">
                        {
                            positions.map((position, index) => (
                                <option key={index} value={position}>{position}</option>
                            ))
                        }
                    </datalist>
                </div>
                <div className="flex flex-col flex-1 min-w-[140px]">
                    <label className="text-green-700 font-semibold mb-1">Location</label>
                    <input className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" title="Select a Location" placeholder="Location" type="text" list="locations" onChange={location=>setLocation(location.target.value)}/>
                    <datalist id="locations">
                        {
                            locations.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))
                        }
                    </datalist>
                </div>
                <div className="flex flex-col flex-1 min-w-[120px]">
                    <label htmlFor="genders" className="text-green-700 font-semibold mb-1">Gender</label>
                    <select className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" title="Select a Gender" id="genders" value={gender} onChange={genderChange}>
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </form>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                newData
                .filter(footballer => (footballer.username.toLowerCase().includes(username)))
                .filter(footballer => (footballer.height.includes(height)))
                .filter(footballer => (footballer.age.includes(age)))
                .filter(footballer => (footballer.position.includes(position)))
                .filter(footballer => (footballer.location.includes(location)))
                .map(footballer => (
                    <article key={footballer.id} className="bg-white border-l-8 border-green-500 rounded-lg shadow p-5 flex flex-col gap-2 hover:shadow-xl transition">
                        <h2 className="text-xl font-bold text-green-700">Footballer: <span className="text-green-900">{footballer.username}</span></h2>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-green-800">
                            <span className="font-semibold">Height:</span> {footballer.height}
                            <span className="font-semibold">Gender:</span> {footballer.gender}
                            <span className="font-semibold">Location:</span> {footballer.location}
                            <span className="font-semibold">Age:</span> {footballer.age}
                            <span className="font-semibold">Position:</span> {footballer.position}
                        </div>
                    </article>
                ))
            }
            </div>
        </div>
    )
}

export default Footballers;