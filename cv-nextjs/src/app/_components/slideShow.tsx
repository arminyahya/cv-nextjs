import React, { useState } from 'react';

const SlideShow = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt="Slide" className="slide-image" />
      <button onClick={goToPreviousSlide} className="prev-button">&#10094;</button>
      <button onClick={goToNextSlide} className="next-button">&#10095;</button>
    </div>
  );
}

export default SlideShow;