'use client';
import DarkModeIcon from "@/Icons/dark-mode";
import LightModeIcon from "@/Icons/light-mode";
import react, { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "../constant";
import AppContext from "../../appContext";
import MultiLangIcon from "@/Icons/multi-lang";
import { useParams, useRouter } from "next/navigation";

type HeaderProps = {
	setCurrentLang: (lang: "fa" | "en") => void;
}

export default function Header({ setCurrentLang }: HeaderProps) {
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light'); 
	const { lang } = useParams();
	const router = useRouter();

  const switchTheme = () => {
   const targetThemeVariables = currentTheme === 'light' ? darkThemeColors : lightThemeColors;
		document.querySelector('.main')?.classList.remove(`theme--${currentTheme}`);
		document.querySelector('.main')?.classList.add(currentTheme === 'light' ? 'theme--dark' : 'theme--light');
	 for(let variableName in targetThemeVariables) {
    // @ts-ignore
    document.documentElement.style.setProperty(variableName, targetThemeVariables[variableName]);
   }
   setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

	const switchLang = () => {
		const nextLanguage = lang === 'en' ? 'fa' : 'en';
		setCurrentLang(nextLanguage);
		const body = document.querySelector('body');
		body?.classList.remove('fade-in-animation');
		body?.classList.add('fade-in-animation');
		router.push(nextLanguage)
	}

	return (
		<div className="header">
			<div className="header_item" onClick={switchTheme}>
				{currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
			</div>
			<div className="header_item" onClick={switchLang} >
				<MultiLangIcon />
			</div>
		</div>
	)
}