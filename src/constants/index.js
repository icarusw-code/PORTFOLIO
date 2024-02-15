import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";
import port05 from "../assets/img/port05.png";

import background0 from "../assets/img/background/background0.png";
import background1 from "../assets/img/background/background1.png";
import background2 from "../assets/img/background/background2.png";
import background3 from "../assets/img/background/background3.png";
import background4 from "../assets/img/background/background4.png";
import background5 from "../assets/img/background/background5.png";
import background6 from "../assets/img/background/background6.png";
import background7 from "../assets/img/background/background7.png";
import background8 from "../assets/img/background/background8.png";

import languageImg from "../assets/img/skills/Language.png";
import gameImg from "../assets/img/skills/Game.png";
import frontendImg from "../assets/img/skills/Frontend.png";
import backendImg from "../assets/img/skills/Backend.png";
import databaseImg from "../assets/img/skills/Db.png";
import etcImg from "../assets/img/skills/Etc.png";

import {
  mdiSpeedometer,
  mdiCellphoneLink,
  mdiLightbulbOn10,
  mdiRocketLaunch,
} from "@mdi/js";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "masterpiece",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "journey",
    url: "#journey",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const backgroundImg = [
  {
    img: background0,
  },
  {
    img: background1,
  },
  {
    img: background2,
  },
  {
    img: background3,
  },
  {
    img: background4,
  },
  {
    img: background5,
  },
  {
    img: background6,
  },
  {
    img: background7,
  },
  {
    img: background8,
  },
];

export const introText = {
  title: "Growing Developer",
  desc: [
    {
      icon: mdiSpeedometer,
      title: "Fast",
      content: [
        "Fast load times and lag free interaction,",
        "my highest priority.",
      ],
    },
    {
      icon: mdiCellphoneLink,
      title: "Responsive",
      content: ["My layouts will work on any device,", " big or small."],
    },
    {
      icon: mdiLightbulbOn10,
      title: "Intuitive",
      content: ["Strong preference for easy to use,", " intuitive UX/UI."],
    },
    {
      icon: mdiRocketLaunch,
      title: "Dynamic",
      content: [
        "Websites don't have to be static, ",
        "I love making pages come to life.",
      ],
    },
  ],
  intro: {
    intro: "Hello I'm seongjin",
    detail:
      "An innovative software developer with expertise in AR/VR, 3Dcontent, and gaming technologies, I excel in creating immersive experiences, with my strength lying in constantly striving for innovation.",
  },
};

export const skillText = [
  {
    title: "Language",
    img: languageImg,
  },
  {
    title: "Game&3D",
    img: gameImg,
  },
  {
    title: "Frontend",
    img: frontendImg,
  },
  {
    title: "Backend",
    img: backendImg,
  },
  {
    title: "Database",
    img: databaseImg,
  },
  {
    title: "Etc",
    img: etcImg,
  },
];

export const journeyText = [
  {
    title:
      "LG CNS America - Smart Factory Analysis & Design Analyst (2023 - Present)",
    desc: [
      "Spearheaded the implementation of automated systems, including Stocker and Conveyor, within the CIM framework to enhance operational efficiency.",
      "Utilized PLC within the CIM framework to deploy advanced control systems for improved manufacturing and logistical workflows.",
      "Orchestrated the integration and management of MCS using industry standards HSMS, GEM for real-time tracking and quality control of manufacturing processes.",
      "Troubleshot and resolved complex system issues, providing critical support for continuous improvement and operational excellence in manufacturing environments.",
    ],
  },
];

export const siteText = [
  {
    title: "SpaceAR",
    text: [
      "Our platform, SpaceAR, is a cutting-edge augmented reality (AR) platform designed for both developers and non-developers alike.",
      " It enables users to craft their own AR content using a user-friendly editor and share it through our web-based content store.",
      "Everything you create can be experienced directly within the SpaceAR application, offering an immersive and accessible way to engage with AR technology.",
    ],
    code: "",
    view: "https://www.youtube.com/embed/52O86I_6uGQ",
    videolink: "https://www.youtube.com/embed/qzDbcda_p4c",
    info: [
      "AR Platform",
      "production period : two months",
      "use stack : Unity, Lua, AWS, POSTSQL, Javascript, CSS, HTML, Python, Photon Engine",
    ],
  },
  {
    title: "FireEscape",
    text: [
      "Our project introduces a virtual reality (VR) simulation game where players embody an artificial intelligence robot, iBot, tasked with the critical mission of aiding a child trapped in a fire.",
      "This immersive experience brings to life vivid fire scenarios within a VR space, allowing for a deep level of engagement.",
      "Through interactive dialogue, the AI learns and enhances its problem-solving abilities, ensuring a dynamic and adaptive approach to rescue operations.",
    ],
    code: "",
    view: "https://www.youtube.com/embed/YEvBzJFoslg",
    videolink: "https://www.youtube.com/embed/YEvBzJFoslg",
    info: [
      "VR Contents",
      "production period : three months",
      "use stack : Unity, Oculus, AWS, C#, Python, LLM",
    ],
  },
  {
    title: "ZeptoWorld(Hansik KKaebi)",
    text: [
      "Introducing a unique service designed to celebrate and promote Korean cuisine within Zepeto World, a bustling metaverse platform enjoyed by over 12,000 users.",
      "Engage in interactive quests, gather a wide array of ingredients, and complete authentic Korean meals to deepen your appreciation and understanding of Korean food culture.",
      "Upon successfully making twice dishes, participants are rewarded with a charming Korean kkaebi (pet) companion that follows them throughout their metaverse journey.",
    ],
    code: "",
    view: "https://www.youtube.com/embed/LsnSpxjPEGg",
    videolink: "https://www.youtube.com/embed/LsnSpxjPEGg",
    info: [
      "Metaverse",
      "production period : two months",
      "use stack : Unity, TypeScript",
    ],
  },
  {
    title: "Splatoon3(Replica)",
    text: [
      "Our project draws inspiration from the popular game Splatoon 3, focusing on the innovative application of paint (in designated colors) to textures at collision points.",
      "We've enabled multiplayer functionality through Photon, allowing players to engage in colorful battles using a variety of weapons.",
      "The game's outcome is determined by calculating the ratio of a specific color applied to the entire texture, showcasing our technical prowess in recreating and enhancing this dynamic gameplay mechanic.",
    ],
    code: "",
    view: "https://www.youtube.com/embed/4j46nfvujqU",
    videolink: "https://www.youtube.com/embed/4j46nfvujqU",
    info: [
      "Game Replica",
      "production period : one month",
      "use stack : Unity, C#, HLSL, Photon Server",
    ],
  },
];

