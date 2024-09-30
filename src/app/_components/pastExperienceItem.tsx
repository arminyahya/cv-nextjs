"use client";
import React, { Suspense } from "react";
import GalleryButton from "./galleryButton";
import { SliderItem } from "./slider-with-info";

type PastExperienceItemProps = {
  id: string;
  icon: React.JSX.Element;
  companyName: string;
  startDate: string;
  endDate: string;
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
  return (
    <div className={`past-experience_item ${className}`}>
      <div className="past-experience_item_icon_wrapper">
        <div className="past-experience_item_icon">{icon}</div>
      </div>
      <div className="past-experience_item_detail">
        <div className="past-experience_item_detail_date">
          {companyName}
          <div className="small-horizontal-line"></div>
          {startDate} / {endDate}
        </div>
        <div className="past-experience_item_detail_role">{role}</div>
        <div className="past-experience_item_detail_activity">
          <ul className="company-tasks">
            {companyTasks.map((task) => (
              <li className="company-tasks_item">• {task}</li>
            ))}
          </ul>
          <Suspense>
            <GalleryButton id={id} items={items} noDescription={noDescription}/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
