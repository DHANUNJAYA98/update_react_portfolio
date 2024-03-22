import React from "react";
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

// Navigation links for the website
export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

// Social media icons
export const socialIcons = [
  <FaInstagram />,
  <FaGithub />,
  <FaLinkedin />,
  <BsMedium />,
  <AiOutlineCode />
];

// Bio information
export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Namburi Dhanunjaya"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+919849264719"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dhanunjayanamburi@gmail.com"
  }
];

// Icons representing various skills
export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <FaSass />,
  <FaFigma />
];

// Education history
export const Education = [
  {
    id: 1,
    school: "Priya Darshini Vidya Mandir",
    degree: "11th & 12th",
    year: "2018-2020",
    GPA: "9.89"
  },
  {
    id: 2,
    school: "Vellore Institute of Technology",
    degree: "B.Tech",
    year: "2020-2024",
    CGPA: "8.3"
  }
];

// Certifications and accomplishments
export const certifications = [
  {
    id: 1,
    itemName: "AWS Cloud Practitioner",
    organization: "Amazon Web Services"
  },
  {
    id: 2,
    itemName: "IBM Data Science Professional",
    organization: "IBM"
  }
];

// Work images for the portfolio
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Project 1",
    category: "Web"
  },
  {
    id: 2,
    img: work2,
    name: "Project 2",
    category: "Web"
  },
  {
    id: 3,
    img: work3,
    name: "Project 3",
    category: "Web"
  },
  {
    id: 4,
    img: work4,
    name: "Project 4",
    category: "App"
  },
  {
    id: 5,
    img: work5,
    name: "Project 5",
    category: "App"
  },
  {
    id: 6,
    img: work6,
    name: "Project 6",
    category: "Design"
  }
];

// Navigation links for the portfolio filter
export const workNavs = [
  "All", "Web", "Data Analysis", "Python"
];

// Contact information
export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Anantapur, Andhra Pradesh, India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dhanunjayanamburi@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-9849264719"
  }
];
