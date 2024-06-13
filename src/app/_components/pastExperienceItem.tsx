"use client";
import React, { useState } from "react";
import Modal from "./modal";
import SlideShow from "./slideShow";
import useTranslation from "../_translation/useTranslation";
import YeganehIcon from "@/Icons/yeganeh";
import GalleryButton from "./galleryButton";

type PastExperienceItemProps = {
	icon: React.JSX.Element,
	companyName: string,
	startDate: string,
	endDate: string,
	role: string,
	summary: string,
	images: string[];
	className: string;
}

export default function PastExperienceItem({ 
	icon,
	companyName,
	startDate,
	endDate,
	role,
	summary,
	images,
	className
}: PastExperienceItemProps) {

  return (
		<div className={`past-experience_item ${className}`}>
		<div className="past-experience_item_icon_wrapper">
			<div className="past-experience_item_icon">
				{icon}
			</div>
		</div>
		<div className="past-experience_item_detail">
			<div className="past-experience_item_detail_date">
				{companyName}<div className="small-horizontal-line"></div>{startDate} /{" "}
				{endDate}
			</div>
			<div className="past-experience_item_detail_role">
				{role}
			</div>
			<div className="past-experience_item_detail_activity">
				{summary}
				<GalleryButton
					images={images}
				/>
			</div>
		</div>
	</div>
	)
}