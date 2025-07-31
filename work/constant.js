// Skills Section Logo's
import htmlLogo from '../src/assets/tech_logo/html.png';
import cssLogo from '../src/assets/tech_logo/css.png';
import sassLogo from '../src/assets/tech_logo/sass.png';
import javascriptLogo from '../src/assets/tech_logo/javascript.png';
import reactjsLogo from '../src/assets/tech_logo/reactjs.png';

import reduxLogo from '../src/assets/tech_logo/redux.png';

import tailwindcssLogo from '../src/assets/tech_logo/tailwindcss.png';

import materialuiLogo from '../src/assets/tech_logo/materialui.png';
import bootstrapLogo from '../src/assets/tech_logo/bootstrap.png';
import springbootLogo from '../src/assets/tech_logo/springboot.png';
import nodejsLogo from '../src/assets/tech_logo/nodejs.png';
import expressjsLogo from '../src/assets/tech_logo/express.png';
import mysqlLogo from '../src/assets/tech_logo/mysql.png';
import mongodbLogo from '../src/assets/tech_logo/mongodb.png';
import firebaseLogo from '../src/assets/tech_logo/firebase.png';
import cLogo from '../src/assets/tech_logo/c.png';
import cppLogo from '../src/assets/tech_logo/cpp.png';
import javaLogo from '../src/assets/tech_logo/java.png';
import pythonLogo from '../src/assets/tech_logo/python.png';
import gitLogo from '../src/assets/tech_logo/git.png';
import githubLogo from '../src/assets/tech_logo/github.png';
import vscodeLogo from '../src/assets/tech_logo/vscode.png';
import postmanLogo from '../src/assets/tech_logo/postman.png';

import figmaLogo from '../src/assets/tech_logo/figma.png';
import netlifyLogo from '../src/assets/tech_logo/netlify.png';
import vercelLogo from '../src/assets/tech_logo/vercel1.png';
import postgreLogo from '../src/assets/tech_logo/postgre.png';
import n8nLogo from '../src/assets/tech_logo/n8n.png';
import dockerLogo from '../src/assets/tech_logo/docker.png';
import awsLogo from '../src/assets/tech_logo/aws1.png';
import phpLogo from '../src/assets/tech_logo/php.png';


// Experience Section Logo's
import webverseLogo from '../src/assets/company_logo/webverse_logo.png';
import agcLogo from '../src/assets/company_logo/agc_logo.png';
import newtonschoolLogo from '../src/assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from '../src/assets/education_logo/gla_logo.png';
import bsaLogo from '../src/assets/education_logo/bsa_logo.png';
import vpsLogo from '../src/assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from '../src/assets/work_logo/github_det.png';
import csprepLogo from '../src/assets/work_logo/cs_prep.png';
import movierecLogo from '../src/assets/work_logo/movie_rec.png';
import taskremLogo from '../src/assets/work_logo/task_rem.png';
import npmLogo from '../src/assets/work_logo/npm.png';
import webverLogo from '../src/assets/work_logo/web_dig.png';
import cmLogo from '../src/assets/work_logo/cm.png';
import imagesearchLogo from '../src/assets/work_logo/image_search.png';
import removebgLogo from '../src/assets/work_logo/remove_bg.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind', logo: tailwindcssLogo },
     
      { name: 'Material', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'NodeJS', logo: nodejsLogo },
      { name: 'ExpressJS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
       { name: 'N8N', logo: n8nLogo },
        { name: 'Docker', logo: dockerLogo },
         { name: 'AWS', logo: awsLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: '/finsy.png', // Replace with the actual logo path
    role: "Backend Developer",
    company: "Finsy",
    date: "August 2024 - October 2024",
    desc: "Developed core backend logic for a finance platform using Django, supporting secure transactions for 1000+ users and handling up to $0.1 million in daily transactions. Led UI/UX design with React, built RESTful APIs, optimized database architecture, and implemented advanced security protocols, resulting in zero data breaches and a 30% improvement in response time.",
    skills: [
      "Django",
      "React",
      "REST APIs",
      "MongoDB",
      "SQL",
      "JavaScript",
      "Security",
    ],
  },
  {
    id: 1,
    img: '/polestar.png',
    role: "Data Analyst",
    company: "Polestar analytics",
    date: "September 2025 - present",
    desc: "Contributed to innovative projects as a Data Analyst, leveraging data-driven insights to inform business decisions and optimize processes. Collaborated with cross-functional teams to gather requirements, analyze data trends, and present findings using visualization tools.",
    skills: [
      "Python",
      "Data Analysis",
      "SQL",
      "Python",
      "Data Visualization",
      "SQL",
      "Machine Learning",
      "Statistical Analysis",
      "Power Bi"
    ],
  },
  
];

  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  