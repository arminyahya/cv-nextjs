'use client';

import { createContext } from "react";

type AppContextType = {
	language: 'fa' | 'en'
}

const AppContext = createContext<AppContextType>({
	language: 'en'
})

export default AppContext;