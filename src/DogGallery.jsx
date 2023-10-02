import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogGallery = ({ selectedBreed }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random/10`);
        setImages(response.data.message);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    if (selectedBreed) {
      fetchImages();
    }
  }, [selectedBreed]);

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Dog ${index + 1}`} className="m-2 rounded-md" />
      ))}
    </div>
  );
};

export default DogGallery;
