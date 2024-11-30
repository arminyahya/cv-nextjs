"use client";
import GithubIcon from "@/Icons/github";
import LinkedinIcon from "@/Icons/linkedin";
import StackoverflowIcon from "@/Icons/stackoverflow";
import TelegramIcon from "@/Icons/telegram";
import Link from "next/link";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer className="flex items-center border-t border-solid border-text-color-lighter w-full py-2">
      <div className="inline-block mx-2 ms-0">
        <Link href="https://github.com/arminyahya" passHref={true}>
          <GithubIcon />
        </Link>
      </div>
      <div className="inline-block mx-2">
        <Link href="https://www.linkedin.com/in/arminyahya/" passHref={true}>
          <LinkedinIcon />
        </Link>
      </div>
      <div className="inline-block mx-2">
        <Link
          href="https://stackoverflow.com/users/9354934/armin-yahya"
          passHref={true}
        >
          <StackoverflowIcon />
        </Link>
      </div>
    </footer>
  );
}
