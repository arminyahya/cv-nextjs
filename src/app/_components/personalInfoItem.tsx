"use client";
import React from "react";
export default function PersonalInfoItem({ label, value }: { label: string, value: string }) {
  return (
		<div className="mb-2">
		<div className="inline-block text-sm font-bold mr-0.5">{label}:</div>
		<div className="inline-block text-base">{value}</div>
	</div>
	)
}