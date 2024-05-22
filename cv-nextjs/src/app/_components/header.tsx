'use client';
import DarkModeIcon from "@/Icons/dark-mode";
import LightModeIcon from "@/Icons/light-mode";
import react, { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "../constant";
import AppContext from "@/appcontext";

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

	return (
		<div className="header">
			<div className="header_item" onClick={switchTheme}>
				{currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
			</div>
			<div className="header_item" onClick={() => setCurrentLang(language === 'en' ? 'fa' : 'en')}>
				{language === 'en' ? 'Farsi' : 'English'}
			</div>
		</div>
	)
}