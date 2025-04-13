const navLinks = [
  {
    name: "WORK",
    link: "#work",
  },
  {
    name: "EXPERIENCE",
    link: "#experience",
  },
  {
    name: "SKILLS",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
// constants.js (or wherever you're storing logoIconsList)
import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.png";
import img6 from "../Assets/6.png";
import img7 from "../Assets/7.png";
import img8 from "../Assets/8.png";
import img9 from "../Assets/9.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import java from "../Assets/java.png";
import react from "../Assets/react.png";
import node from "../Assets/nodejs.png";
import mongo from "../Assets/mongo-db.png";
import cpp from "../Assets/c++.png";
import canva from "../Assets/canva.png";
import vscode from "../Assets/visual-studio-code.png"
import git from "../Assets/github.png"
const logoIconsList = [
  { imgPath: img1 },
  { imgPath: img2 },
  { imgPath: img3 },
  { imgPath: img4 },
  { imgPath: img5 },
  { imgPath: img6 },
  { imgPath: img7 },
  { imgPath: img8 },
  { imgPath: img9 },
];


const techStackImgs = [
  {
    imgPath: html,
  },
  {
    imgPath: css,
  },
  {
    imgPath: java,
  },
  {
    imgPath: mongo,
  },
  {
    imgPath: react,
  },
  {
    imgPath: node,
  },
  {
    imgPath: vscode,
  },
  {
    imgPath: canva,
  },
  {
    imgPath: cpp,
  },
  {
    imgPath: git,
  },
  {
    imgPath: img9,
  },
  {
    imgPath: img4,
  },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];




import logo1 from "../Assets/LOGO.svg";
import logo2 from "../Assets/logohead.png";

const expCards = [
  {
    review: "Shubham played a key role at Protonix AI Pvt Ltd, showcasing strong full-stack skills and a proactive attitude. His contribution to the development of scalable features was commendable.",
    imgPath: logo1, // Corrected: Removed curly braces
    logoPath: logo2, // Changed to imported logo2 if it's meant to be dynamic
    title: "Full Stack Developer Intern",
    date: "December 2024 - Present",
    responsibilities: [
      "Developed and maintained full-stack features using the MERN stack for client projects.",
      "Collaborated with designers and backend teams to build responsive and efficient web applications.",
      "Worked on the official Protonix AI website, including the Services page and other dynamic components.",
      "Optimized application performance and implemented best coding practices across the stack.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: logo1, // Corrected
  }
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF",
    link: "https://www.instagram.com/shubham_2_08_?igsh=MWEyZHgycDl6a3ViMQ==",
  },
  {
    name: "github",
    imgPath: "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF",
    link: "https://github.com/shubhamsiddhapura", // formerly Twitter
  },
  {
    name: "linkedin",
    imgPath: "https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF",
    link: "https://www.linkedin.com/in/shubham-siddhapura0248/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  socialImgs,
  techStackImgs,
  navLinks,
};
