import React from "react";
import project1 from "../images/demo1.PNG";
import project2 from "../images/demo.PNG";
import project3 from "../images/pythonDemo.png";
import headshot from "../pictures/valentine.jpg";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@material-ui/core";
import pdf from "./resumeFile.pdf";

export const projects = [
  {
    id: uuidv4(),
    image: project1,
    title: "Portfolio",
    description:
      "My resume and portfolio, which is the current web app you are on!",
    buttonOne: "Github",
<<<<<<< Updated upstream
    buttonTwo: "Home Page",
    gitLink: "https://github.com/jameskinda/resume-portfolio",
=======
    buttonTwo: false,
    gitLink: "https://github.com/jameskinda/resume-portfolio/tree/master",
>>>>>>> Stashed changes
    appLink: "https://jameskinda.github.io/resume-portfolio/",
    longDescription:
      "This front-end application is both mobile and desktop friendly. I developed the application using React.js and Material-UI. React Hooks is used to manage state and React Router DOM is used to implement routing. The react-particles-js library and the react-typed library are used for the homepage animations. In the GitHub repository there is an appData.js file, which is used to dynamically render the portfolio page. I developed input validation for the contact page. The validation requires all fields be filled and the provided email address be formatted correctly. Upon validation, the user’s message is sent to my personal email address using emailJS.",
    chips: [
      { skill: "React.js", id: uuidv4() },
      { skill: "Javascript", id: uuidv4() },
      { skill: "Material-Ui", id: uuidv4() },
      { skill: "HTML", id: uuidv4() },
      { skill: "CSS", id: uuidv4() },
      { skill: "react-particles-js", id: uuidv4() },
      { skill: "react-typed", id: uuidv4() },
      { skill: "React Router DOM", id: uuidv4() },
    ],
  },
  {
    id: uuidv4(),
    image: project2,
    title: "Sorted To Do List",
    description:
      "A front-end to-do application which allows one to create, update, delete, sort, and search tasks!",
    buttonOne: "Github",
    buttonTwo: "Live Demo",
    gitLink: "https://github.com/jameskinda/task-manager/tree/master",
    appLink: "https://jameskinda.github.io/task-manager/",
    longDescription:
      "This front-end application is both mobile and desktop friendly. I developed the application using React.js and Material-UI. React Hooks is used to manage state. With this application users can create, update, delete, sort, and search tasks. Users have the option to categorize each task by both location (Virtual or In-person) and type (Family, Friends, Work, etc.). Depending on the due date, each task is automatically labeled as either past due, under 24 hours, this week, or over 1 week. Additionally, tasks can be searched by category and sorted by due date. I developed input validation which requires all fields be filled to successfully submit a new task. All application data is stored in memory; therefore, created tasks will be erased on refresh.",
    chips: [
      { skill: "React.js", id: uuidv4() },
      { skill: "Javascript", id: uuidv4() },
      { skill: "Material-Ui", id: uuidv4() },
      { skill: "HTML", id: uuidv4() },
      { skill: "CSS", id: uuidv4() },
    ],
  },
  {
    id: uuidv4(),
    image: project3,
    title: "Python and SQL Projects",
    description:
      "Apps and scripts to analyze large data sets and automate finance and accouting processes!",
    longDescription:
      "Professionally, I have developed desktop applications and scripts for PwC clients (Fortune 500 companies).  For these projects I use Python and SQL to perform CRUD operations on SQL databases and clean, manipulate, and analyze large data sets. The key libraries I use for these projects are listed above.",
    chips: [
      { skill: "Python", id: uuidv4() },
      { skill: "Pandas", id: uuidv4() },
      { skill: "NumPy", id: uuidv4() },
      { skill: "Pyodbc", id: uuidv4() },
      { skill: "SQL", id: uuidv4() },
      { skill: "Tkinter", id: uuidv4() },
    ],
  },
];

const buildExpansion = () => {
  const cardExpansion = {};
  for (const project of Object.values(projects)) {
    cardExpansion[project.id] = false;
  }
  return cardExpansion;
};

export const cardExpansion = buildExpansion();

export const socialMediaLinks = {
  linkedIn: "https://www.linkedin.com/in/james-kinda-328479119/",
  gitHub: "https://github.com/jameskinda",
};

export const mainImage = headshot;

function resume_description() {
  return (
    <>
      <Typography>
        {
          "My name is James Kinda, I grew up in Napa Valley and graduated with honors from USC with a Bachelor of Science in Accounting. I currently work at PwC in Capital Markets and Accounting Advisory Services. In CMAAS I have developed a deep understanding of technical accounting. I have worked on complex accounting issues such as has revenue recognition, lease accounting, consolidations, business combinations, financial instruments, and IPOs. Additionally, I have passed all exams and completed all requirements for my CPA and am currently awaiting board approval."
        }
      </Typography>
      <br />
      <Typography>
        {
          "While I am passionate about the field of finance and accounting, I am also passionate about computer science. I am a self-taught software developer with experience in Python, JavaScript, HTML, and CSS. Additionally, I have completed courses on data structures, algorithms, and Big O notation."
        }
      </Typography>
      <br />
      <Typography>
        {
          "Due to my passion for computer science, I was one of eighteen chosen to participate in a 3.5-month self-lead PwC coding bootcamp during the beginning of 2020. The sole focus of this bootcamp was to develop document automation applications in Google Apps Script. Upon finishing the PwC Bootcamp, I have worked on many unique internal projects and initiatives at PwC related to the combination of computer science and financial services."
        }
      </Typography>
      <br />
      <Typography>
        {
          "In addition to internal PwC projects and initiatives, I have worked on external projects related to software development for PwC clients (Fortune 500 companies). For these projects I used Python and SQL to develop desktop applications and scripts to analyze large data sets and automate finance and accounting processes."
        }
      </Typography>
      <br />
      <Typography>
        {
          "In addition to my professional software development experience, I enjoy building React applications in my free time. Some of the React applications I have built can be found on the portfolio page."
        }
      </Typography>
      <br />
      <Typography>
        {
          "If you would like to learn more about my background, please click the “download” button below to view my resume. If you would like to contact me, please navigate to the contact page to send a message to my personal email."
        }
      </Typography>
    </>
  );
}

export const resume = {
  pdf: pdf,
  photo: headshot,
  description: resume_description,
};
