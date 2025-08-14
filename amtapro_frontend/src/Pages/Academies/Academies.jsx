import React, {useState} from 'react';
import {dataA} from './academyData';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../../components/ui/Button';
import { Search, MapPin, Mail, ExternalLink } from 'lucide-react';


const Academies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredAcademies = dataA.filter(academy => 
        academy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        academy.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className='text-4xl font-bold text-[#02342B] mb-4'>
                        Football Academies & Scouts
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Connect with {dataA.length}+ academies and scouts looking for talent
                    </p>
                </div>
                
                {/* Search Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search academies by name or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C13E]"
                        />
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-600">
                        {filteredAcademies.length === 1 ? 
                            `${filteredAcademies.length} academy found` : 
                            `${filteredAcademies.length} academies found`
                        }
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAcademies.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <h2 className="text-xl text-gray-600 font-medium">No academies found</h2>
                            <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
                        </div>
                    ) : (
                        filteredAcademies.map(academy => (
                            <div key={academy.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-[#02342B] mb-2">{academy.name}</h3>
                                        <div className="flex items-center text-gray-600 mb-2">
                                            <MapPin size={16} className="mr-2" />
                                            <span>{academy.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 mb-4">
                                            <Mail size={16} className="mr-2" />
                                            <span>{academy.email}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <Button className="w-full">
                                            Contact Academy
                                        </Button>
                                        
                                        {academy.socialLink && (
                                            <Button 
                                                variant="outline" 
                                                className="w-full flex items-center justify-center gap-2"
                                                onClick={() => window.open(academy.socialLink, '_blank')}
                                            >
                                                <ExternalLink size={16} />
                                                Visit Website
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            
            <Footer />
        </div>
    )
    
}

export default Academies;