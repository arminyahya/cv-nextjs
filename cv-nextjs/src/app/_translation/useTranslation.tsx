import AppContext from "@/appcontext";
import { useContext } from "react";
import FA_Dictionary from "./fa";
import EN_Dictionary from "./en";

export default function useTranslation() {
	const context = useContext(AppContext);
	const translate = (word: string) => {
		const dictionary = context.language === 'fa' ? FA_Dictionary : EN_Dictionary;
		return dictionary[word];
	}
	return {
		translate
	}
}