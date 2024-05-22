"use client";
import localFont from "next/font/local";

import "./globals.css";
import Header from "./_components/header";
import AppContext from "@/appcontext";
import { useState } from "react";

const openSans = localFont({ src: "../../public/OpenSans.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const [currentLang, setCurrentLang] = useState<"en" | 'fa'>("en")
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AppContext.Provider value={{ language: currentLang }}>
          <Header setCurrentLang={setCurrentLang} />
          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
