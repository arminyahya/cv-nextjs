"use client";
import localFont from "next/font/local";

import "./globals.css";
import Header from "./_components/header";
import AppContext from "@/appContext";
import Footer from "./_components/footer";
import { useParams } from "next/navigation";

const openSans = localFont({ src: "../../public/OpenSans.ttf" });
const iranYekan = localFont({ src: "../../public/Iranyekan light.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = useParams();
  return (
    <html dir={lang === "en" ? "ltr" : "rtl"} lang={lang as "en" | "fa"}>
      <body
        className={
          (lang === "en" ? openSans.className : iranYekan.className) + ' relative my-0 mx-auto w-full bg-background-color max-w-[1000px]'
        }
      >
        <Header />
        {children}
        <Footer />
        <div id="portal-modal"></div>
      </body>
    </html>
  );
}
