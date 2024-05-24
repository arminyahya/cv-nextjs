"use client";
import localFont from "next/font/local";

import "./globals.css";
import Header from "./_components/header";
import AppContext from "@/appcontext";
import { useState } from "react";

const openSans = localFont({ src: "../../public/OpenSans.ttf" });
const iranYekan = localFont({ src: "../../public/Iranyekan light.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentLang, setCurrentLang] = useState<"en" | "fa">("fa");
  return (
    <html dir={currentLang === "en" ? "ltr" : "rtl"} lang={currentLang}>
      <body
        className={
          currentLang === "en" ? openSans.className : iranYekan.className
        }
      >
        <AppContext.Provider value={{ language: currentLang }}>
          <Header setCurrentLang={setCurrentLang} />
          {children}
        </AppContext.Provider>
        <div id="portal-modal"></div>
      </body>
    </html>
  );
}
