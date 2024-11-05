import Image from "next/image";
import "../page.css";
import useTranslation from "../_translation/useTranslation";
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
    <main className={`main`}>
      <section className={"main-section"}>
        <div className="profile-image_wrapper margin-bottom">
          <Image
            alt="armin-yahya"
            src={`${basePath}/profile-image-3.jpg`}
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
            <li className="skills_item">Tailwind CSS</li>
            <li className="skills_item">NodeJS</li>
            <li className="skills_item">Scrum</li>
            <li className="skills_item">Software Development</li>
          </ul>
          <ul>
            <li className="skills_item">Lerna</li>
          </ul>
        </div>
      </section>
      <section className={"main-section work-experiences"}>
        <HeaderTypography text={translate("past_experiences")} />
        <div className="past-experience fade-in-animation">
          <PastExperienceItem
            id="chargoon"
            icon={<ChargoonIcon />}
            companyName={translate("chargoon")}
            startDate={translate("2020April")}
            endDate={translate("2024September")}
            role={translate("role")}
            companyTasks={[
              translate("As an infrastructure team member, I participate in migrating to Redux Toolkit from MobX"),
              translate("I documented some projects on the knowledgebase to help other team members or company engineers"),
              translate("Designed a diagram environment using the GoJS library to create database schemas"),
              translate("Helped new Infrastructure team members get familiar with the codebase"),
              translate("Created a simple form generator for software that doesn’t need a complex form designer"),
              translate("As a member of the infrastructure team, I successfully resolved issues that were reported by other teams"),
              translate("I refactored LESS styles to utilize CSS variables for theming"),
              translate("I improved the performance of certain components (such as the tree) to handle large amounts of data more efficiently"),
              translate("I collaborated on migrating to the new major versions of packages such as React, TypeScript, Webpack, and others"),

            ]}
            items={[
              { type: 'image', src: "/chargoon-1.png" , description: translate("gallery_chargoon_modeler")},
              { type: 'image', src: "/chargoon-2.png" , description: translate("gallery_chargoon_designer")},
              { type: 'image', src: "/chargoon-3.png" , description: translate("gallery_chargoon_designer_setting")},
              { type: 'image', src: "/chargoon-4.png" , description: translate("gallery_chargoon_output")},
              { type: 'image', src: "/chargoon-5.png" , description: translate("gallery_chargoon_designer_new_fields")},
              { type: 'image', src: "/chargoon-6.png" , description: translate("gallery_chargoon_complex_validation_tab")},
              { type: 'image', src: "/chargoon-7.png" , description: translate("gallery_chargoon_design_complex_validation")},
              { type: 'image', src: "/chargoon-8.png" , description: translate("gallery_chargoon_design_operation_on_events")},
              { type: 'video', src: "/chargoon-9.mp4" , description: translate("gallery_chargoon_output_video")},

            ]}
            className={"margin-bottom-2x"}
          />
          <PastExperienceItem
            id="yeganeh_soft"
            icon={<YeganehIcon />}
            companyName={translate("yeganeh_soft")}
            startDate={translate("2018")}
            endDate={translate("2020March")}
            role={translate("role")}
            companyTasks={[
              translate("I familiarized myself with the Ant Design framework"),
              translate("Collaborated closely with a UI designer as a frontend developer"),
              translate("Participated in creating both a Document Manager and EDMS Software, both of which are web-based"),
            ]}
            items={[
              { type: 'image', src: "/yeganeh-1.jpg", description: translate("gallery_yeganeh_dabirkhone_orgchart") },
              { type: 'image', src: "/yeganeh-2.jpg", description: translate("gallery_yeganeh_dabirkhone_cartable") },
              { type: 'image', src: "/yeganeh-3.jpg", description: translate("gallery_yeganeh_dabirkhone_adduser") },
              { type: 'image', src: "/yeganeh-5.jpg", description: translate("gallery_yeganeh_edms_orgchart") },
              { type: 'image', src: "/yeganeh-6.jpg", description: translate("gallery_yeganeh_edms_documentgroup") },
            ]}
            className={"margin-bottom-2x"}
            noDescription={true}
          />
        </div>
      </section>
    </main>
  );
}
