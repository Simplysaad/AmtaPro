import React, {useState} from 'react';
import {data} from './footballerData';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import { Search, Filter } from 'lucide-react';

const Footballers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [position, setPosition] = useState("")
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [showFilters, setShowFilters] = useState(false);
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
        setNewData(genderValue === "" ? data : data.filter(footballer => footballer.gender === genderValue))
    }

    const filteredData = newData
    .filter(footballer => !searchTerm || footballer.username?.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(footballer => !position || footballer.position?.toLowerCase().includes(position.toLowerCase()))
    .filter(footballer => !location || footballer.location?.toLowerCase().includes(location.toLowerCase()));

    return(
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className='text-4xl font-bold text-[#02342B] mb-4'>
                        Discover Football Talent
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Search through {footballers.length}+ talented footballers from across Africa
                    </p>
                </div>
                
                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C13E]"
                            />
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2"
                        >
                            <Filter size={20} />
                            Filters
                        </Button>
                    </div>
                    
                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                            <Select
                                label="Gender"
                                value={gender}
                                onChange={genderChange}
                                options={[
                                    { value: '', label: 'All Genders' },
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' }
                                ]}
                            />
                            
                            <Select
                                label="Position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                options={[
                                    { value: '', label: 'All Positions' },
                                    ...positions.map(pos => ({ value: pos, label: pos.charAt(0).toUpperCase() + pos.slice(1) }))
                                ]}
                            />
                            
                            <Select
                                label="Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                options={[
                                    { value: '', label: 'All Locations' },
                                    ...locations.map(loc => ({ value: loc, label: loc }))
                                ]}
                            />
                        </div>
                    )}
                    
                    <div className="mt-4 text-sm text-gray-600">
                        {filteredData.length === 1 ? 
                            `${filteredData.length} footballer found` : 
                            `${filteredData.length} footballers found`
                        }
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                filteredData.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                        <h2 className="text-xl text-gray-600 font-medium">No footballers found</h2>
                        <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                    </div>
                ) : (
                    filteredData.map(footballer => (
                        <div key={footballer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    {footballer.gender === "male" ? (
                                        <img 
                                            className="w-16 h-16 rounded-full border-2 border-[#81C13E]" 
                                            src={`https://xsgames.co/randomusers/assets/avatars/male/${Math.floor(Math.random() * 60) + 1}.jpg`} 
                                            alt={`${footballer.username} profile picture`}
                                        />
                                    ) : footballer.gender === "female" ? (
                                        <img 
                                            className="w-16 h-16 rounded-full border-2 border-[#81C13E]" 
                                            src={`https://xsgames.co/randomusers/assets/avatars/female/${Math.floor(Math.random() * 60) + 1}.jpg`} 
                                            alt={`${footballer.username} profile picture`}
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-full bg-[#81C13E] border-2 border-[#81C13E]"></div>
                                    )}
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-[#02342B]">{footballer.username}</h3>
                                        <p className="text-gray-600 capitalize">{footballer.position}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <p><span className="font-medium">Location:</span> {footballer.location}</p>
                                    <p><span className="font-medium">Height:</span> {footballer.height}cm</p>
                                    <p><span className="font-medium">Age:</span> {footballer.age}</p>
                                </div>
                                
                                <Button className="w-full">
                                    View Profile
                                </Button>
                            </div>
                        </div>
                    ))
                )
            }
                </div>
            </div>
            
            <Footer />
        </div>
    )
    
}

export default Footballers;