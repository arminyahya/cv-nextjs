'use client';
import DarkModeIcon from "@/Icons/dark-mode";
import LightModeIcon from "@/Icons/light-mode";
import react, { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "../constant";
import MultiLangIcon from "@/Icons/multi-lang";
import { useParams, useRouter } from "next/navigation";

type HeaderProps = {
}

export default function Header({ }: HeaderProps) {
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
	const { lang } = useParams();
	const router = useRouter();

	const switchTheme = () => {
		const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
		const targetThemeVariables = currentTheme === 'light' ? darkThemeColors : lightThemeColors;
		for (let variableName in targetThemeVariables) {
			document.documentElement.style.setProperty(variableName, targetThemeVariables[variableName] as string);
		}
		setCurrentTheme(targetTheme)
	}

	const switchLang = () => {
		const nextLanguage = lang === 'en' ? 'fa' : 'en';
		const body = document.querySelector('body');
		body?.classList.remove('animate-fadeIn-slow');
		body?.classList.add('animate-fadeIn-slow');
		router.push(nextLanguage)
	}

	return (
		<header className="flex justify-end items-center mb-4 print:hidden md:mb-2">
			<div className="header_item inline-block mx-2" onClick={switchTheme}>
				{currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
			</div>
			<div className="header_item inline-block mx-1" onClick={switchLang} >
				<MultiLangIcon />
			</div>
		</header>
	)
}