import Image from "next/image";
import "./page.css";
import { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "./constant";
import LinkedinIcon from "@/Icons/linkedin-icon";
import GmailIcon from "@/Icons/gmail-icon";
import useTranslation from "./_translation/useTranslation";
import AppContext from "@/appContext";
import GalleryButton from "./_components/galleryButton";
import YeganehIcon from "@/Icons/yeganeh";
import ChargoonIcon from "@/Icons/chargoon";
import PersonalInfoItem from "./_components/personalInfoItem";
import { basePath } from "./constant";
import { Metadata } from "next";
import Page from './[lang]/page';

export const metadata: Metadata = {
  title: 'Armin Yahya Resume',
  description: `Discover Armin Yahya's professional background, skills, and accomplishments in their online resume. Get a glimpse of their qualifications and experience in Frontend`,
};

export default function Home() {
	return <Page params={{lang: 'fa'}}  />
}
