export type dictionary = {[key: string]: string};

const EN_Dictionary: dictionary = {
	fullname: 'Armin Yahya',
	role: 'Frontend Developer',
	about_me: 'About me',
	about_me_content: `I was fortunate to be able to work with experienced individuals from the beginning and learn from them. I am responsible and good at debugging.`,
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
	gallery_chargoon_modeler: `Description regarding the advanced form builder:
We want to design a form inside the program. This form is related to the students of a school. The first step in designing our form will be to create an information model because we need to store information related to the student, class, and academic background in one place. The tables and relationships you see on the screen are implemented using the GoJS library.`,
	gallery_chargoon_designer: `This page, which is called the form design page, is where the layout of the form and which fields are mandatory are set. You can also select different widgets for displaying or editing a field.`,
	gallery_chargoon_designer_setting: `This image shows part of the settings for a field.`,
	gallery_chargoon_output: `The form we designed in the previous images will ultimately be displayed like this.`,
	gallery_chargoon_designer_new_fields: `This form has two interesting features that I want to explain to you. The first is complex validation capability. With this feature, you can validate the value of one field based on the value of another field.
The second feature is event-driven actions. With this feature, you can make another field mandatory based on the value of one field. To demonstrate this feature, I added four fields: educational grade, sports field, research topic, and research group mate to the student information model. Let’s suppose the school wants to set the condition that first-grade students can only participate in low-risk sports like athletics.`,
	gallery_chargoon_complex_validation_tab: `We go to the validation tab. Here, I have already created the validation that I just explained.`,
	gallery_chargoon_design_complex_validation: `Here, I created a condition. I wrote that if the educational grade equals first grade and the field of study is anything other than athletics, show the message “Only athletics is allowed for first graders” to the data entry user. Please wait until the last video to see the output.`,
	gallery_chargoon_design_operation_on_events: `So far, I have explained complex validation. Now, we will address event-driven actions and the two fields: research topic and research group mate. Suppose you want to have the control on your form that if a research topic is specified, the research group mate must also be filled. However, if the research topic is not filled or the student has not yet selected a research topic, we can leave the two fields empty. In this image, I used the condition builder to write that if the value of the research topic changes, then make the research group mate field mandatory.`,
	gallery_chargoon_output_video: `This is the output of our form being filled by the user. Pay attention to the video; if the student is a first-grader and selects the football field, a message will be displayed. Also, if they fill in the research topic, the research group mate field will immediately become mandatory.`,
	next: `Next`,
  	previous: `Previous`,
	loading:'Loading'
};

export default EN_Dictionary;