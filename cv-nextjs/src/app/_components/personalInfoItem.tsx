"use client";
import React, { useState } from "react";
import Modal from "./modal";
import SlideShow from "./slideShow";
import useTranslation from "../_translation/useTranslation";

export default function PersonalInfoItem({ label, value }: { label: string, value: string }) {

  return (
		<div className="personal-info_item">
		<div className="personal-info_item_label">{label}:</div>
		<div className="personal-info_item_value">{value}</div>
	</div>
	)
}