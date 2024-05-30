import AppContext from "../../appContext";
import { useContext } from "react";
import FA_Dictionary from "./fa";
import EN_Dictionary from "./en";

export default function useTranslation() {
	const context = useContext(AppContext);
	const translate = (word: string) => {
		let result;
		const dictionary = context.language === 'fa' ? FA_Dictionary : EN_Dictionary;
		result = dictionary[word];
		if(!result) {
			return word;
		}
		return result;
	}
	
	return {
		translate,
		currentLanguage: context.language
	}
}