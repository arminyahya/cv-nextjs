"use client";
import GithubIcon from "@/Icons/github";
import LinkedinIcon from "@/Icons/linkedin-icon";
import StackoverflowIcon from "@/Icons/stackoverflow-icon";
import TelegramIcon from "@/Icons/telegram-icon";
import react, { useContext, useState } from "react";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className="footer">
      <div className="footer_item">
        <GithubIcon />
      </div>
      <div className="footer_item">
        <LinkedinIcon />
      </div>
      <div className="footer_item">
        <StackoverflowIcon />
      </div>
    </div>
  );
}
