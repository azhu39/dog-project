import React, { useState, useEffect } from 'react';
import BreedSelect from './BreedSelect';
import DogGallery from './DogGallery';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        const breedNames = Object.keys(response.data.message);
        setBreeds(breedNames);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

   fetchBreeds(); 
  }, []);

  const handleBreedChange = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Dog Breed Gallery</h1>
      <BreedSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={handleBreedChange} />
      {selectedBreed && <DogGallery selectedBreed={selectedBreed} />}
    </div>
  );
};

export default App;

