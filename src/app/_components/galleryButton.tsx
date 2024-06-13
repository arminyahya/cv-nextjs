"use client";
import React, { useState } from "react";
import Modal from "./modal";
import SlideShow from "./slideShow";
import useTranslation from "../_translation/useTranslation";
import { useParams } from "next/navigation";

export default function GalleryButton({ images }: { images: string[] }) {
	const { lang } = useParams();
	const { translate } = useTranslation(lang as 'fa' | 'en');
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="gallery-button">
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
					document.querySelector('body')?.classList.remove('ReactModal__Body--open');
          setModalOpen(false);
        }}
      >
        <SlideShow
          images={images}
        />
      </Modal>
      <span
        onClick={() => {
					(document.querySelector('html') as any).scrollTop = 0;
					document.querySelector('body')?.classList.add('ReactModal__Body--open');
          setModalOpen(true);
        }}
      >
        {translate('see_gallery')}
      </span>
    </div>
  );
}
