import LanguageSVG from "../../../assets/language.svg?react";
import FrontendSVG from "../../../assets/frontend.svg?react";
import BackendSVG from "../../../assets/backend.svg?react";
import DevopsSVG from "../../../assets/devops.svg?react";

const data = [
  {
    title: "Language",
    svg: LanguageSVG,
    list: [
      {
        name: "TypeScript",
        color: "white",
        bgColor: "#235A97",
      },
      {
        name: "JavaScript",
        color: "black",
        bgColor: "#EFD81C",
      },
      {
        name: "C",
        color: "white",
        bgColor: "#6395CD",
      },
      {
        name: "C++",
        color: "white",
        bgColor: "#348B8B",
      },
      {
        name: "Python",
        color: "white",
        bgColor: "#346994",
      },
    ],
  },
  {
    title: "Frontend",
    svg: FrontendSVG,
    list: [
      {
        name: "React",
        color: "black",
        bgColor: "#5ED3F3",
      },
      {
        name: "Zustand",
        color: "white",
        bgColor: "#49443E",
      },
      {
        name: "Recoil",
        color: "white",
        bgColor: "#0880FD",
      },
      {
        name: "React-Query",
        color: "white",
        bgColor: "#FF4759",
      },
      {
        name: "React-Hook-Form",
        color: "white",
        bgColor: "#081229",
      },
      {
        name: "Sass",
        color: "white",
        bgColor: "#CC6598",
      },
      {
        name: "Tailwind CSS",
        color: "white",
        bgColor: "#37BDF8",
      },
      {
        name: "Emotion",
        color: "white",
        bgColor: "#C43BAD",
      },
    ],
  },
  {
    title: "Backend",
    svg: BackendSVG,
    list: [
      {
        name: "Express",
        color: "white",
        bgColor: "#259DFF",
      },
      {
        name: "Next.js",
        color: "white",
        bgColor: "#1F1F1F",
      },
      {
        name: "Firebase",
        color: "black",
        bgColor: "#FFA300",
      },
      {
        name: "Supabase",
        color: "white",
        bgColor: "#287050",
      },
      {
        name: "MySQL",
        color: "white",
        bgColor: "#3E6E93",
      },
    ],
  },
  {
    title: "DevOps",
    svg: DevopsSVG,
    list: [
      {
        name: "AWS",
        color: "black",
        bgColor: "#F79B26",
      },
      {
        name: "Vercel",
        color: "white",
        bgColor: "#080808",
      },
    ],
  },
];
export default data;
