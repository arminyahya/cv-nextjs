import React, { useRef, useState } from "react";
import useTranslation from "../_translation/useTranslation";
import Image from "next/image";
import LeftArrow from "@/Icons/left-arrow";
import RightArrow from "@/Icons/right-arrow";
import ZoomInIcon from "@/Icons/zoom-in";
import ZoomOutIcon from "@/Icons/zoom-out";
import CloseIcon from "@/Icons/close";

const SlideShow = ({ images, onClose }: any) => {
  const { currentLanguage } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const prevMousePosition = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => {
    setZoomLevel((zoom) => zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((zoom) => zoom - 0.1);
  };

  const handleImageMoveStart = (e) => {
    setIsDragging(true);
    prevMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleImageMoveEnd = (e) => {
    setIsDragging(false);
  };

  const handleImageMove = (e) => {
    if (isDragging) {
      console.log(isDragging);
      const { x, y } = position;
      const deltaX = e.clientX - prevMousePosition.current.x;
      const deltaY = e.clientY - prevMousePosition.current.y;
      prevMousePosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: x + deltaX, y: y + deltaY });
    }
  };

  const handleZoom = (delta) => {
    setZoomLevel((prev) => {
      const newZoom = prev + delta;
      if (newZoom >= 1) {
        return newZoom;
      }
      return 1;
    });
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );
      const zoomDelta = distance / 100 - 1;
      handleZoom(zoomDelta);
    }
  };

  const handleImageWheel = (e) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleZoom(delta);
  };

  const PrevIcon = () => <RightArrow />;
  const NextIcon = () => <LeftArrow />;
  return (
    <div className="slideshow-container" ref={containerRef}>
      <div className="slideshow-image-toolbar">
        <div onClick={onClose} className="close-button slideshow-image-toolbar_item">
          <CloseIcon />
        </div>
        <div onClick={handleZoomIn} className="zoom-button slideshow-image-toolbar_item">
          <ZoomInIcon />
        </div>
        <div onClick={handleZoomOut} className="zoom-button slideshow-image-toolbar_item">
          <ZoomOutIcon />
        </div>
      </div>
      <div className="slideshow-image-container">
        <img
          ref={imageRef}
          src={images[currentIndex]}
          alt="Slide"
          className="slide-image"
          style={{
            transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
            cursor: zoomLevel > 1 ? "move" : "default",
          }}
          onMouseDown={handleImageMoveStart}
          onMouseUp={handleImageMoveEnd}
          onMouseMove={handleImageMove}
          onTouchMove={handleTouchMove}
          onDragStart={(e) => e.preventDefault()}
          onWheel={handleImageWheel}
        />
      </div>
      <button onClick={goToPreviousSlide} className="prev-button">
        {currentLanguage === "en" ? <PrevIcon /> : <NextIcon />}
      </button>
      <button onClick={goToNextSlide} className="next-button">
        {currentLanguage === "en" ? <NextIcon /> : <PrevIcon />}
      </button>
    </div>
  );
};

export default SlideShow;
