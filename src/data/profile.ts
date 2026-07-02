// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Edit this file to update every piece of content on the site: bio, links,
// education, skills, projects, achievements, certifications, and services.
// Nothing else in the codebase should need to change for a content update.
// ─────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Mst. Shadia Noor Mou",
  firstName: "Shadia",
  role: "Full-Stack Web Developer",
  roles: [
    "Full-Stack Web Developer",
    "AI & ML Enthusiast",
    "Competitive Programmer",
  ],
  location: "Rajshahi, Bangladesh",
  email: "shadianoormou.cse@gmail.com",
  phone: "01760521131",
  domain: "shadianoormou.dev",
  intro:
    "I build practical full-stack web applications and AI-powered solutions with a focus on clean UI, structured backend systems, research-based problem solving, and continuous learning.",
  aboutParagraphs: [
    "I'm a Computer Science & Engineering graduate from Varendra University, currently awaiting my final result. My interests sit at the intersection of full-stack web development, AI/ML, and competitive programming — I like building things that work end to end, and understanding the systems underneath them.",
    "Day to day, I work with React.js, Next.js, Node.js, Python, and SQL, and I'm comfortable moving between frontend interfaces, backend APIs, and applied AI/ML pipelines. I care about clean code, structured data, and building software that solves a real problem rather than just demoing one.",
    "I'm currently open to full-time roles, internships, freelance projects, and research collaboration — particularly anything involving full-stack engineering or applied machine learning.",
  ],
  resumeUrl: "/assets/Shadia_Noor_Mou_CV.pdf",
  profileImage: "/assets/profile.jpg",
};

export const socials = {
  github: "https://github.com/shadianoormou",
  linkedin: "https://www.linkedin.com/in/shadia-noor-mou",
  leetcode: "https://leetcode.com/u/shadianoormou",
  email: `mailto:${personal.email}`,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Research", href: "#research" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const highlightCards = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive, production-ready web apps end to end — from React/Next.js interfaces to Node.js/Express APIs and database design.",
    icon: "code",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Applying deep learning and classical ML to real problems — from image-based classification pipelines to model evaluation and analysis.",
    icon: "brain",
  },
  {
    title: "Competitive Programming",
    description:
      "Sharpening problem-solving with data structures and algorithms through consistent, topic-wise practice on LeetCode.",
    icon: "trophy",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Varendra University, Rajshahi",
    period: "2022 — 2026",
    detail: "Average CGPA: 3.80 / 4.00",
    status: "Final result awaiting",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "New Govt. Degree College, Rajshahi",
    period: "2021",
    detail: "GPA: 5.00 / 5.00",
    status: null,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Govt. P.N. Girls' High School, Rajshahi",
    period: "2019",
    detail: "GPA: 5.00 / 5.00",
    status: null,
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "Authentication Concepts"],
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Database Design",
      "Stored Procedures",
      "Functions",
      "Views",
      "Indexes",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "BiLSTM",
      "Image Classification",
      "Preprocessing",
      "Model Evaluation",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "NetBeans", "Postman", "Kaggle", "Google Colab"],
  },
  {
    title: "AI Coding Tools",
    skills: ["ChatGPT", "Codex", "Cursor", "Claude Code"],
  },
];

export type Project = {
  title: string;
  github: string;
  leetcode?: string;
  liveNote?: string;
  tech: string[];
  description: string;
  features: string[];
  stat?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    title: "Image-Based Malware Classification using Hybrid CNN-BiLSTM",
    github: "https://github.com/shadianoormou/Malware_Image_Classification_CNN-BiLSTM",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "BiLSTM", "NumPy", "Pandas", "Scikit-learn", "Kaggle"],
    description:
      "A research-based malware classification pipeline that converts malware samples into image representations and classifies them using a hybrid CNN-BiLSTM architecture.",
    features: [
      "Dataset inspection and preprocessing pipeline for image-encoded malware samples",
      "Hybrid CNN-BiLSTM model design, training, and evaluation",
      "Confidence-threshold analysis to assess prediction reliability",
    ],
    stat: { value: "96.13%", label: "Test Accuracy · 96.25% Weighted F1-Score" },
  },
  {
    title: "MediMart AI — Smart E-Pharmacy Website",
    github: "https://github.com/shadianoormou/medimart-ai",
    liveNote: "Live demo can be added later.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Responsive UI"],
    description:
      "A smart e-pharmacy platform covering product browsing, cart and order workflow, an admin dashboard, inventory management, and AI-style search.",
    features: [
      "Full cart-to-order workflow with structured product and inventory data",
      "Admin dashboard for managing products, stock, and orders",
      "Clean, responsive UI built for real pharmacy-style browsing",
    ],
  },
  {
    title: "LeetCode Solutions Repository",
    github: "https://github.com/shadianoormou/leetcode-solutions",
    leetcode: "https://leetcode.com/u/shadianoormou",
    tech: ["Python", "Data Structures", "Algorithms", "Competitive Programming"],
    description:
      "Topic-wise Python solutions built for consistent coding-interview and competitive-programming practice.",
    features: [
      "Organized by topic: arrays, strings, graphs, DP, and shortest paths",
      "Clean, readable Python solutions with a consistent structure",
      "Actively growing as new problems are solved",
    ],
    stat: { value: "10", label: "Problems Solved · 5 Easy / 5 Medium" },
  },
];

