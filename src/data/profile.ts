// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Edit this file to update every piece of content on the site: bio, links,
// education, skills, projects, achievements, certifications, and services.
// Nothing else in the codebase should need to change for a content update.
// ─────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Mst. Shadia Noor Mou",
  firstName: "Shadia",
  role: "Software Engineer · AI/ML & Full-Stack Developer",
  roles: [
    "Software Engineer",
    "AI/ML & Full-Stack Developer",
    "Research Enthusiast",
    "Competitive Programmer",
  ],
  location: "Rajshahi, Bangladesh",
  email: "shadianoormou.cse@gmail.com",
  phone: "01760521131",
  domain: "shadianoormou.dev",
  intro:
    "I build reliable full-stack products and applied AI systems—from the first technical decision to the last shipped detail. My work sits where product thinking, software engineering, and research meet.",
  aboutParagraphs: [
    "I'm a Computer Science & Engineering graduate from Varendra University whose work sits at the intersection of full-stack development, AI/ML, research, and competitive programming. I enjoy understanding a problem deeply, then turning that understanding into software that works end to end.",
    "My recent professional journey includes software engineering and machine learning work. I work comfortably with React.js, Next.js, Node.js, Python, SQL, C#, .NET MAUI, ASP.NET, and applied ML pipelines, while continuing to grow through hands-on projects and mentorship.",
    "Beyond code, I’m an IOY Ambassador for 2026–2027, a Delegate for International Youth Conference 14, and a Community Volunteer with the Bangladesh Red Crescent Society’s Rajshahi City Unit. I care about using technical skills alongside leadership, collaboration, and service.",
  ],
  resumeUrl: "/assets/Shadia_Noor_Mou_CV.pdf",
  profileImage: "/assets/profile.jpg",
};

export const socials = {
  github: "https://github.com/shadianoormou",
  linkedin: "https://www.linkedin.com/in/shadia-noor-mou",
  linkedinProjects: "https://www.linkedin.com/in/shadia-noor-mou/details/projects/",
  leetcode: "https://leetcode.com/u/shadianoormou",
  email: `mailto:${personal.email}`,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#projects" },
  { label: "Volunteering / Leadership / Impact", href: "#impact" },
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
    detail: "CGPA: 3.78 / 4.00",
    status: "Final result published",
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
    skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "SQL"],
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
    title: "Microsoft / .NET",
    skills: ["C#", ".NET MAUI", "ASP.NET"],
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
  githubRepo?: string;
  linkedin?: string;
  liveUrl?: string;
  image?: string;
  leetcode?: string;
  liveNote?: string;
  tech: string[];
  description: string;
  features: string[];
  stat?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    title: "Aura_Studio — UGC Creator Portfolio & CMS",
    github: "https://github.com/shadianoormou/Aura_Studio",
    githubRepo: "shadianoormou/Aura_Studio",
    linkedin: "https://www.linkedin.com/in/shadia-noor-mou/details/projects/",
    liveUrl: "https://aura-studio-xi-black.vercel.app/",
    image: "/assets/linkedin/aura-studio.jpg",
    tech: ["Next.js", "React", "TypeScript", "Vercel Postgres", "Vercel Blob", "Responsive CSS"],
    description:
      "A premium portfolio platform for a Bangladesh-based UGC creator, combining a responsive public portfolio with a private PIN-protected creator CMS.",
    features: [
      "Responsive portfolio and animated work gallery for beauty, skincare, fashion, wellness, and lifestyle content",
      "Client feedback carousel and contact inquiry flow",
      "CMS for portfolio items, media uploads, publishing status, and inquiries",
    ],
    stat: { value: "Live", label: "Deployed on Vercel" },
  },
  {
    title: "Aurevia Care — Digital Pharmacy & Care Navigator",
    github: "https://github.com/shadianoormou/Aurevia_Care",
    githubRepo: "shadianoormou/Aurevia_Care",
    linkedin: "https://www.linkedin.com/in/shadia-noor-mou/details/projects/",
    image: "/assets/linkedin/aurevia-care.jpg",
    tech: ["React", "Express", "Microsoft SQL Server", "Azure SQL", "Voice Search", "Healthcare UX"],
    description:
      "A safety-first digital pharmacy and Rajshahi care-discovery platform designed around pharmacist-led fulfilment and verified local care listings.",
    features: [
      "Medicine browsing with secure prescription upload and pharmacist review",
      "Inventory and order controls for structured pharmacy operations",
      "Voice search and verified local care discovery for Bangladesh",
    ],
  },
  {
    title: "Image-Based Malware Classification using Hybrid CNN-BiLSTM",
    github: "https://github.com/shadianoormou/Malware_Image_Classification_CNN-BiLSTM",
    githubRepo: "shadianoormou/Malware_Image_Classification_CNN-BiLSTM",
    linkedin: "https://www.linkedin.com/in/shadia-noor-mou/details/projects/",
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
    title: "LeetCode Solutions Repository",
    github: "https://github.com/shadianoormou/leetcode-solutions",
    githubRepo: "shadianoormou/leetcode-solutions",
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

export type Experience = {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  image?: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    organization: "Professional journey",
    period: "2026 — Present",
    type: "Software engineering",
    description:
      "Started my professional journey as a Software Engineer, building a foundation for thoughtful product development, continuous learning, and meaningful impact.",
    highlights: ["Full-stack product thinking", "Practical software engineering", "Continuous professional growth"],
    image: "/assets/linkedin/software-engineer.jpg",
    link: socials.linkedin,
  },
  {
    role: "Machine Learning Engineering Intern",
    organization: "FlyRank AI",
    period: "July 2026",
    type: "Internship · AI / ML",
    description:
      "Selected for the FlyRank AI Internship Program to learn from a fast-moving team and contribute to impactful AI solutions for modern search and organic growth.",
    highlights: ["Machine learning engineering", "AI search and organic growth", "Hands-on team learning"],
    image: "/assets/linkedin/flyrank-internship.jpg",
    link: socials.linkedin,
  },
];

export type Achievement = {
  title: string;
  org: string;
  place: string | null;
  image?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "IOY Ambassador 2026–2027",
    org: "International Organization of Youth",
    place: "Delegate · IYC14, New York City · Sep 22–25, 2026",
    image: "/assets/linkedin/ioy-delegate.jpg",
    link: socials.linkedin,
  },
  {
    title: "Community Volunteer",
    org: "Bangladesh Red Crescent Society (BDRCS)",
    place: "Rajshahi City RC Unit",
    image: "/assets/linkedin/bdrcs-volunteer.jpg",
    link: socials.linkedin,
  },
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
    title: "Software Engineering Roles",
    description: "Open to thoughtful software engineering work across full-stack development, AI/ML, and product teams.",
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
