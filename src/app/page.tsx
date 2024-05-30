"use client";
import Image from "next/image";
import "./page.css";
import { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "./constant";
import LinkedinIcon from "@/Icons/linkedin-icon";
import GmailIcon from "@/Icons/gmail-icon";
import useTranslation from "./_translation/useTranslation";
import AppContext from "@/appContext";
import GalleryButton from "./_components/galleryButton";
import YeganehIcon from "@/Icons/yeganeh";
import ChargoonIcon from "@/Icons/chargoon";
import PersonalInfoItem from "./_components/personalInfoItem";

export default function Home() {
  const { translate, currentLanguage } = useTranslation();
  const slideClassName =
    currentLanguage === "en" ? "slide-from-left" : "slide-from-right";
  return (
    <main className={"main"}>
      <section className={"main-section"}>
        <div className="profile-image_wrapper margin-bottom">
          <Image
            alt="armin-yahya"
            src={"/profile-image.jpg"}
            fill
            objectPosition="50% 50%"
            objectFit="cover"
          />
        </div>
        <div className="full-name">{translate("fullname")}</div>
        <div className="role">{translate("role")}</div>
        <div className="personal-info">
          <PersonalInfoItem
            label={translate("birthDate")}
            value={translate("birthDateValue")}
          />
          <PersonalInfoItem
            label={translate("location")}
            value={translate("tehran")}
          />
          <PersonalInfoItem
            label={translate("militaryService")}
            value={translate("finished")}
          />
          <PersonalInfoItem
            label={translate("email")}
            value={"arminyahyaa@gmail.com"}
          />
        </div>
        <div className={"header " + slideClassName}>
          {translate("about_me")}
        </div>
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
            <li className="skills_item">Typescript</li>
            <li className="skills_item">Reactjs</li>
            <li className="skills_item">HTML / CSS</li>
          </ul>
          <ul>
            <li className="skills_item">ReduxToolkit</li>
            <li className="skills_item">Next.js</li>
            <li className="skills_item">Webpack</li>
            <li className="skills_item">Git</li>
          </ul>
          <ul>
            <li className="skills_item">Sass</li>
            <li className="skills_item">NodeJS</li>
            <li className="skills_item">Scrum</li>
            <li className="skills_item">Software Development</li>
          </ul>
        </div>
      </section>
      <section className={"main-section "}>
        <div className={"header " + slideClassName}>
          {translate("past_experiences")}
        </div>
        <div className="past-experience fade-in-animation">
          <div className="past-experience_item margin-bottom-2x">
            <div className="past-experience_item_icon_wrapper">
              <div className="past-experience_item_icon">
                <ChargoonIcon />
              </div>
            </div>
            <div className="past-experience_item_detail">
              <div className="past-experience_item_detail_date">
                {translate("chargoon")} - {translate("2020")} /{" "}
                {translate("present")}
              </div>
              <div className="past-experience_item_detail_role">
                {translate("role")}
              </div>
              <div className="past-experience_item_detail_activity">
                {translate("chargoon_work_description")}
                <GalleryButton
                  images={[
                    "/chargoon-1.jpg",
                    "/chargoon-2.jpg",
                    "/chargoon-3.jpg",
                    "/chargoon-4.jpg",
                    "/chargoon-5.jpg",
                    "/chargoon-6.jpg",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="past-experience_item">
            <div className="past-experience_item_icon_wrapper">
              <div className="past-experience_item_icon">
                <YeganehIcon />
              </div>
            </div>
            <div className="past-experience_item_detail">
              <div className="past-experience_item_detail_date">
                {translate("yeganeh_soft")} - {translate("2018")} /{" "}
                {translate("2020")}
              </div>
              <div className="past-experience_item_detail_role">
                {translate("role")}
              </div>
              <div className="past-experience_item_detail_activity">
                {translate("yeganeh_soft_description")}
                <GalleryButton
                  images={[
                    "/yeganeh-1.jpg",
                    "/yeganeh-2.jpg",
                    "/yeganeh-3.jpg",
                    "/yeganeh-4.jpg",
                    "/yeganeh-5.jpg",
                    "/yeganeh-6.jpg",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
