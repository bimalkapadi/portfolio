const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const profile = {
  name: "Bimal Kapadi",
  shortName: "BK",
  title: "Civil Engineer",
  specialty: "Structural Engineering",
  tagline: "Building with precision, solving with purpose.",
  location: "Dhanusha, Madhesh Province, Nepal",
  email: "bimalkapadi2017@gmail.com",
  phone: "+977-9807855406",
  phoneRaw: "+9779807855406",
  languages: ["Nepali", "English", "Hindi", "Maithili"]
};

const about = [
  "I am a highly motivated and inspiring civil engineering professional with a multidisciplinary academic background and experience in related fields of study.",
  "I hold a Master of Technology in Structural Engineering and a Bachelor of Technology in Civil Engineering. My professional approach combines technical knowledge, practical thinking, communication, leadership and problem-solving.",
  "I want to work in a challenging environment where I can stay on my toes and contribute to both my professional growth and the development of the organization."
];

const experience = [
  {
    role: "Site Engineer",
    company: "Raman Construction",
    project: "Guangdong Yuantian-Raman J/V",
    date: "September 2024 — Present",
    location: "Janakpur-09, Dhanusha, Nepal",
    icon: "🏗️",
    current: true,
    desc: "Working as a Site Engineer with responsibility for practical construction-site activities, engineering coordination and professional execution of assigned work."
  },
  {
    role: "Civil Engineer",
    company: "Niyatra Consult Pvt. Ltd.",
    project: "",
    date: "November 2019 — March 2022",
    location: "Kupondole, Lalitpur, Nepal",
    icon: "📐",
    current: false,
    desc: "Worked as a Civil Engineer, contributing professional civil engineering knowledge and supporting engineering-related assignments and project activities."
  }
];

const education = [
  {
    degree: "Master of Technology",
    field: "Structural Engineering",
    school: "Dr. K. N. Modi University",
    location: "Newai, Tonk, Rajasthan, India",
    grade: "7.76 CGPA",
    period: "2022 — 2024",
    certificate: "26 Jul, 2024",
    icon: "🎓"
  },
  {
    degree: "Bachelor of Technology",
    field: "Civil Engineering",
    school: "Uttarakhand Technical University / J B Institute of Technology",
    location: "Dehradun, India",
    grade: "68.66%",
    period: "2015 — 2019",
    certificate: "14 Aug, 2019",
    icon: "🏛️"
  },
  {
    degree: "High School",
    field: "Science",
    school: "Model H S School",
    location: "Janakpur, Dhanusha, Nepal",
    grade: "57.90%",
    period: "2012 — 2014",
    certificate: "09 Jul, 2015",
    icon: "📚"
  },
  {
    degree: "School",
    field: "",
    school: "Fakirchandra Gami Ma Vi",
    location: "Barkurba, Nepal",
    grade: "45.63%",
    period: "— 2012",
    certificate: "13 Jun, 2012",
    icon: "🏫"
  }
];

const skills = [
  "Engaging Leadership",
  "Flexibility & Adaptability",
  "Organizational Skills",
  "Multitasking",
  "Creative Problem-Solving",
  "Employee Management",
  "Oral & Written Communication",
  "Pressure Management"
];

const traits = [
  "Remain calm and professional throughout incidents.",
  "Excellent written and verbal communication.",
  "Resourceful problem solver for complex situations.",
  "Ability to work effectively under pressure."
];

const reference = {
  name: "Durgesh Nandan",
  organization: "Dr. K. N. Modi University",
  designation: "Assistant Professor, Department of Civil Engineering",
  phone: "+91-9929710911",
  email: "registrar@dknmu.org",
  website: "www.dknmu.org"
};

app.get("/", (req, res) => {
  res.render("index", {
    profile,
    about,
    experience,
    education,
    skills,
    traits,
    reference,
    year: new Date().getFullYear()
  });
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Bimal Kapadi portfolio running at http://localhost:${PORT}`);
});
