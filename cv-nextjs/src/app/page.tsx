"use client";
import Image from "next/image";
import "./page.css";
import { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "./constant";
import LinkedinIcon from "@/Icons/linkedin-icon";
import GmailIcon from "@/Icons/gmail-icon";
import useTranslation from "./_translation/useTranslation";
import AppContext from "@/appContext";

export default function Home() {
  const { translate, currentLanguage } = useTranslation();
	const slideClassName = currentLanguage === 'en' ? 'slide-from-left' : 'slide-from-right';
  return (
    <main className={"main"}>
      <section className={"main-section"}>
        <div className="profile-image_wrapper margin-bottom">
          <Image alt="armin-yahya" src={"/profile-image.jpg"} fill />
        </div>
        <div className="full-name">{translate("fullname")}</div>
        <div className="role">{translate("role")}</div>
        <div className="contact-info">
          <div className="contact-info_item">
            <div className="contact-info_item_icon">
              <GmailIcon />
            </div>
            <div className="contact-info_item_text">arminyahyaa@gmail.com</div>
          </div>
          <div className="contact-info_item">
            <div className="contact-info_item_icon">
              <LinkedinIcon />
            </div>
            <div className="contact-info_item_text">linkedin.com</div>
          </div>
        </div>
        <div className={"header " + slideClassName}>{translate("about_me")}</div>
        <div
          className="topic-inner-text margin-bottom about-me"
          style={{ maxWidth: 400 }}
        >
          {translate("about_me_content")}
        </div>
        <div className={"header " + slideClassName}>{translate("skills")}</div>
        <div className="topic-inner-text skills_inner">
					<ul>
            <li className="skills_item">Javascript</li>
            <li className="skills_item">Reactjs</li>
            <li className="skills_item">Css</li>
						</ul>
					<ul>

            <li className="skills_item">ReduxToolkit</li>
            <li className="skills_item">Nextjs</li>
            <li className="skills_item">Webpack</li>
						</ul>

        </div>
      </section>
      <section className={"main-section "}>
        <div className={"header " + slideClassName}>{translate("past_experiences")}</div>
        <div className="past-experience fade-in-animation">
          <div className="past-experience_item margin-bottom-2x">
            <div className="past-experience_item_icon_wrapper">
              <div className="past-experience_item_icon">
                <Image alt="likedin" src={"/chargoon.jpg"} fill />
              </div>
            </div>
            <div className="past-experience_item_detail">
              <div className="past-experience_item_detail_date">
                {translate("chargoon")} - {translate("2020")} /{" "}
                {translate("Ppresent")}
              </div>
              <div className="past-experience_item_detail_role">
                {translate("role")}
              </div>
              <div className="past-experience_item_detail_activity">
                {translate("chargoon_work_description")}
              </div>
            </div>
          </div>
          <div className="past-experience_item">
            <div className="past-experience_item_icon_wrapper">
              <div className="past-experience_item_icon">
                <Image alt="likedin" src={"/yeganeh.jpg"} fill />
              </div>
            </div>
            <div className="past-experience_item_detail">
              <div className="past-experience_item_detail_date">
							{translate("yeganeh_soft")} - {translate("2018")} / {translate("2020")}
              </div>
              <div className="past-experience_item_detail_role">
                {translate("role")}
              </div>
              <div className="past-experience_item_detail_activity">
							{translate("yeganeh_soft_description")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
