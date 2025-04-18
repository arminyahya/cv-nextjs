"use client";
import React, { Suspense } from "react";
import GalleryButton from "./galleryButton";
import { SliderItem } from "./slider";
import Link from "next/link";
import { useParams } from "next/navigation";
import useTranslation from "../translation/useTranslation";

type PastExperienceItemProps = {
  id: string;
  icon: React.JSX.Element;
  companyName: string;
  startDate: string;
  endDate?: string;
  role: string;
  companyTasks: string[];
  items: SliderItem[];
  className: string;
  noDescription?: boolean
};

export default function PastExperienceItem({
  id,
  icon,
  companyName,
  startDate,
  endDate,
  role,
  companyTasks,
  items,
  className,
  noDescription
}: PastExperienceItemProps) {
  const params = useParams();
  const lang = params.lang;
  const { translate } = useTranslation(lang as "fa" | "en");

  return (
    <div className={`flex ${className}`}>
      <div className="w-14 me-3">
        <div className="past-experience_item_icon">{icon}</div>
      </div>
      <div>
        <div className="text-xs mb-2 text-midnight-blue-400">
          {companyName}
          <div className="inline-block w-4 h-[1px] my-0 mx-1 border-t border-solid border-text-color-lighter align-middle opacity-50"></div>
          {startDate} / {endDate ?? translate('now')}
        </div>
        <div className="text-base mb-2">{role}</div>
        <div className="text-base text-text-color-lighter">
          <ul className="p-0">
            {companyTasks.map((task) => (
              <li className="list-none my-1">• {task}</li>
            ))}
          </ul>
          <Suspense>
            <GalleryButton id={id} items={items} noDescription={noDescription} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
