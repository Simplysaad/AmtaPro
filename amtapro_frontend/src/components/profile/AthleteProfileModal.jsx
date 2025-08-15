import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

const AthleteProfileModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    bio: '',
    dob: '',
    height: '',
    weight: '',
    positions: [],
    nationality: 'nigerian'
  });
  const [profilePic, setProfilePic] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const positionOptions = [
    'striker',
    'midfielder', 
    'goalkeeper',
    'defender',
    'forward'
  ];

  const nationalityOptions = [
    'nigerian',
    'ghanaian',
    'kenyan',
    'south african',
    'egyptian',
    'moroccan',
    'senegalese',
    'cameroonian'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePositionChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      positions: checked 
        ? [...prev.positions, value]
        : prev.positions.filter(pos => pos !== value)
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, profilePic: 'File size must be less than 5MB' }));
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, profilePic: 'Please select an image file' }));
        return;
      }
      setProfilePic(file);
      setErrors(prev => ({ ...prev, profilePic: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.bio.trim()) {
      newErrors.bio = 'Bio is required';
    }
    
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    }
    
    if (!formData.height || formData.height < 100 || formData.height > 250) {
      newErrors.height = 'Please enter a valid height (100-250 cm)';
    }
    
    if (!formData.weight || formData.weight < 30 || formData.weight > 200) {
      newErrors.weight = 'Please enter a valid weight (30-200 kg)';
    }
    
    if (formData.positions.length === 0) {
      newErrors.positions = 'Please select at least one position';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('bio', formData.bio);
      formDataToSend.append('dob', formData.dob);
      formDataToSend.append('height', formData.height);
      formDataToSend.append('weight', formData.weight);
      formDataToSend.append('positions', formData.positions.join(','));
      formDataToSend.append('nationality', formData.nationality);
      
      if (profilePic) {
        formDataToSend.append('profilePic', profilePic);
      }
      
      const response = await fetch('/athletes', {
        method: 'POST',
        body: formDataToSend,
      });
      
      const data = await response.json();
      
      if (data.success) {
        onSuccess && onSuccess(data.data);
        onClose();
      } else {
        setErrors({ general: data.message || 'Failed to create profile' });
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Your Athlete Profile" size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.general && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
            {errors.general}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C13E]"
          />
          {errors.profilePic && (
            <p className="text-sm text-red-600 mt-1">{errors.profilePic}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio <span className="text-red-500">*</span>
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#81C13E]"
            placeholder="Tell us about yourself and your football journey..."
          />
          {errors.bio && (
            <p className="text-sm text-red-600 mt-1">{errors.bio}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
            required
          />
          
          <Select
            label="Nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            options={nationalityOptions}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Height (cm)"
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            error={errors.height}
            min="100"
            max="250"
            required
          />
          
          <Input
            label="Weight (kg)"
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            error={errors.weight}
            min="30"
            max="200"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Playing Positions <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {positionOptions.map(position => (
              <label key={position} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={position}
                  checked={formData.positions.includes(position)}
                  onChange={handlePositionChange}
                  className="rounded border-gray-300 text-[#81C13E] focus:ring-[#81C13E]"
                />
                <span className="text-sm capitalize">{position}</span>
              </label>
            ))}
          </div>
          {errors.positions && (
            <p className="text-sm text-red-600 mt-1">{errors.positions}</p>
          )}
        </div>
        
        <div className="flex flex-col space-y-3 pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Creating Profile...' : 'Create Profile'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AthleteProfileModal;