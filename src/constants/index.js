import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  aveneur,
  upwork,
  cerulean,
  tecbix,
  miniecom,
  petopia,
  threejs,
  insidemaps,
} from "../assets";

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
    icon: web,
  },
  {
    title: "Ui/Ux Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
];

const experiences = [
  {
    title: "Freelance Web Developer | 3D Web developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Present",
    points: [
      "With over 10 clients and 5 star reviews, most of my projects included 3d frontend interactions achieved using three js. Two of my interesting projects are as follows:",
      "AR incorporated web application game for Meta Verse - My responsibility was to add 3-dimensional movement to characters based on user interactions with the application. This was achieved in Next.js using aframe and three.js for augmented reality implementation in the vector space.",
      "A Sweden based enterprise ordering system for sportswear- My responsibility was to create the software architecture, 3d customization of products by customers in real time when ordering, Invoice and Product specification document generation. This was achieved using Nest.js, React.js, three.js and GraphQL with PostgreSQL.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Inside Maps",
    icon: insidemaps,
    iconBg: "#E6DEDD",
    date: "Sep 2021 – Present",
    points: [
      "As a Business Analyst at InsideMaps, I collaborated with a remote team to audit and resolve project issues, increasing completion rates and reducing customer complaints. I assigned projects based on team members' skills, created analytics on Google Spreadsheets for US states, and strategically scheduled rework projects. My contributions helped enhance project accuracy and decrease delays.",
    ],
  },

  {
    title: "Full Stack Developer | Team Leader | Agile Enthusiast",
    company_name: "Aveneur Solutions",
    icon: aveneur,
    iconBg: "#f4f4f4",
    date: "Nov 2020 – Jul 2021",
    points: [
      "Since it was a new found company, I had to take up responsibilities of different roles such as product management and product designing along with my primary role of software development which further improved my agile methodology and design thinking skills. I attended client meetings, performed requirement engineering, created specification documents, built design prototypes, delegated tasks to teammates and completed my own tickets for development.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Cerulean Creative Technologies",
    icon: cerulean,
    iconBg: "#FFFFFF",
    date: "Jan 2020 – Nov 2020",
    points: [
      "During my time at Cerulean Creative Technologies, I developed the front-end of 2 web applications(e-commerce & industrial blog) using Reactjs. This experience strengthened my front-end development skills, laying a solid foundation for my future in the tech industry..",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tecbix",
    description:
      "The beauty of three.js can be seen here. I have multiple implementations in mind. Currently learning 3d modelling on top of my UI/UX and graphics designing certification.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: tecbix,
    source_code_link: "https://github.com/Zulker-Nien/tecbix",
  },
  {
    name: "Petopia",
    description:
      "A Single page landing application demonstrating the structural, responsive and bright design to lure the users into taking better care of their pets because it has everything you need for a pet.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: petopia,
    source_code_link: "https://github.com/Zulker-Nien/petopia",
  },
  {
    name: "Mini e commerce",
    description:
      "Web application that enables users to search for products, view categories of products, add to cart and order a dummy product. Use of fakestore.api helped with the restfulness",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: miniecom,
    source_code_link: "https://github.com/Zulker-Nien/mini-e-commerce",
  },
];

export { services, technologies, experiences, testimonials, projects };
