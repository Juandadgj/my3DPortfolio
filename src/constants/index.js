import {
  react,
  designer,
  website,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  boot,
  nodejs,
  mysql,
  git,
  figma,
  dosan,
  edsoft,
  apolonia,
  carrent,
  jobit,
  tripguide,
  threejs,
  graph,
  gmail,
  link,
  github,
  express,
  landian,
  net,
  expresso,
  mongo,
  next,
  tailwind,
  socialHub,
  landianLogo
} from "../assets";

const contacMe = [
  {
    name: "email",
    red: gmail,
    content: "ssaidsal08@gmail.com",
    link: false,
  },
  {
    name: "linkdin",   
    red: link,
    content: "https://www.linkedin.com/in/said-elias-salcedo-cupitra-066827268/",
    link: true,
  },
  {
    name: "git",
    red: github,
    content: "https://github.com/said-08",
    link: true,
  },
]

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: website,
  },
  {
    title: "Frontend Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: express,
  },
  {
    title: "Good Designer",
    icon: designer,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: boot,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expresso,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "GraphQL",
    icon: graph,
  },
];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Landian",
    icon: landian,
    iconBg: "#2c5757",
    date: "2023",
    points: [
      "We developed a web application, which was a social network of a metaverse. We manage to do it with technologies like Next.js, Tailwind, Apollo, Nest.js",
      "The application managed to have several typical functionalities of a social network, where users could have their communities on specific topics, search for your friends, communicate in any way, achieving a great user experience.",
      "This was my first business project, where they gave me the confidence to develop the software in the best way. It was a great experience.",
      "We were able to advance by working with agile methodologies, such as scrum, and using task assignment tools such as Nifty.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "EdSoft",
    icon: edsoft,
    iconBg: "#2c5757",
    date: "Dec 2022 - current",
    points: [
      "Developing a web application using Next.js, ApolloClient and Tailwind on the front-end side. Talking about back-end, We are working with Nest.js, GraphQL and Prisma.",
      "It's a important project, because it's the data management platform for schools in Sucre, Colombia; like school enrollment, students by group, grades, all types of achievements, class attendance, etc. The idea is to keep growing and reach more schools",
      "Using agile methodologies such as SCRUM that helped us to have a more constant progress.",
      "I have worked in several functions on this project, whether on the front or back. However, there are always things to learn, making the product better.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Magaya",
    icon: dosan,
    iconBg: "#2c5757",
    date: "May 2022 - Oct 2022",
    points: [
      "Developing this web application using React.js and other related technologies like Redux or Bootstrap. This app managed various company data, such as customers, products, all kinds of statistics",
      "Collaborating with a great team, making the App development more pleasant.",
      "Using agile methodologies such as SCRUM that helped us to have a more constant progress.",
      "Implementing responsive design to get a better reach.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Apolonia",
    icon: apolonia,
    iconBg: "#2c5757",
    date: "Oct 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies Like Bootstrap.",
      "Project which manages several data from a large dental office.",
      "Implementing responsive design to get a better reach.",
    ],
  },
];

const projects = [
  {
    name: "Landian",
    description:
      "Webapp made for the purpose of relating people as a social network, for a metaverse that the company was creating. Good user experience, making it search for friends, create communities, groups, chat, etc.",
    tags: [
      {
        name: "next",
        color: "white-text-gradient",
      },
      {
        name: "apollo",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: socialHub,
    imgLogo: landianLogo,
  },
  {
    name: "EdSoft",
    description:
      "Web-based platform that allows the student of the affiliated school in Sucre, Colombia to see their grades, peers, teachers, their group, the different institutions, etc..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "apolloClient",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    imgLogo: edsoft,
  },
  {
    name: "Magaya",
    description:
      "A comprehensive web software that managed statistics from several companies with their sales by place and by time, their clients, their investments and how much they spent, and all kinds of services they provided.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    imgLogo: dosan,
  },
  {
    name: "Apolonia",
    description:
      "Web application that allows the management of data from dentists such as their clients, their schedules, the services they sold, medical records, their information, invoices, etc.",
    tags: [
      {
        name: "angular",
        color: "orange-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    imgLogo: apolonia,
  },
];

export { services, technologies, experiences, projects, contacMe };