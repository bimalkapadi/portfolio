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

    "Civil Engineer with M.Tech specialization in Structural Engineering, currently pursuing an MSc in Construction Engineering Management with Industrial Placement at the University of East London.",

  availability: "Open to professional opportunities"

};


const experience = [

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

    period: "2026 — 2028",

    degree: "MSc Construction Engineering Management (with Industrial Placement)",

    institution: "University of East London",

    location: "Docklands Campus, University Way, London E16 2RD",

    result: ""

  },

  {

    period: "2022 — 2024",

    degree: "M.Tech Structural Engineering",

    institution: "Dr. K. N. Modi University",

    location: "Newai, Tonk, Rajasthan, India",

    result: ""

  },

  {

    period: "2015 — 2019",

    degree: "B.Tech Civil Engineering",

    institution: "Uttarakhand Technical University / J B Institute of Technology",

    location: "Dehradun, India",

    result: ""

  },

  {

    period: "2012 — 2014",

    degree: "High School — Science",

    institution: "Model H S School",

    location: "Janakpur, Dhanusha, Nepal",

    result: ""

  },

  {

    period: "Through 2012",

    degree: "School Education",

    institution: "Fakirchandra Gami Ma Vi",

    location: "Barkurba, Nepal",

    result: ""

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


const technicalSkills = [

  "AutoCAD",

  "Revit",

  "STAAD.Pro",

  "RCDC",

  "ETABS",

  "SAFE",

  "Manual Excel",

  "BIM (Building Information Modeling)",

  "Basic Computer Skills",

  "All-in-One Civil Engineering Software"

];


const languages = [

  "Nepali",

  "English",

  "Hindi",

  "Maithili"

];


const training = {

  institute: "Unique Civil Software Training Institute",

  focus: "Civil engineering software training"

};


const contact = {

  email: "global.bimalkapadi@gmail.com",

  phone: "+44 (0) 7344062907",

  website: "bimalkapadi.com.np",

  linkedin: "Bimal Kapadi"

};


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

    technicalSkills,

    languages,

    training,

    contact,

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
