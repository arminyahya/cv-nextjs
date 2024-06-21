"use client";
import GithubIcon from "@/Icons/github";
import LinkedinIcon from "@/Icons/linkedin";
import StackoverflowIcon from "@/Icons/stackoverflow";
import TelegramIcon from "@/Icons/telegram";
import Link from "next/link";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className="footer">
      <div className="footer_item">
        <Link href="https://github.com/arminyahya" passHref={true}>
          <GithubIcon />
        </Link>
      </div>
      <div className="footer_item">
        <Link href="https://www.linkedin.com/in/arminyahya/" passHref={true}>
          <LinkedinIcon />
        </Link>
      </div>
      <div className="footer_item">
        <Link
          href="https://stackoverflow.com/users/9354934/armin-yahya"
          passHref={true}
        >
          <StackoverflowIcon />
        </Link>
      </div>
    </div>
  );
}
