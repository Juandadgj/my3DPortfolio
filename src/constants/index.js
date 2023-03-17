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
  github
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
    content: "said-08",
    link: false,
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
    title: "React.js Developer",
    icon: react,
  },
  // {
  //   title: "React.js Developer",
  //   icon: backend,
  // },
  {
    title: "Good Designer",
    icon: designer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: boot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
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
    title: "React.js Developer",
    company_name: "EdSoft",
    icon: edsoft,
    iconBg: "#2c5757",
    date: "Dec 2022 - current",
    points: [
      "Developing web application using React.js, ApolloClient and Bootstrap on the front-end side. And on the back-end side, We are working with Fastify, GraphQL and Prisma.",
      "This project seems important to me, because it's the data management platform for schools in Sucre. The idea is to keep growing and reach more people",
      "Using agile methodologies such as SCRUM that helped us to have a more constant progress.",
      "In this project I usually work more on the front-end side, however, I like to venture into things that are out of my comfort zone, such as the back-end.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Magaya",
    icon: dosan,
    iconBg: "#2c5757",
    date: "May 2022 - Oct 2022",
    points: [
      "Developing this web applications using React.js and other related technologies like Redux or Bootstrap.",
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