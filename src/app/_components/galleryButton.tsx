"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useTranslation from "../_translation/useTranslation";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Slider, { SliderItem } from "./slider";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import('./modal'), { ssr: false })


export default function GalleryButton({
  id,
  items,
  noDescription
}: {
  id: string;
  items: SliderItem[];
  noDescription?: boolean
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
  const wasIOpen = useRef(false);

  useEffect(() => {
    console.log(id && isModalOpen);
    if (isModalOpen) {
      document.querySelector("body")?.classList.add("ReactModal__Body--open");
      wasIOpen.current = true;
    } else {
      if (wasIOpen.current) {
        document
          .querySelector("body")
          ?.classList.remove("ReactModal__Body--open");
        wasIOpen.current = false;
      }

    }
  }, [isModalOpen]);


  const router = useRouter();
  return (
    <div className="inline-block text-text-color underline cursor-pointer">
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          router.back();
        }}
      >
        <Slider items={items} onClose={() => { router.back() }} noDescription={noDescription} />
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
