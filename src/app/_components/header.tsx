'use client';
import DarkModeIcon from "@/Icons/dark-mode";
import LightModeIcon from "@/Icons/light-mode";
import react, { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "../constant";
import AppContext from "../../appContext";
import MultiLangIcon from "@/Icons/multi-lang";

type HeaderProps = {
	setCurrentLang: (lang: "fa" | "en") => void;
}

export default function Header({ setCurrentLang }: HeaderProps) {
	
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light'); 
	const context = useContext(AppContext);
	const {language} = context;

  const switchTheme = () => {
   const targetThemeVariables = currentTheme === 'light' ? darkThemeColors : lightThemeColors;
   for(let variableName in targetThemeVariables) {
    // @ts-ignore
    document.documentElement.style.setProperty(variableName, targetThemeVariables[variableName]);
   }
   setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

	const switchLang = () => {
		setCurrentLang(language === 'en' ? 'fa' : 'en');
		const body = document.querySelector('body');
		body?.classList.remove('fade-in-animation');
		body?.classList.add('fade-in-animation');
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