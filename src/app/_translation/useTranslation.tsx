
import AppContext from "../../appContext";
import { useContext } from "react";
import FA_Dictionary from "./fa";
import EN_Dictionary from "./en";
import { useParams } from "next/navigation";

export default function useTranslation(lang: 'fa' | 'en') {
  const translate = (word: string) => {
    let result;
    const dictionary = lang === "en" ? EN_Dictionary : FA_Dictionary;
    result = dictionary[word];
    if (!result) {
      return word;
    }
    return result;
  };

  return {
    translate,
    currentLanguage: lang,
  };
}
