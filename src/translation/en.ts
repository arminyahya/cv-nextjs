export type dictionary = {[key: string]: string};

const EN_Dictionary: dictionary = {
	fullname: 'Armin Yahya',
	role: 'Senior Frontend Developer',
	about_me: 'About me',
	about_me_content: `Senior Frontend Engineer with 7 years of experience in React and TypeScript, specializing in large-scale and enterprise web applications.
I love learning and sharing knowledge. Working as part of a team, collaborating with other frontend engineers and contributing to decisions is what excites me. I also enjoy building tools and automating processes to make development faster and smoother.`,
			skills: 'Skills',
	past_experiences: 'Past experience',
	chargoon: 'Chargoon',
	'2020April': '2020 April',
	'2020March': '2020 March',
	present: 'Present',
	chargoon_work_description: `Chagoon is a software company that specializes in developing enterprise software solutions for organizations. I began my career with the infrastructure team, where I was responsible for developing code that could be utilized across various software applications. This included creating UI frameworks and projects that could be developed without requiring a deep understanding of specific business operations. The frontend stack utilized at the company is ReactJS-Typescript. Some of my key projects included breaking down the UI framework codebase into smaller, more manageable packages, designing a diagram environment using the GoJS library to create database schemas, developing a feature-rich form builder, and migrating to Redux Toolkit from our old state management`,
	yeganeh_soft: 'Yeganeh Soft',
	'2018': '2018',
	yeganeh_soft_description: `Yeganeh Company was where I gained my initial work experience, focusing on the development of Electronic Document Management Systems (EDMS) and web-based document management solutions. The frontend technology stack utilized by the team was ReactJS-Typescript, which introduced me to TypeScript for the first time. Task management was handled through Trello, and we utilized the AntDesign framework for developing our web pages. In cases where ready-made components were not available, we developed custom components. My time at Yeganeh also marked my introduction to User Experience (UX) concepts, as we collaborated with a UX expert to ensure that our page designs prioritized user experience`,
	see_gallery: 'See gallery',
	birthDate: 'BirthDate',
	location: 'Location',
	militaryService: 'MilitaryService',
	birthDateValue: '1998-9-4',
	tehran: 'Tehran',
	finished: 'Finished',
	email: 'Email',
	'2024September': "2024 September",
	gallery_chargoon_modeler: `We want to design a form inside the program. This form is for entering information about students at a school. The first step in designing our form is to create an information model since we need to store information related to the students, classes, and academic history. The tables and relationships you see on the page are implemented using the gojs library.`,
	gallery_chargoon_designer: `This page, called “Form Design,” is where the layout of the form and which fields are mandatory is configured. You can also choose different widgets to display or edit the fields.`,
	gallery_chargoon_designer_setting: `This image shows part of the settings for a field.`,
	gallery_chargoon_output: `In this image, you can see the form we designed in the previous slides.`,
	gallery_chargoon_designer_new_fields: `This form has two interesting features that I want to explain to you. The first is complex validation. With this capability, you can validate the value of one field based on the value of another field. The second capability is event handling. With this feature, you can make another field required based on the value of one field. To demonstrate this capability, I added four fields: educational level, sports major, research topic, and research group to the student information model. Let’s assume the school wants to set a condition for its students that first graders can only participate in low-risk fields, such as athletics.`,
	gallery_chargoon_complex_validation_tab: `We go to the validation tab. Here I have created the validation I just described.`,
	gallery_chargoon_design_complex_validation: `Here, I created a condition. I wrote that if the educational level is equal to first grade, and the academic major is anything other than athletics, display the message “Only athletics is allowed for first graders” to the data entry user. To see the output, wait until the last video.`,
	gallery_chargoon_design_operation_on_events: `Now, let’s move to event handling and the two fields of research topic and research group. Suppose you want to control your form in such a way that if the research topic is specified, then the research group must also be filled in. However, if the research topic is not filled out or the student has not yet selected a research topic, we can leave the two fields empty. In this image, using the condition builder tool, I created the condition that if the value of the research topic changes, go and make the research group field required.`,
	gallery_chargoon_output_video: `This is the output of our form, which is being filled out by the user. Pay attention to the video: if the student is a first grader and chooses football as their major, they will receive a message, and also, if they fill in the research topic, the research group field becomes mandatory immediately.`,
	next: `Next`,
  	previous: `Previous`,
	loading:'Loading',
	gallery_yeganeh_dabirkhone_orgchart: `In this image, you can see the organizational positions displayed in a nested menu style. Each position may have sub-positions. As you can see, when the user clicks on the production manager, the sub-positions, meaning the programmers, are displayed in the next column.`,
    gallery_yeganeh_dabirkhone_cartable: `This page shows the user’s received letters. The categorization of letters in the user’s inbox is done using colors next to the cards. On this page, the user can search or filter through the letters. Pay attention to the date at the top of the cards. A user may receive several letters throughout the day. The user’s letters are grouped by day to make it easier for the user to find them.`,
    gallery_yeganeh_dabirkhone_adduser: `This modal is for adding a user to the application. As you can see, this modal has a specific UI designed by the UI/UX team.`,
    gallery_yeganeh_old_dabirkhone_add_letter: `This is the form related to adding a letter, which has been implemented using the Ant Design library. This application was the initial version of the unique company’s secretariat, which was later replaced with a new design.`,
    gallery_yeganeh_edms_orgchart: `This image relates to the display of organizational positions in the document management software.`,
    gallery_yeganeh_edms_documentgroup: `This is the data entry form for one of the entities in the document software.`,
	now: 'Now',
	'2024December': '2024 December',
	flytodayCompanyTask1: "Contributed to the development and optimization of a Next.js project, ensuring high scalability and maintainability.",
	flytodayCompanyTask2: "Designed and implemented a responsive, accessible, and SEO-friendly UI for online travel card orders",
	flytodayCompanyTask3: "Enhanced application performance by reducing bundle size, optimizing rendering, and implementing lazy loading",
	flytodayCompanyTask4: "Collaborated with backend developers to integrate RESTful APIs and enhance data fetching efficiency",
	gallery_flytoday_tour: "This is the Tour component I developed. It can adjust its position from the bottom to other areas if there is no available space below. Additionally, you can apply different styles to each step.",
	chargoonCompanyTask1: "Contributed technical articles to a knowledge base system, supporting collaboration among engineers",
	chargoonCompanyTask2: `Created a dynamic diagram environment using GoJS for visualizing database schemas.`,
	chargoonCompanyTask3: `Built an efficient form generator to streamline UI development for non-complex applications.`,
	chargoonCompanyTask4: "Optimized performance of complex components like tree structures to handle large datasets efficiently.",
	chargoonCompanyTask5: `Worked on the migration of frontend projects to the latest versions of React, TypeScript, and Webpack, ensuring compatibility and performance improvements.`,
	yeganehCompanyTask1: "Developed web-based document management systems (EDMS) with a focus on intuitive UI/UX",
	yeganehCompanyTask2: "Used Ant Design framework to create well-structured, reusable UI components.",
	yeganehCompanyTask3: "Collaborated closely with UI/UX designers to transform design concepts into enterprise-level web applications.",
	education_content: "Bachelor’s Degree – Islamic Azad University-South Tehran Branch"
};

export default EN_Dictionary;