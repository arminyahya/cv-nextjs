"use client"
import Image from "next/image";
import "./page.css";
import { useState } from "react";
import { darkThemeColors, lightThemeColors } from "./constant";
import LinkedinIcon from "@/Icons/linkedin-icon";
import GmailIcon from "@/Icons/gmail-icon";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light'); 
  const switchTheme = () => {
   const targetThemeVariables = currentTheme === 'light' ? darkThemeColors : lightThemeColors;
   for(let variableName in targetThemeVariables) {
    console.log(targetThemeVariables)
    // @ts-ignore
    document.documentElement.style.setProperty(variableName, targetThemeVariables[variableName]);
   }
   setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <main className={"main"}>
      <div onClick={switchTheme}>Switch Theme</div>
      <section className={"main-section"}>
        <div className="profile-image_wrapper margin-bottom">
          <Image alt="armin-yahya" src={"/profile-image.jpg"} fill />
        </div>
        <div className="full-name">Armin Yahya</div>
        <div className="role">Frontend Developer</div>
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
        <div className="header">About me</div>
        <div
          className="topic-inner-text margin-bottom"
          style={{ maxWidth: 400 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="header">Skills</div>
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
        <div className="header">Past experience</div>
        <div className="past-experience">
          <div className="past-experience_item margin-bottom-2x">
            <div className="past-experience_item_icon_wrapper">
              <div className="past-experience_item_icon">
              <Image alt="likedin" src={"/chargoon.jpg"} fill />
							</div>
            </div>
						<div className="past-experience_item_detail">
            <div className="past-experience_item_detail_date">
              Chargoon - 2020 / Present
            </div>
            <div className="past-experience_item_detail_role">
              Frontend Developer
            </div>
            <div className="past-experience_item_detail_activity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam nulla facilisi cras fermentum odio eu feugiat. Nisi lacus
              sed viverra tellus. Lectus proin nibh nisl condimentum id
              venenatis a condimentum vitae. Leo in vitae turpis massa sed
              elementum. Quis hendrerit dolor magna eget est lorem ipsum. In
              cursus turpis massa tincidunt dui. Dolor sit amet consectetur
              adipiscing elit. At elementum eu facilisis sed odio morbi. Nulla
              pellentesque dignissim enim sit amet venenatis urna cursus eget.
              Id porta nibh venenatis cras sed felis. Aliquam purus sit amet
              luctus venenatis lectus magna fringilla urna. Rutrum tellus
              pellentesque eu tincidunt. Aliquet bibendum enim facilisis gravida
              neque convallis a cras semper. Eget magna fermentum iaculis eu non
              diam phasellus vestibulum. Rutrum quisque non tellus orci ac
              auctor augue mauris. Cursus sit amet dictum sit. Ac auctor augue
              mauris augue neque gravida in fermentum. Justo donec enim diam
              vulputate ut. Tristique senectus et netus et malesuada fames ac
              turpis. In est ante in nibh. Arcu dictum varius duis at
              consectetur lorem. Blandit turpis cursus in hac habitasse platea
              dictumst. Diam sit amet nisl suscipit adipiscing bibendum est
              ultricies. Bibendum at varius vel pharetra vel turpis nunc. Sit
              amet luctus venenatis lectus magna fringilla. Quam adipiscing
              vitae proin sagittis nisl. Euismod lacinia at quis risus sed
              vulputate odio ut enim. Quisque non tellus orci ac auctor.
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
              Yeganeh Soft - 2018 / 2020
            </div>
            <div className="past-experience_item_detail_role">
              Frontend Developer
            </div>
            <div className="past-experience_item_detail_activity">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam nulla facilisi cras fermentum odio eu feugiat. Nisi lacus
              sed viverra tellus. Lectus proin nibh nisl condimentum id
              venenatis a condimentum vitae. Leo in vitae turpis massa sed
              elementum. Quis hendrerit dolor magna eget est lorem ipsum. In
              cursus turpis massa tincidunt dui. Dolor sit amet consectetur
              adipiscing elit. At elementum eu facilisis sed odio morbi. Nulla
              pellentesque dignissim enim sit amet venenatis urna cursus eget.
              Id porta nibh venenatis cras sed felis. Aliquam purus sit amet
              luctus venenatis lectus magna fringilla urna. Rutrum tellus
              pellentesque eu tincidunt. Aliquet bibendum enim facilisis gravida
              neque convallis a cras semper. Eget magna fermentum iaculis eu non
              diam phasellus vestibulum. Rutrum quisque non tellus orci ac
              auctor augue mauris. Cursus sit amet dictum sit. Ac auctor augue
              mauris augue neque gravida in fermentum. Justo donec enim diam
              vulputate ut. Tristique senectus et netus et malesuada fames ac
              turpis. In est ante in nibh. Arcu dictum varius duis at
              consectetur lorem. Blandit turpis cursus in hac habitasse platea
              dictumst. Diam sit amet nisl suscipit adipiscing bibendum est
              ultricies. Bibendum at varius vel pharetra vel turpis nunc. Sit
              amet luctus venenatis lectus magna fringilla. Quam adipiscing
              vitae proin sagittis nisl. Euismod lacinia at quis risus sed
              vulputate odio ut enim. Quisque non tellus orci ac auctor.
            </div>
						</div>
          </div>
        </div>
      </section>
    </main>
  );
}
