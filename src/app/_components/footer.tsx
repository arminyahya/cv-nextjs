"use client";
import GithubIcon from "@/Icons/github";
import LinkedinIcon from "@/Icons/linkedin-icon";
import StackoverflowIcon from "@/Icons/stackoverflow-icon";
import TelegramIcon from "@/Icons/telegram-icon";
import Link from "next/link";
import react, { useContext, useState } from "react";

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
