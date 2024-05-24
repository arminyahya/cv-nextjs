import React, { useState } from 'react';
import useTranslation from '../_translation/useTranslation';
import Image from 'next/image'
import LeftArrow from '@/Icons/left-arrow';
import RightArrow from '@/Icons/right-arrow';

const SlideShow = ({ images }: any) => {
	const {currentLanguage} = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

	const PrevIcon = () => <RightArrow />;
	const NextIcon = () =><LeftArrow /> 
  return (
    <div className="slideshow-container">
			<div className='slideshow-image-container'>
			<img src={images[currentIndex]} alt="Slide" className="slide-image" />
			</div>
      <button onClick={goToPreviousSlide} className="prev-button">{currentLanguage === 'en' ? <PrevIcon /> : <NextIcon />}</button>
      <button onClick={goToNextSlide} className="next-button">{currentLanguage === 'en' ? <NextIcon /> : <PrevIcon />}</button>
    </div>
  );
}

export default SlideShow;