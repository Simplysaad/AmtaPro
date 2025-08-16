import React, { useState } from 'react';
import { data } from './footballerData';
import Header from '../Header';
import Footer from '../Footer';
import { Filter } from 'lucide-react';

const Footballers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [newData, setNewData] = useState(data);
  const [showFilters, setShowFilters] = useState(true);

  let locations = [];
  let positions = [];
  let footballers = [];

  data.forEach(footballer => {
    locations.push(footballer.location);
    locations = [...new Set(locations)];
    positions.push(footballer.position);
    positions = [...new Set(positions)];
    footballers.push(footballer.username);
    footballers = [...new Set(footballers)];
  });

  const genderChange = (e) => {
    const genderValue = e.target.value;
    setGender(genderValue);
    setNewData(genderValue === "" ? data : data.filter(footballer => footballer.gender === genderValue));
  };

  const filteredData = newData
    .filter(footballer => !searchTerm || footballer.username?.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(footballer => !position || footballer.position?.toLowerCase().includes(position.toLowerCase()))
    .filter(footballer => !location || footballer.location?.toLowerCase().includes(location.toLowerCase()));

  return (
    <div className="text-green-800 p-6">
      <h1 className="xl:text-3xl text-2xl font-bold text-center mb-6 p-3 shadow-2xl">
        Start Searching Through {footballers.length - 1}+ Footballers
      </h1>

      
      <div className="flex justify-end mb-4">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
        >
          <Filter size={18} />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      
      {showFilters && (
        <form className="bg-green-100 border border-green-700 rounded-lg p-6 mb-8 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="genders" className="block mb-1 font-semibold">Gender</label>
            <select
              id="genders"
              value={gender}
              onChange={genderChange}
              className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="positions" className="block mb-1 font-semibold">Position</label>
            <select
              id="positions"
              onChange={e => setPosition(e.target.value)}
              className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {positions.map((position, index) => (
                <option key={index} value={position}>{position}</option>
              ))}
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="locations" className="block mb-1 font-semibold">Location</label>
            <select
              id="locations"
              onChange={e => setLocation(e.target.value)}
              className="w-full p-2 border border-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <h1 className="text-black font-bold col-span-1 md:col-span-2">
            {filteredData.length} footballer{filteredData.length !== 1 && 's'} found
          </h1>
        </form>
      )}

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 py-6">
        {filteredData.length === 0 ? (
          <h2 className="text-center text-red-600 font-semibold col-span-full">
            No such player was found
          </h2>
        ) : (
          filteredData.map((footballer) => (
            <div
              key={footballer.id}
              className="bg-white border border-green-700 rounded-3xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="mb-4">
                {footballer.gender === "male" ? (
                  <img
                    src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random() * 60) + 1}.jpg`}
                    alt={`${footballer.username} profile`}
                    className="w-24 h-24 rounded-full border-4 border-green-700 object-cover"
                  />
                ) : footballer.gender === "female" ? (
                  <img
                    src={`https://xsgames.co/randomusers/assets/avatars/female/${Math.floor(Math.random() * 60) + 1}.jpg`}
                    alt={`${footballer.username} profile`}
                    className="w-24 h-24 rounded-full border-4 border-green-700 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full border-4 border-green-700 bg-green-700"></div>
                )}
              </div>

              
              <h2 className="text-xl font-bold text-green-800 mb-2">{footballer.username}</h2>
              {footballer.position && (
                <p className="text-sm text-gray-700 mb-1">Position: {footballer.position}</p>
              )}
              {footballer.location && (
                <p className="text-sm text-gray-700 mb-1">Location: {footballer.location}</p>
              )}
              {footballer.height && (
                <p className="text-sm text-gray-700 mb-1">Height: {footballer.height}</p>
              )}
              {footballer.age && (
                <p className="text-sm text-gray-700 mb-3">Age: {footballer.age}</p>
              )}

              <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300">
                View Profile
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Footballers;