export const portText = [
  {
    num: "01",
    title: "LightPeriator",
    desc: "Explore the captivating world of our casual puzzle game, where the mechanics of light reflection take center stage. By leveraging Raycast technology, we've enriched the gameplay with complex strategies through the implementation of light reflection, prism effects, and portal functionalities. The game's aesthetics are enhanced by Line Renderer, which adds a stunning visual quality to the light effects. Moreover, we've integrated hand tracking technology, offering an innovative way for players to interact with the game using their hands as seen through the camera, providing a unique and immersive experience.",
    img: port01,
    code: "",
    view: "https://www.youtube.com/embed/velO1Co5RjI",
    name: "LightPeriator",
  },
  {
    num: "02",
    title: "AceCombat7(Replica)",
    desc: "Inspired by the iconic Ace Combat 7, our project delivers an immersive flight simulation experience, where the physics of altitude and speed authentically impact the plane's operation. We've introduced a diverse fleet of aircraft, utilizing Classes to structure common properties, ensuring a rich selection for enthusiasts. Moreover, targeting and engaging enemies is seamlessly executed through the use of Lists, allowing players to smoothly select and switch targets, enhancing the tactical depth and realism of aerial combat.",
    img: port02,
    code: "",
    view: "https://www.youtube.com/embed/7SVUR3mXTXw",
    name: "AceCombat7(Replica)",
  },
  {
    num: "03",
    title: "DailyFootball",
    desc: "As a soccer community driven by player ratings, we've created a platform where users can rate players based on their performances in soccer matches. Our service provides real-time information on games, along with comprehensive records and statistical data across different leagues, teams, and players. To ensure a seamless user experience, we addressed the N+1 problem associated with lazy loading by optimizing our database queries with the JPQL fetch option, enhancing the efficiency of data retrieval.",
    img: port03,
    code: "",
    view: "",
    name: "DailyFootball",
  },
  {
    num: "04",
    title: "RPG Game",
    desc: "In our quest-based RPG game, we engage players by instilling a sense of purpose and progression. Utilizing Finite State Machines (FSM), we've engineered diverse states for regular monsters and boss monsters alike, introducing a variety of patterns to enrich the gameplay experience. This strategic design not only enhances the game's depth but also adds to the overall fun, challenging players to adapt their strategies against different types of enemies.",
    img: port04,
    code: "",
    view: "",
    name: "RPG Game",
  },
  {
    num: "05",
    title: "LogObserver",
    desc: "To facilitate the monitoring of diverse log files accumulating across multiple PCs from a single workstation, we developed a Sender and Receiver program leveraging socket communication. Our solution actively searches for log files that are updated daily, utilizing a multi-threading approach to ensure efficient and real-time data processing. Furthermore, we have implemented a system to periodically check the connection status of each PC through ping tests, enabling the seamless management and maintenance of network health.",
    img: port05,
    code: "",
    view: "",
    name: "LogObserver",
  },
];

export const contactText = [
  {
    link: "https://github.com/icarusw-code",
    title: "Github : icarusw-code",
  },
  {
    link: "mailto:cordelia35794@gmail.com",
    title: "mail : cordelia35794@gmail.com",
  },
];

export const footerText = [
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/icarusw-code",
  },
  {
    title: "youtube",
    desc: "유튜브에 오시면 더 많은 영상을 볼 수 있습니다.",
    link: "https://www.youtube.com/@blackted8044/videos",
  },
  {
    title: "linkedin",
    desc: "저에대해 더 많은 정보를 볼 수 있습니다.",
    link: "https://www.linkedin.com/in/seongjin-choi-0b3a96234/",
  },
];
