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
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  battleship,
  metty,
  Travelapp,
  threejs,
  flask,
  bootstrap,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Resumen",
  },
  {
    id: "works",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "Three JS",
    icon: threejs,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Python",
    icon: python,
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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "flask",
    icon: flask,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
    ],
  },
];

const projects = [
  {
    name: "Metty",
    description:
      "Plataforma educativa basada en la web que permite a los usuarios buscar a otros usuarios que les enseñen o guíen según el tema.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: metty,
    source_code_link: "https://github.com/Fabianyzb/Metty_",
  },
  {
    name: "Battleship",
    description:
      "Clásico juego de Battleship donde los barcos del jugador y la computadora se posicionan al azar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: battleship,
    source_code_link: "https://github.com/Fabianyzb/Battleship-ReactJs",
  },
  {
    name: "App Viajero",
    description:
      "Frontend de una app para excursionistas, mochileros y aventureros.",
    tags: [
      {
        name: "Next.js 14",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: Travelapp,
    source_code_link: "https://github.com/Fabianyzb/Travel-app",
  },
];

export { services, technologies, projects };