export const achievements = [
  {
    title: "1st Runner-Up",
    org: "NASA Space Apps Challenge Bangladesh 2023",
    place: "Rajshahi",
  },
  {
    title: "Galactic Problem Solver",
    org: "NASA International Space Apps Challenge 2023",
    place: null,
  },
  {
    title: "1st Position",
    org: "Practical Spoken & Written English Examination",
    place: "Project Hexway, 2026",
  },
  {
    title: "Competitor",
    org: "Hult Prize 2023–2024 OnCampus Program",
    place: "Varendra University",
  },
  {
    title: "Participant",
    org: "Robo Soccer / Robotics Competition, VU Tech Carnival '24",
    place: "Dept. of CSE, Varendra University",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  hours?: string;
  year: string;
  image: string;
};

export const certifications: Certificate[] = [
  {
    title: "Galactic Problem Solver — NASA International Space Apps Challenge 2023",
    issuer: "NASA International Space Apps Challenge",
    year: "2023",
    image: "/assets/certificates/cert-galactic-problem-solver.jpg",
  },
  {
    title: "1st Runner-Up — NASA Space Apps Challenge Bangladesh 2023 (Rajshahi)",
    issuer: "NASA Space Apps Challenge Bangladesh / BASIS",
    year: "2023",
    image: "/assets/certificates/cert-nasa-1st-runner-up.jpg",
  },
  {
    title: "Build a Flutter Project with AI Assistance",
    issuer: "Business Automation Ltd. / Skill Development Center",
    hours: "30 hours",
    year: "2025",
    image: "/assets/certificates/cert-flutter-ai.jpg",
  },
  {
    title: "Next Gen InnovX Training Program",
    issuer: "Business Automation Ltd. / Skill Development Center",
    hours: "24 hours",
    year: "2025",
    image: "/assets/certificates/cert-next-gen-innovx.jpg",
  },
  {
    title: "Learn UI/UX: From Fundamentals to Prototyping",
    issuer: "Business Automation Ltd. / Skill Development Center",
    hours: "10 hours",
    year: "2025",
    image: "/assets/certificates/cert-uiux.jpg",
  },
  {
    title: "From Raw to Refined: A Crash Course in ML Data Preprocessing",
    issuer: "Business Automation Ltd. / Skill Development Center",
    hours: "2 hours",
    year: "2025",
    image: "/assets/certificates/cert-ml-preprocessing.jpg",
  },
  {
    title: "How to Build Your Career in DevOps",
    issuer: "Business Automation Ltd. / Skill Development Center",
    hours: "3 hours",
    year: "2025",
    image: "/assets/certificates/cert-devops.jpg",
  },
  {
    title: "Aptis for Adults — Practical Spoken & Written English Preparation Course",
    issuer: "Project Hexway / English Qualifications",
    year: "2025–2026",
    image: "/assets/certificates/cert-aptis-english.jpg",
  },
];

export const additionalCertificateImages: Certificate[] = [
  {
    title: "Participant — Robo Soccer Competition, VU Tech Carnival ’24",
    issuer: "Dept. of CSE, Varendra University",
    year: "2024",
    image: "/assets/certificates/cert-robo-soccer.jpg",
  },
  {
    title: "Competitor — Hult Prize 2023–2024 OnCampus Program",
    issuer: "Hult Prize Foundation / Varendra University",
    year: "2024",
    image: "/assets/certificates/cert-hult-prize.jpg",
  },
];

export const researchAreas = [
  "AI / Machine Learning",
  "Image Classification",
  "Database Systems",
  "Computer Networking",
  "Image Processing",
  "Software Development (Academic Projects)",
];

export const researchSummary =
  "My academic and research work spans AI/ML and image classification, database systems, computer networking, image processing, and applied software development projects. I'm particularly interested in using AI and sound software engineering practices to solve practical, real-world problems.";

export const services = [
  {
    title: "Web Development",
    description: "Responsive, production-ready websites and web apps built with modern frontend and backend tools.",
    icon: "layout",
  },
  {
    title: "AI / ML Projects",
    description: "Applied machine learning work — from data preprocessing to model training and evaluation.",
    icon: "cpu",
  },
  {
    title: "Research-Based Software",
    description: "Software built around a research question, with careful documentation and evaluation.",
    icon: "flask",
  },
  {
    title: "Internship / Junior Developer Roles",
    description: "Looking to join a team as an intern or junior developer to learn and contribute.",
    icon: "briefcase",
  },
  {
    title: "Freelance Work",
    description: "Available for scoped freelance projects in full-stack development or AI/ML.",
    icon: "handshake",
  },
  {
    title: "Collaboration",
    description: "Open to collaborating on research, hackathons, and open-source projects.",
    icon: "users",
  },
];

export const softSkills = [
  "Teamwork",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Research Ability",
  "Presentation",
  "Time Management",
  "Adaptability",
];

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];

// Replace with your own Formspree form ID (see README.md) to enable real
// message delivery from the contact form.
export const formspreeId = "YOUR_FORMSPREE_ID";
