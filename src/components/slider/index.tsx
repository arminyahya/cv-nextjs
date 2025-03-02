"use client"

import { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { ZoomIn, ZoomOut, Move, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import useTranslation from '../../translation/useTranslation'
import './slider.style.css'
import { basePath } from '@/constant'

export interface SliderItem {
  type: 'image' | 'video';
  src: string;
  description: string;
}

interface ResponsiveSliderProps {
  items: SliderItem[];
  onClose: () => void;
  noDescription?: boolean;
}

export default function Slider({ items, onClose, noDescription = false }: ResponsiveSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZooming, setIsZooming] = useState(false)
  const { lang } = useParams();
  const { translate } = useTranslation(lang as "fa" | 'en');
  const [isMediaLoaded, setIsMediaLoaded] = useState(false)

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsMediaLoaded(false)
  }

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    setIsMediaLoaded(false)
  }

  const currentItem = items[currentIndex]
  const displayNavigationButtons = items.length > 1;
  const displayNextButton = !!items[currentIndex + 1];

  return (
    <div className="responsive-slider">
      <div className={`slider-container`}>
        {/* Media Section */}
        <div className="media-section">
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
            onZoomStart={() => setIsZooming(true)}
            onZoomStop={() => setIsZooming(false)}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="zoom-controls">
                  <button onClick={() => zoomIn()} className="zoom-button text-black" aria-label="Zoom In">
                    <ZoomIn size={24} />
                  </button>
                  <button onClick={() => zoomOut()} className="zoom-button text-black" aria-label="Zoom Out">
                    <ZoomOut size={24} />
                  </button>
                  <button onClick={() => resetTransform()} className="zoom-button text-black" aria-label="Reset Zoom">
                    <Move size={24} />
                  </button>
                  <button onClick={onClose} className="zoom-button text-black" aria-label="Close Slider">
                    <X size={24} />
                  </button>
                </div>
                {!isMediaLoaded && (
                  <div className="media-placeholder">
                    <span>{translate("loading")}</span>
                  </div>
                )}
                <TransformComponent>
                  <div className="media-container">
              
                    {currentItem.type === 'image' ? (
                      <img
                        src={`${basePath}${currentItem.src}`}
                        alt={`Item ${currentIndex + 1}`}
                        className={`slider-media ${isMediaLoaded ? 'loaded' : 'loading'}`}
                        style={{ cursor: isZooming ? 'zoom-in' : 'move' }}
                        onLoad={() => setIsMediaLoaded(true)}
                      />
                    ) : (
                      <video
                        src={`${basePath}${currentItem.src}`}
                        className={`slider-media ${isMediaLoaded ? 'loaded' : 'loading'}`}
                        controls
                        preload="metadata"
                        style={{ cursor: isZooming ? 'zoom-in' : 'move' }}
                        onLoadedData={() => setIsMediaLoaded(true)}
                      />
                    )}
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>

        {/* Information Section */}
        <div className="info-section">
          <div className="info-content text-black">
            {items[currentIndex].description}
          </div>
          {displayNavigationButtons && <div className="navigation-buttons">
            <button onClick={prevItem} className="nav-button">{translate('previous')}</button>
            {displayNextButton && <button onClick={nextItem} className="nav-button">{translate('next')}</button>}
          </div>}
        </div>
      </div>

    </div>
  )
}