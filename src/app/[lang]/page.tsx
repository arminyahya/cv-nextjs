import "../app.css";

import { Metadata, Viewport } from "next";

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
type Experience = {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    company: "Flytoday (Travel Booking)",
    location: "Tehran",
    role: "Senior Frontend Engineer",
    dates: "12/2024 - 02/2026",
    bullets: [
      "Migrated 35 hard-coded pages to Strapi CMS, enabling the content team to make updates faster and more independently",
      "Simplified the travel card ordering process by implementing a mobile first UI based on 34 Figma frames",
      "Enhanced team collaboration by participating in code reviews in a team of 8 front-end developers",
      "Implemented a reusable Tour Guide component to onboard users to new features; adopted in 4 internal services",
      "Quickly became part of a cross-functional team by learning company-specific collaboration practices",
      "Built integration test infrastructure and wrote 600+ integration tests using Vitest, Testing Library, and Cursor",
    ],
  },
  {
    company: "Chargoon (ERP Solutions)",
    location: "Tehran",
    role: "Senior Frontend Engineer",
    dates: "04/2020 - 09/2024",
    bullets: [
      "Supported cross-team collaboration among 70+ engineers by documenting internal projects",
      "Developed a form designer and data modeler by building a customizable system, enabling two teams to independently create and manage forms",
      "Ensured performance and security across 4 projects by regularly updating dependencies based on CVE reports",
      "Selected as one of three hiring committee members and helped redesign the process to improve pass rates and candidate quality",
      "Led the migration to Redux Toolkit across 3 projects, improving state management by enabling safer mutations through reducers",
      "Boosted code reuse across 6 software teams by configuring Webpack to support shared components",
      "Collaborated with DevOps to create and troubleshoot CI/CD pipelines across 10+ repositories",
    ],
  },
  {
    company: "Yeganeh Soft",
    location: "Tehran",
    role: "Frontend Developer",
    dates: "04/2018 - 04/2020",
    bullets: [
      "Developed 2 enterprise-level web apps by translating UI/UX designs into functional interfaces",
      "Mentored two new developers by explaining project architecture and tools",
      "Implemented backend-aligned TypeScript models for 40+ endpoints to reduce integration bugs",
      "Engineered a shared UI component kit with 30+ components, ensuring visual and behavioral consistency across 20+ forms and pages",
    ],
  },
];

const skills = [
  {
    label: "Programming Languages",
    value: "JavaScript (ES6+), TypeScript",
  },
  {
    label: "Frameworks & Libraries",
    value:
      "React, Redux, Next.js, Webpack, NodeJS, TailwindCSS (for B2C), Material UI (for B2B)",
  },
  {
    label: "Testing",
    value: "Jest, React Testing Library",
  },
  {
    label: "Tools & Platforms",
    value:
      "Yarn, Git, AWS S3, Azure DevOps, REST API, Figma, Docker",
  },
  {
    label: "Development Practices",
    value:
      "Pair Programming, Responsive Design, Code Splitting, Agile",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section">
      <h2>{children}</h2>
    </div>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <article className="experience-item">
      <div className="experience-header">
        <div>
          <div className="company">{experience.company}</div>
          <div className="role">{experience.role}</div>
        </div>

        <div className="experience-meta">
          <div>{experience.location}</div>
          <div>{experience.dates}</div>
        </div>
      </div>

      <ul>
        {experience.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  return (
    <main className="resume">
      {/* Header */}
      <header className="header">
        <h1>ARMIN YAHYA</h1>
        <div className="title">Senior Frontend Engineer</div>

        <div className="contact">
          <span>+989128300415</span>
          <span>•</span>
          <a href="mailto:arminyahyaa@gmail.com">
            arminyahyaa@gmail.com
          </a>
          <span>•</span>
          <a
            href="https://github.com/arminyahya"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/arminyahya
          </a>
          <span>•</span>
          <span>Iran (willing to relocate to the Netherlands)</span>
        </div>

        <div className="contact second-line">
          <span>•</span>
          <a
            href="https://stackoverflow.com/users/9354934/armin-yahya"
            target="_blank"
            rel="noreferrer"
          >
            https://stackoverflow.com/users/9354934/armin-yahya
          </a>
        </div>
      </header>

      {/* Summary */}
      <section>
        <SectionTitle>Summary</SectionTitle>

        <p className="summary">
          Senior Frontend Engineer with 7 years of experience in React and
          TypeScript, specializing in large-scale and enterprise web
          applications.
          Contributed to a B2B platform used by over 2 million users and
          currently building a B2C platform for booking flights, hotels, and
          travel services.
          Known for solving complex UI challenges, enhancing developer
          experience (DX), and sharing knowledge through code reviews and
          internal documentation.
        </p>
      </section>

      {/* Skills */}
      <section>
        <SectionTitle>Skills</SectionTitle>

        <div className="skills">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.label}>
              <span className="skill-label">{skill.label}:</span>{" "}
              {skill.value}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <SectionTitle>Experience</SectionTitle>

        <div className="experience">
          {experiences.map((experience) => (
            <ExperienceItem
              key={`${experience.company}-${experience.dates}`}
              experience={experience}
            />
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionTitle>Education</SectionTitle>

        <div className="education">
          <div>
            <div className="university">
              Islamic Azad University-South Tehran Branch
            </div>
            <div className="degree">Bachelor's Degree</div>
          </div>

          <div className="education-date">10/2016 - 07/2021</div>
        </div>
      </section>

      {/* Open Source */}
      <section>
        <SectionTitle>Open Source Contributions</SectionTitle>

        <div className="open-source">
          <div>
            <a
              href="https://github.com/eslint/eslint"
              target="_blank"
              rel="noreferrer"
            >
              eslint
            </a>{" "}
            (Find and fix problems in your JavaScript code)
          </div>

          <div>
            <a
              href="https://github.com/typescript-eslint/typescript-eslint"
              target="_blank"
              rel="noreferrer"
            >
              typescript-eslint
            </a>{" "}
            (ESLint to support TypeScript)
          </div>

          <div>
            <a
              href="https://github.com/streamich/react-use"
              target="_blank"
              rel="noreferrer"
            >
              react-use
            </a>{" "}
            (Collection of essential React Hooks)
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;