"use client";
import React from "react";
export default function PersonalInfoItem({ label, value }: { label: string, value: string }) {
  return (
		<div className="mb-2">
		<div className="inline-block text-sm font-bold me-2">{label}:</div>
		<div className="inline-block text-base">{value}</div>
	</div>
	)
}