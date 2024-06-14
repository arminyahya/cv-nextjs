import Image from "next/image";
import "../page.css";
import { useContext, useState } from "react";
import { darkThemeColors, lightThemeColors } from "../constant";
import LinkedinIcon from "@/Icons/linkedin-icon";
import GmailIcon from "@/Icons/gmail-icon";
import useTranslation from "../_translation/useTranslation";
import AppContext from "@/appContext";
import GalleryButton from "../_components/galleryButton";
import YeganehIcon from "@/Icons/yeganeh";
import ChargoonIcon from "@/Icons/chargoon";
import PersonalInfoItem from "../_components/personalInfoItem";
import { basePath } from "../constant";
import PastExperienceItem from "../_components/pastExperienceItem";
import HeaderTypography from "../_components/headerTypography";
import { Metadata, Viewport } from "next";

type PageInnerProps = {
  params: { lang: "fa" | "en" };
};

export const metadata: Metadata = {
  title: 'Armin Yahya Resume',
  description: `Discover Armin Yahya's professional background, skills, and accomplishments in their online resume. Get a glimpse of their qualifications and experience in Frontend`,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export function generateStaticParams() {
  return [
    { lang: 'fa' },
    { lang: 'en' },
  ]
}
export default function Page({ params }: PageInnerProps) {
  const { translate } = useTranslation(params.lang);
  return (
    <main className={"main theme--light"}>
      <section className={"main-section"}>
        <div className="profile-image_wrapper margin-bottom">
          <Image
            alt="armin-yahya"
            src={`${basePath}/profile-image.jpg`}
            fill
            objectPosition="50% 50%"
            objectFit="contain"
          />
        </div>
        <div className="full-name">{translate("fullname")}</div>
        <div className="role">{translate("role")}</div>
        <div className="personal-info">
          <PersonalInfoItem label={translate("birthDate")} value={translate("birthDateValue")} />
          <PersonalInfoItem label={translate("location")} value={translate("tehran")} />
          <PersonalInfoItem label={translate("militaryService")} value={translate("finished")} />
          <PersonalInfoItem label={translate("email")} value={translate("arminyahyaa@gmail.com")} />
        </div>
        <HeaderTypography text={translate("about_me")} />
        <div
          className="topic-inner-text margin-bottom about-me"
          style={{ maxWidth: 400 }}
        >
          {translate("about_me_content")}
        </div>
				<div className={"header"}>{translate("skills")}</div>
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
        <HeaderTypography text={translate("past_experiences")} />
        <div className="past-experience fade-in-animation">
          <PastExperienceItem
            icon={<ChargoonIcon />}
            companyName={translate("chargoon")}
            startDate={translate("2020April")}
            endDate={translate("present")}
            role={translate("role")}
            summary={translate("chargoon_work_description")}
            images={[
              "/chargoon-1.jpg",
              "/chargoon-2.jpg",
              "/chargoon-3.jpg",
              "/chargoon-4.jpg",
              "/chargoon-5.jpg",
              "/chargoon-6.jpg",
            ]}
            className={"margin-bottom-2x"}
          />
          <PastExperienceItem
            icon={<YeganehIcon />}
            companyName={translate("yeganeh_soft")}
            startDate={translate("2018")}
            endDate={translate("2020March")}
            role={translate("role")}
            summary={translate("yeganeh_soft_description")}
            images={[
              "/yeganeh-1.jpg",
              "/yeganeh-2.jpg",
              "/yeganeh-3.jpg",
              "/yeganeh-4.jpg",
              "/yeganeh-5.jpg",
              "/yeganeh-6.jpg",
            ]}
            className={"margin-bottom-2x"}
          />
        </div>
      </section>
    </main>
  );
}
