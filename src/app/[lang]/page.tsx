import Image from "next/image";
import "../page.css";
import useTranslation from "@/translation/useTranslation";
import YeganehIcon from "@/Icons/yeganeh";
import ChargoonIcon from "@/Icons/chargoon";
import PersonalInfoItem from "@/components/personalInfoItem";
import { basePath } from "@/constant";
import PastExperienceItem from "@/components/pastExperienceItem";
import HeaderTypography from "@/components/headerTypography";
import { Metadata, Viewport } from "next";
import FlytodayIcon from "@/Icons/flytoday";

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
  const lang = params.lang;

  const { translate } = useTranslation(params.lang);
  return (
    <main className={`flex flex-col print:flex-row sm:flex-row print:gap-6`}>
      <section className={"flex-0 flex-b mb-5"}>
        <div
          className="mb-5 relative w-full h-56 print:w-52 md:w-56 print:hidden"
        >
          <Image
            alt="armin-yahya"
            src={`${basePath}/profile-image-4.jpg`}
            fill
            style={{ filter: 'var(--image-filter)' }}
            className="object-contain md:object-cover"
          />
        </div>
        <div className="full-name font-bold text-2xl">{translate("fullname")}</div>
        <div className="role text-xl mb-5">{translate("role")}</div>
        <div className="personal-info text-xl mb-6">
          <PersonalInfoItem label={translate("birthDate")} value={translate("birthDateValue")} />
          <PersonalInfoItem label={translate("location")} value={translate("tehran")} />
          <PersonalInfoItem label={translate("email")} value={translate("arminyahyaa@gmail.com")} />
          <PersonalInfoItem label={translate("Linkedin")} value={translate("linkedin.com/in/arminyahya")} />
          <PersonalInfoItem label={translate("Github")} value={translate("github.com/arminyahya")} />
        </div>
        <HeaderTypography text={translate("about_me")} />
        <div
          className="mb-5 animate-fadeIn-slow delay-300 text-base text-text-color-lighter"
          style={{ maxWidth: 400 }}
        >
          {translate("about_me_content")}
        </div>
        <div className={"mb-4 font-bold"}>{translate("skills")}</div>
        <div className="text-base text-text-color-lighter grid grid-cols-2 sm:flex-row mb-5">
          <ul className="m0 p-0">
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">JavaScript (ES6+)</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">TypeScript</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Reactjs</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">HTML5 / CSS3</li>
          </ul>
          <ul className="p-0">
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">ReduxToolkit</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Next.js</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Node.js</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Vite</li>
          </ul>
          <ul className="p-0">
          <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Git</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">TailwindCSS</li>
            <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Figma </li>
          </ul>
          <ul className="p-0">
          <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">Code Splitting</li>
          <li className="animate-fadeIn-fast list-none my-1 mb-1 opacity-0">React Testing Library</li>
          </ul>
        </div>
        <div className={"mb-4 font-bold"}>{translate("Education")}</div>
        <div
          className="mb-5 animate-fadeIn-slow delay-300 text-base text-text-color-lighter"
          style={{ maxWidth: 400 }}
        >
          {translate("education_content")}
        </div>
        <div className={"mb-4 font-bold"}>{translate("Languages")}</div>
        <div
          className="mb-5 animate-fadeIn-slow delay-300 text-base text-text-color-lighter"
          style={{ maxWidth: 400 }}
        >
          English (Fluent), Persian (Native)
        </div>
      </section>
      <section className={"flex-1 mb-5 print:flex-grow-[2]"}>
        <HeaderTypography text={translate("past_experiences")} />
        <div className="opacity-0 mb-5 animate-fadeIn-slow">
        <PastExperienceItem
            id="flytoday"
            icon={<FlytodayIcon />}
            companyName={translate("Flytoday")}
            startDate={translate("2024December")}
            role={translate("role")}
            companyTasks={[
              translate("flytodayCompanyTask1"),
              translate("flytodayCompanyTask2"),
              translate("flytodayCompanyTask3"),
              translate("flytodayCompanyTask4"),
            `Actively participated in code reviews, providing constructive feedback and ensuring code quality, maintainability, and adherence to best practices`,
          ]}
            items={[
              { type: 'image', src: "/flytoday-1.png", description: translate("gallery_flytoday_tour") },
            ]}
            className={"mb-10"}
            noDescription={true}
          />
          <PastExperienceItem
            id="chargoon"
            icon={<ChargoonIcon />}
            companyName={translate("chargoon")}
            startDate={translate("2020April")}
            endDate={translate("2024September")}
            role={translate("role")}
            companyTasks={[
          `Had the opportunity to work and communicate with a team of 70+ developers, fostering collaboration across multiple projects and teams`,  
             
              translate("chargoonCompanyTask1"),
              translate("chargoonCompanyTask2"),
              translate("chargoonCompanyTask3"),
              translate("chargoonCompanyTask4"),
              translate("chargoonCompanyTask5"),
              `Redesigned the technical hiring process, making it more developer-friendly and increasing the pass rate while ensuring better candidate quality. The improved test project reduced evaluation time by 50%, streamlining recruitment`,
              `Led the successful migration from the previous state management solution to Redux Toolkit, improving state handling and application performance`,
              `Mentored junior developers, encouraging collaboration and enhancing overall team productivity and efficiency`
             
              ,
            ]}
            items={[
              { type: 'image', src: "/chargoon-1.png", description: translate("gallery_chargoon_modeler") },
              { type: 'image', src: "/chargoon-2.png", description: translate("gallery_chargoon_designer") },
              { type: 'image', src: "/chargoon-3.png", description: translate("gallery_chargoon_designer_setting") },
              { type: 'image', src: "/chargoon-4.png", description: translate("gallery_chargoon_output") },
              { type: 'image', src: "/chargoon-5.png", description: translate("gallery_chargoon_designer_new_fields") },
              { type: 'image', src: "/chargoon-6.png", description: translate("gallery_chargoon_complex_validation_tab") },
              { type: 'image', src: "/chargoon-7.png", description: translate("gallery_chargoon_design_complex_validation") },
              { type: 'image', src: "/chargoon-8.png", description: translate("gallery_chargoon_design_operation_on_events") },
              { type: 'video', src: "/chargoon-9.mp4", description: translate("gallery_chargoon_output_video") },

            ]}
            className={"mb-20"}
          />
          <PastExperienceItem
            id="yeganeh_soft"
            icon={<YeganehIcon />}
            companyName={translate("yeganeh_soft")}
            startDate={translate("2018")}
            endDate={translate("2020March")}
            role={translate("role")}
            companyTasks={[
              translate("yeganehCompanyTask1"),
              translate("yeganehCompanyTask2"),
              translate("yeganehCompanyTask3")
            ]}
            items={[
              { type: 'image', src: "/yeganeh-1.jpg", description: translate("gallery_yeganeh_dabirkhone_orgchart") },
              { type: 'image', src: "/yeganeh-2.jpg", description: translate("gallery_yeganeh_dabirkhone_cartable") },
              { type: 'image', src: "/yeganeh-3.jpg", description: translate("gallery_yeganeh_dabirkhone_adduser") },
              { type: 'image', src: "/yeganeh-5.jpg", description: translate("gallery_yeganeh_edms_orgchart") },
              { type: 'image', src: "/yeganeh-6.jpg", description: translate("gallery_yeganeh_edms_documentgroup") },
            ]}
            className={"mb-10"}
            noDescription={true}
          />
        </div>
      </section>
    </main>
  );
}
