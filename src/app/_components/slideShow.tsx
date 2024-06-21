"use client";
import React, { useRef, useState } from "react";
import LeftArrow from "@/Icons/left-arrow";
import RightArrow from "@/Icons/right-arrow";
import ZoomInIcon from "@/Icons/zoom-in";
import ZoomOutIcon from "@/Icons/zoom-out";
import CloseIcon from "@/Icons/close";
import { basePath } from "../constant";
import { useParams, useRouter } from "next/navigation";

const SlideShow = ({ images, onClose }: any) => {
  const { lang } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const prevMousePosition = useRef({ x: 0, y: 0 });
  const startX = useRef(0);
  const startY = useRef(0);
  const initialDistance = useRef(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => {
    handleZoom(0.1);
  };

  const handleZoomOut = () => {
    handleZoom(-0.1);
  };

  const handleImageMoveStart = (e: any) => {
    setIsDragging(true);
    prevMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleImageMoveEnd = (e: any) => {
    setIsDragging(false);
  };

  const isMovingOutsideViewport = (x: number, y: number) => {
    var rect = (imageRef.current as HTMLImageElement).getBoundingClientRect();
    var offsetTop = rect.top + window.scrollY + y;
    var offsetLeft = rect.left + window.scrollX + x;
    if (offsetLeft + rect.width < 100 || offsetLeft + 100 > window.innerWidth || offsetTop + 100 > window.innerHeight || offsetTop + rect.height < 100) {
      return true;
    } else {
      return false
    }
  }

  const handleImageMove = (e: any) => {
    if (isDragging) {
      const { x, y } = position;
      const deltaX = e.clientX - prevMousePosition.current.x;
      const deltaY = e.clientY - prevMousePosition.current.y;
      prevMousePosition.current = { x: e.clientX, y: e.clientY };
      const nextX = x + deltaX;
      const nextY = y + deltaY;
      if (isMovingOutsideViewport(deltaX, deltaY)) {
        return;
      }
      setPosition({ x: nextX, y: nextY });
    }
  };

  const handleZoom = (delta: any) => {
    setZoomLevel((prev) => {
      const newZoom = prev + delta;
      if (newZoom >= 1) {
        return newZoom;
      }
      return 1;
    });
  };

  const handleTouchStart = (e: any) => {
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    if (touch1 && touch2) {
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      initialDistance.current = distance;
    }
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: any) => {
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    if (isDragging) {
      if (touch1 && touch2 && initialDistance) {
        const currentDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const diff = currentDistance - initialDistance.current;
        if (diff > 0) {
          handleZoom(0.1);
        }
        else {
          handleZoom(-0.1);
        }
        initialDistance.current = currentDistance;
      } else {
        const deltaX = e.touches[0].clientX - startX.current;
        const deltaY = e.touches[0].clientY - startY.current;
        startX.current = e.touches[0].clientX;
        startY.current = e.touches[0].clientY;
        if (isMovingOutsideViewport(deltaX, deltaY)) {
          return;
        }
        setPosition({
          x: position.x + deltaX,
          y: position.y + deltaY,
        });
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleImageWheel = (e: any) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleZoom(delta);
  };

  const PrevIcon = () => lang === 'en' ? <RightArrow /> : <LeftArrow />;
  const NextIcon = () => lang === 'en' ? <LeftArrow /> : <RightArrow />;
  return (
    <div className="slideshow-container" ref={containerRef}>
      <div className="slideshow-image-toolbar">
        <div
          onClick={handleZoomIn}
          className="zoom-button slideshow-image-toolbar_item"
        >
          <ZoomInIcon />
        </div>
        <div
          onClick={handleZoomOut}
          className="zoom-button slideshow-image-toolbar_item"
        >
          <ZoomOutIcon />
        </div>
        <div
          onClick={onClose}
          className="close-button slideshow-image-toolbar_item"
        >
          <CloseIcon />
        </div>
      </div>
      <div className="slideshow-image-container">
        <img
          ref={imageRef}
          src={`${basePath}${images[currentIndex]}`}
          alt="Slide"
          className="slide-image"
          style={{
            transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: 'top left',
            position: 'relative',
            overflow: 'hidden',
            cursor: zoomLevel > 1 ? "move" : "default",
          }}
          onMouseDown={handleImageMoveStart}
          onMouseUp={handleImageMoveEnd}
          onMouseMove={handleImageMove}
          onDragStart={(e) => e.preventDefault()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleImageWheel}
        />
      </div>
      <button onClick={goToPreviousSlide} className="prev-button">
        <PrevIcon />
      </button>
      <button onClick={goToNextSlide} className="next-button">
        <NextIcon />
      </button>
    </div>
  );
};

export default SlideShow;
