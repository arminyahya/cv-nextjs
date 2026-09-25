"use client";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/header";
import AppContext from "@/appContext";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";

const openSans = localFont({ src: "../../public/OpenSans.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = useParams();
  return (
    <html  >
      <body
        className={
          ( openSans.className) + ' relative my-0 mx-auto w-full bg-background-color max-w-[1000px]'
        }
      >
        <Header />
        {children}
        <div id="portal-modal"></div>
      </body>
    </html>
  );
}
