"use client";
import Image from "next/image";
import "./page.css";
import { useState } from "react";
import { darkThemeColors, lightThemeColors } from "./constant";
import LinkedinIcon from "@/Icons/linkedin-icon";
import GmailIcon from "@/Icons/gmail-icon";
import AppContext from "@/appcontext";
import useTranslation from "./_translation/useTranslation";

export default function Home() {
  const { translate } = useTranslation();
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
        <div className="header">{translate("about_me")}</div>
        <div
          className="topic-inner-text margin-bottom"
          style={{ maxWidth: 400 }}
        >
          {translate("about_me_content")}
        </div>
        <div className="header">{translate("skills")}</div>
        <div className="topic-inner-text skills_inner">
          <ul>
            <li>Javascript</li>
            <li>Reactjs</li>
            <li>Css</li>
          </ul>
          <ul>
            <li>ReduxToolkit</li>
            <li>Nextjs</li>
            <li>Webpack</li>
          </ul>
        </div>
      </section>
      <section className={"main-section"}>
        <div className="header">{translate("past_experiences")}</div>
        <div className="past-experience">
          <div className="past-experience_item margin-bottom-2x">
            <div className="past-experience_item_icon_wrapper">
              <div className="past-experience_item_icon">
                <Image alt="likedin" src={"/chargoon.jpg"} fill />
              </div>
            </div>
            <div className="past-experience_item_detail">
              <div className="past-experience_item_detail_date">
                {translate("chargoon")} - {translate("2020")} /{" "}
                {translate("Present")}
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
							{translate("Yeganeh Soft")} - {translate("2018")} / {translate("2020")}
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
