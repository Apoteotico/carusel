// Carousel.jsx
import React, { useState } from 'react';
import './Carousel.css';

const images = [
  { url: 'pagina1.html', src: 'http://via.placeholder.com/840x480', alt: 'Imagen 1' },
  { url: 'pagina2.html', src: 'http://via.placeholder.com/840x480', alt: 'Imagen 2' },
  { url: 'pagina3.html', src: 'http://via.placeholder.com/840x480', alt: 'Imagen 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>&lt;</button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="img-fluid"
        onClick={() => handleImageClick(images[currentIndex].url)}
      />
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
