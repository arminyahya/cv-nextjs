"use client";
import React, { useState } from "react";
import Modal from "./modal";
import SlideShow from "./slideShow";

export default function GalleryButton({ images }: { images: string[] }) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="gallery-button">
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <SlideShow
          images={images}
        />
      </Modal>
      <span
        onClick={() => {
          setModalOpen(true);
        }}
      >
        See gallery
      </span>
    </div>
  );
}
