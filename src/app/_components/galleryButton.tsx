"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "./modal";
import SlideShow from "./slideShow";
import useTranslation from "../_translation/useTranslation";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function GalleryButton({
  id,
  images,
}: {
  id: string;
  images: string[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const params = useParams();
  const lang = params.lang;
  const { translate } = useTranslation(lang as "fa" | "en");
  const isModalOpen = useMemo(
    () => searchParams.get(`${id}-slideshow`),
    [searchParams.get(`${id}-slideshow`)]
  );
  useEffect(() => {
    if (isModalOpen) {
      document.querySelector("body")?.classList.add("ReactModal__Body--open");
    } else {
      document
        .querySelector("body")
        ?.classList.remove("ReactModal__Body--open");
    }
  }, [isModalOpen]);

  const router = useRouter();
  return (
    <div className="gallery-button">
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          router.back();
        }}
      >
        <SlideShow images={images} />
      </Modal>
      <span
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString(`${id}-slideshow`, "open")
          );
        }}
      >
        {translate("see_gallery")}
      </span>
    </div>
  );
}
