import {
  whatsapp,
  whatsapp1,
  instagram,
  instagram1,
  tempo,
  flate,
  solar,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  inventory,
  jobit,
  tripguide,
  graspear,
  quantanics,
  ibm,
  bootstrap,
  postgresql,
  mysql,
  java,
  flutter,
  codeigniter,
  electronic,
  linkedin,
  linkedin1
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
  // {
  //   title: "Resume",
  //   id:"Resume"
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "React Developer",
    icon: mobile,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  // {
  //   name: "Flutter",
  //   icon: flutter,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
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
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Codeigniter",
    icon: codeigniter,
  }
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Quantanics TechServ Pvt Ltd",
    icon: quantanics,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Developing and maintaining web applications using MERN stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "App Developer & Ui/UX ",
    company_name: "Graspear Solutions Pvt Ltd",
    icon: graspear,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Proficiently employing the Flutter framework to build and sustain applications.",
      "Designing and shaping the user interface and experience through Figma.",
      "Engaging in collaborative efforts with a diverse set of professionals, including designers, product managers, and fellow developers.",
      "Skillfully implementing responsive design principles to ensure optimal user experiences across various devices and screen sizes.",
    ],
  },
  {
    title: "Intern Trainee",
    company_name: "Quantanics TechServ Pvt Ltd",
    icon: quantanics,
    iconBg: "#383E56",
    date: "Mar 2023 - Jun 2023",
    points: [
      "As an intern trainee at Quantanics TechServ Pvt Ltd, I embarked on a dynamic learning journey centered around web development and full-stack development.",
      "This immersive experience allowed me to gain invaluable insights and hands-on experience in the ever-evolving field of technology.",
      " Acquired skills in web development, mastering HTML, CSS, JavaScript, and more.",
      " Gained expertise in both frontend and backend technologies.",
      " Applied creative solutions to real-world challenges.",
    ],
  },
  {
    title: " Collaboration With IBM",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Actively participated in a virtual internship program in collaboration with IBM.",
      "Contributed to the realization of a cloud-based Inventory Management System project.",
      "Skillfully harnessed state-of-the-art technology to optimize inventory management procedures.",
      "Demonstrated adaptability and a forward-thinking approach by integrating innovative solutions.",
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
    name: "Inventory Management - With IBM",
    description:
      "- An advanced Inventory Management System was developed through a fruitful collaboration with IBM,incorporating cutting-edge technologies for efficient and seamless inventory control.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "IBM Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: inventory,
    source_code_link: "https://github.com/MATHAN4023/IBM-Project",
  },
  {
    name: "Room rental reservation system",
    description:
      "- Developed 'Flatmates' project using CodeIgniter framework, a web application showcasing available rooms and facilitating room sharing for individuals seeking affordable housing solutions.",
    tags: [
      {
        name: "Codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: flate,
    source_code_link: "https://github.com/MATHAN4023/Flatmates",
  },
  {
    name: "Electronic-Ecommerce Website",
    description:
      "- Developed 'ElectroMart,' a dynamic PHP-based e-commerce platform, offering a seamless shopping experience for tech enthusiasts with a wide range of electronic products.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: electronic,
    source_code_link: "https://github.com/MATHAN4023/Electronic-Ecommerce",
  },
  {
    name: "Solar PV Analyzer - Project",
    description:
      "- The Solar PV Analyzer project collects data from PV analyzers, presenting it in graphical form and performing relevant calculations for easy monitoring and analysis.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: solar,
    source_code_link: "https://github.com/MATHAN4023/Virualization--json-to-react-ui-",
  },
  {
    name: "Tempo IOT Project -Quantanics",
    description:
      "- The Tempo IoT Project uses graphical representations to display machinery data, facilitating real-time monitoring and analysis of equipment performance.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tempo,
    source_code_link: "https://github.com/MATHAN4023/TempoIoT-Quantanics",
  },
];

const social = [
  {
    logo:linkedin,
    image: linkedin1,
    source_code_link: "https://www.linkedin.com/in/mathan-iyappan-2017b4228",
  },
  {
    logo:whatsapp1,
    image: whatsapp,
    source_code_link: "https://wa.me/message/PIA7L55OZ575N1",
  },
  {
    logo:instagram,
    image: instagram1,
    source_code_link: "https://instagram.com/mazzmathan",
  },
  
];

export { services, technologies, experiences, testimonials, projects, social };
