import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import  Post  from './Post.jsx';


  
const DogGallery = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch list of dog breeds from API
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        setBreeds(Object.keys(response.data.message).map(str => str.charAt(0).toUpperCase() + str.slice(1)));
      })
      .catch(error => {
        console.error('Error fetching breeds:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch images when selected breed changes
    if (selectedBreed !== '') {
      axios.get(`https://dog.ceo/api/breed/${selectedBreed.toLowerCase()}/images/random/100`)
        .then(response => {
          setImages(response.data.message);
        })
        .catch(error => {
          console.error('Error fetching images:', error);
        });
    }
  }, [selectedBreed]);

  return (
    <div className="App">
      <h1 class="doogle-logo">
      <span class="doogle-logo-g">D</span>
      <span class="doogle-logo-o1">o</span>
      <span class="doogle-logo-o2">o</span>
      <span class="doogle-logo-g">g</span>
      <span class="doogle-logo-l">l</span>
      <span class="doogle-logo-e">e</span>
      </h1>
      
      <div className="breed-selector">
        <label className="flat-label">Select Dog Breed:  </label>

        <select
        className='flat-selector'
          value={selectedBreed}
          onChange={e => setSelectedBreed(e.target.value)}
        >
          <option value="">Select a breed</option>
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>

      


      </div>
      <div className="image-gallery" >
       
        {images.map((image, index) => (
             
                    <Post image={image} index = {index} selectedBreed={selectedBreed}/>          
                  
                ))}
       
      </div>
    </div>
  );
};

 export default DogGallery;