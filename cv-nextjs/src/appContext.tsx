'use client';

import { createContext } from "react";

type AppContextType = {
	language: 'fa' | 'en'
}

const AppContext = createContext<AppContextType>({
	language: 'fa'
})

export default AppContext;