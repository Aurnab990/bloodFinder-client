import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://apollohealthlib.blob.core.windows.net/health-library/2021/06/shutterstock_541600759-scaled.jpg', // Replace with your actual image URLs
    'https://handsonpeople.com.au/wp-content/uploads/2021/11/Blood-Donation-1.jpg',
    'https://bswh-p-001.sitecorecontenthub.cloud/api/public/content/1682fae7df3148d381c40b7135e62756?v=a19246da',
    'https://www.bracu.ac.bd/sites/default/files/news-image/Blood%20Donation%20Camp%202019.jpg',
    'https://www.bracu.ac.bd/sites/default/files/news-image/2022/10/blood%20donation%20community%20service3.jpg'
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <div className="slide" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
        ))}
      </div>
      
    </div>
  );
};

export default ImageSlider;
