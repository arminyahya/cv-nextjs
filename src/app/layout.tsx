"use client";
import localFont from "next/font/local";

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
        {children}
        <div id="portal-modal"></div>
      </body>
    </html>
  );
}
