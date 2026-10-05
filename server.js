const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Portfolio data
const profile = {
  name: "Bimal Kapadi",
  title: "Civil Engineer • Structural Engineering",
  location: "Janakpur, Dhanusha, Nepal",
  summary:
    "Civil Engineer with M.Tech specialization in Structural Engineering and practical experience in site engineering, construction coordination, quality control, and project execution.",
  availability: "Open to professional opportunities"
};

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Site Engineer",
    company: "Raman Construction — Guangdong Yuantian-Raman J/V",
    location: "Janakpur-09, Dhanusha, Nepal",
    points: [
      "Supervising site activities and coordinating day-to-day construction work.",
      "Monitoring execution, workmanship, materials, and project requirements.",
      "Coordinating teams and maintaining effective communication between site stakeholders."
    ]
  },
  {
    period: "Nov 2019 — Mar 2022",
    role: "Civil Engineer",
    company: "Niyatra Consult Pvt. Ltd.",
    location: "Kupondole, Lalitpur, Nepal",
    points: [
      "Supported engineering and construction-related assignments.",
      "Coordinated technical work and maintained professional communication with project stakeholders.",
      "Applied civil engineering knowledge to practical project requirements."
    ]
  }
];

const education = [
  {
    period: "2022 — 2024",
    degree: "M.Tech Structural Engineering",
    institution: "Dr. K. N. Modi University",
    location: "Newai, Tonk, Rajasthan, India",
    result: "7.76 CGPA"
  },
  {
    period: "2015 — 2019",
    degree: "B.Tech Civil Engineering",
    institution:
      "Uttarakhand Technical University / J B Institute of Technology",
    location: "Dehradun, India",
    result: "68.66%"
  },
  {
    period: "2012 — 2014",
    degree: "High School — Science",
    institution: "Model H S School",
    location: "Janakpur, Dhanusha, Nepal",
    result: "57.90%"
  },
  {
    period: "Through 2012",
    degree: "School Education",
    institution: "Fakirchandra Gami Ma Vi",
    location: "Barkurba, Nepal",
    result: "45.63%"
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

const languages = [
  "Nepali",
  "English",
  "Hindi",
  "Maithili"
];

const reference = {
  name: "Durgesh Nandan",
  role: "Assistant Professor, Department of Civil Engineering",
  institution: "Dr. K. N. Modi University",
  phone: "+91-9929710911",
  email: "registrar@dknmu.org",
  website: "www.dknmu.org"
};

// Home page
app.get("/", (req, res) => {
  res.render("index", {
    profile,
    experience,
    education,
    skills,
    languages,
    reference
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Bimal Kapadi portfolio is working"
  });
});

// 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Local development only
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
