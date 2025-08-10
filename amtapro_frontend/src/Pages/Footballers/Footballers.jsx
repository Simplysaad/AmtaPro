import React, {useState} from 'react';
import {data} from './footballerData'


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
    <div>
        <h1>Search Footballers</h1>
        <form action="">
            <input placeholder="Name" type="text" onChange={name=>setUsername(name.target.value)}/>
            <input placeholder="Height" type="number" onChange={height=>setHeight(height.target.value)}/>
            <input placeholder="Age" type="number" onChange={age=>setAge(age.target.value)}/>

            <input title="Select a Position" placeholder="Position" type="text" id="positionInput" list="positions" onChange={position=>setPosition(position.target.value)}/>
            <datalist id="positions">
                {
                    positions.map((position, index) => (
                        <option key={index} value={position}>{position}</option>
                    ))
                }
            </datalist>

            <input title="Select a Location" placeholder="Location" type="text" list="locations" onChange={location=>setLocation(location.target.value)}/>
            <datalist id="locations">
                {
                    locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))
                }
            </datalist>

            <label htmlFor="genders">Filter by gender</label>
            <select title="Select a Gender" id="genders" value={gender} onChange={genderChange}>
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </form>
    

    {
        (
            () => {
                const filteredData = newData
                .filter(footballer => !username || footballer.username?.toLowerCase().includes(username))
                .filter(footballer => !height || footballer.height?.includes(height))
                .filter(footballer => !age || footballer.age?.includes(age))
                .filter(footballer => !position || footballer.position?.toLowerCase().includes(position.toLowerCase()))
                .filter(footballer => !location || footballer.location?.toLowerCase().includes(location.toLowerCase()));

                if (filteredData.length === 0) {
                    return <h2>No such player was found</h2>;
                }

                return filteredData.map(footballer => (
                    <article key={footballer.id}>
                        {footballer.id !== undefined && footballer.id !== "" && <h1>Id: {footballer.id}</h1>}
                        {footballer.username && <h1>Footballer: {footballer.username}</h1>}
                        {footballer.height && <h2>Height: {footballer.height}</h2>}
                        {footballer.gender && <h3>Gender: {footballer.gender}</h3>}
                        {footballer.location && <h4>Location: {footballer.location}</h4>}
                        {footballer.age && <h5>Age: {footballer.age}</h5>}
                        {footballer.position && <h6>Position: {footballer.position}</h6>}
                        <hr />
                    </article>
                ));
            }
        )()
    }
    </div>
)
    
}

export default Footballers;
