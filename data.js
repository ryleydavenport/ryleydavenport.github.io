// ============================================================
// EDIT THIS FILE to update your site — no other changes needed.
// Add new projects to the top of `projects`, new wins to the
// top of `accomplishments`, and new roles to the top of `experience`.
// ============================================================

const PROFILE = {
  name: "Ryley Davenport",
  // Rotating titles in the hero typewriter
  titles: [
    "Solutions Engineering Leader",
    "Manager, Solution Engineering @ Thinkific",
    "Builder of High-Performing Teams",
    "Technical Storyteller",
  ],
  tagline:
    "I sit at the intersection of customer success, sales, product, and technical strategy — designing solutions across APIs, webhooks, SSO, and integrations while building teams that scale.",
  location: "Peterborough, Ontario, Canada",
  email: "ryley.davenport@gmail.com",
  linkedin: "https://www.linkedin.com/in/ryley-davenport-547a8682/",
  github: "https://github.com/ryleydavenport",
  about:
    "Dynamic leader with a proven track record driving 56% sales growth and building departments from the ground up. I lead the Solutions Engineering team at Thinkific, helping Thinkific Plus customers solve complex technical challenges. Before that, I spent five and a half years at Gravity (IGM Technology) growing from Support Specialist to Director of Customer Success — building the Customer Success, Customer Support, and Solution Engineering functions from scratch along the way.",
};

// ------------------------------------------------------------
// STATS — the animated counters in the hero.
// value: the number counted up to; prefix/suffix wrap it.
const stats = [
  { value: 100, prefix: "", suffix: "%", label: "Sales growth driven in one year" },
  { value: 2.3, prefix: "$", suffix: "M+", decimals: 1, label: "Average annual sales closed" },
  { value: 200, prefix: "", suffix: "+", label: "Enterprise & public sector clients" },
  { value: 400, prefix: "", suffix: "+", label: "Technical docs authored" },
];

// ------------------------------------------------------------
// PROJECTS — the section you'll update most often.
// status: "shipped" | "in-progress" | "planned"
const projects = [
  {
    title: "Live Sessions Hub — Zoom Integration",
    date: "2026",
    status: "shipped",
    tags: ["Next.js", "TypeScript", "OAuth 2.0", "Zoom API"],
    description:
      "A full Zoom-to-LMS integration: admins connect Zoom accounts, generate LMS links for meetings and webinars, and capture attendance. Engineered dual OAuth flows (Zoom + platform OIDC) that work seamlessly across custom domains and subdomains, and shipped a fix for a tricky Safari iframe sign-in loop.",
    link: "",
  },
  {
    title: "Assignment Grader",
    date: "2026",
    status: "shipped",
    tags: ["Next.js", "MongoDB", "OAuth/OIDC", "NextAuth"],
    description:
      "An assignment review system with two faces: an admin portal where graders sync, approve, and reject submissions, and a student portal with filtered views of graded work. Built on OAuth/OIDC with PKCE, with MongoDB persistence keeping both sides in sync.",
    link: "",
  },
  {
    title: "Solutions Hub Platform",
    date: "2026",
    status: "in-progress",
    tags: ["Next.js", "Kubernetes", "GitHub Actions", "AWS"],
    description:
      "The modular internal platform that hosts it all — a multi-service Next.js application where Solutions Engineers rapidly build, test, and validate custom integrations and POCs. Independent feature modules share core components, with CI/CD through GitHub Actions to Kubernetes.",
    link: "",
  },
  {
    title: "Lesson Timer",
    date: "2026",
    status: "shipped",
    tags: ["Next.js", "TypeScript", "OAuth"],
    description:
      "A learning-pacing module with its own install flow, OAuth handling, and help-center integration — built as a plug-in module on the Solutions Hub architecture.",
    link: "",
  },
  {
    title: "Personal Portfolio Site",
    date: "Jun 2026",
    status: "shipped",
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    description:
      "This site — an animated, data-driven portfolio with a liquid gradient canvas, interactive particles, and scroll-driven reveals. Updating it is a one-file edit.",
    link: "https://github.com/ryleydavenport",
  },
  // {
  //   title: "Project name",
  //   date: "Mon YYYY",
  //   status: "in-progress",
  //   tags: ["Tag1", "Tag2"],
  //   description: "One or two sentences on what it is and why it matters.",
  //   link: "https://...",
  // },
];

// ------------------------------------------------------------
// ACCOMPLISHMENTS — promotions, wins, talks, certs, milestones.
const accomplishments = [
  {
    date: "Jun 2026",
    title: "Promoted to Manager, Solution Engineering at Thinkific",
    detail:
      "Stepped into leading the Solutions Engineering team after nine months of building momentum as Team Lead.",
  },
  {
    date: "2025",
    title: "Drove 11% YoY gross revenue retention increase in six months",
    detail:
      "Built IGM's Customer Success department from the ground up, engaging over 200 enterprise and public sector clients.",
  },
  {
    date: "2024",
    title: "$2.3M+ in annual sales through custom technical solutions",
    detail:
      "Designed and presented customized, technically sophisticated product demos tailored to enterprise client needs — including a custom demonstration for the Texas Department of Transportation.",
  },
  {
    date: "2023",
    title: "56% record sales growth",
    detail:
      "Led solution engineering efforts delivering 40% revenue growth in year one and 56% in year two — IGM's highest sales figures to date.",
  },
  {
    date: "2021",
    title: "Built Customer Support from scratch",
    detail:
      "Created the support department, authored 400+ technical docs, and held average ticket resolution to 25 minutes across ~50 tickets a day.",
  },
  {
    date: "2020",
    title: "BSc Honors Computer Science — Honor Roll",
    detail:
      "Graduated from Wilfrid Laurier University, Honor Roll 2018–2020, while serving as varsity team captain and university ambassador.",
  },
];

// ------------------------------------------------------------
// EXPERIENCE
const experience = [
  {
    company: "Thinkific",
    location: "Remote (Vancouver, BC)",
    period: "Oct 2025 – Present",
    roles: [
      {
        title: "Manager, Solution Engineering",
        period: "Jun 2026 – Present",
        bullets: [
          "Lead the Solutions Engineering team helping Thinkific Plus customers solve complex technical challenges.",
          "Guide technical discovery, solution design, tailored demos, workshops, and enablement across APIs, webhooks, SSO, themes, integrations, and the app ecosystem.",
          "Coach and mentor team members, improve internal processes, and strengthen partnerships with Sales, Customer Success, Product, and Engineering.",
        ],
      },
      {
        title: "Solution Engineer Team Lead",
        period: "Oct 2025 – Jun 2026",
        bullets: [
          "Joined Thinkific to help lead a talented team making a difference in the e-learning space.",
          "Built and shipped custom integrations and solution prototypes on the team's internal Next.js platform.",
        ],
      },
    ],
  },
  {
    company: "Gravity (IGM Technology)",
    location: "Toronto, ON · Remote",
    period: "May 2020 – Oct 2025",
    roles: [
      {
        title: "Director of Customer Success — West",
        period: "Jul 2024 – Oct 2025",
        bullets: [
          "Built IGM's Customer Success team from the ground up, engaging 200+ clients and achieving an 11% YoY increase in gross revenue retention within six months.",
          "Created tailored business reviews and success plans to drive satisfaction and surface expansion opportunities.",
          "Collaborated with product and engineering to deliver ERP system integrations, facilitating RFPs and POCs.",
          "Trained and mentored new team members, fostering a high-performance culture.",
        ],
      },
      {
        title: "Director of Solution Engineers",
        period: "Nov 2021 – Jul 2024",
        bullets: [
          "Led solution engineering to 40% revenue growth in year one and 56% in year two — IGM's highest sales figures to date.",
          "Averaged $2.3M in annual sales through customized, technically sophisticated enterprise demos.",
          "Partnered with Account Executives on solution strategy and ran training on technical selling, objection handling, and market positioning.",
          "Landed major enterprise wins, including the Texas Department of Transportation.",
        ],
      },
      {
        title: "Solutions Engineer",
        period: "Jun 2021 – Nov 2022",
        bullets: [
          "Demonstrated the product to prospective clients, including on-site demos and in-person meetings.",
          "Researched industry trends to sharpen how the product was positioned and sold.",
        ],
      },
      {
        title: "Customer Support Manager & Documentation Specialist",
        period: "May 2020 – Sep 2021",
        bullets: [
          "Created IGM's Customer Support department from scratch, authoring 400+ technical documentation pieces.",
          "Maintained a 25-minute average ticket resolution time across ~50 daily tickets.",
          "Developed client training programs that accelerated time-to-value and reduced support demand.",
        ],
      },
    ],
  },
  {
    company: "Wilfrid Laurier University",
    location: "Waterloo, ON",
    period: "Sep 2017 – Apr 2020",
    roles: [
      {
        title: "Recruitment Ambassador",
        period: "Sep 2017 – Apr 2020",
        bullets: [
          "Showcased academic and athletic offerings to prospective students and families.",
          "Conducted campus tours and sports showcases as varsity team captain.",
        ],
      },
    ],
  },
];

// ------------------------------------------------------------
const education = [
  {
    school: "Wilfrid Laurier University",
    credential: "Bachelor of Science, Honors Computer Science",
    period: "Graduated April 2020",
    notes: "Honor Roll 2018–2020 · Varsity team captain",
  },
];

const skills = [
  "Pre-Sales Technical Strategy",
  "Custom Demo Development",
  "Solutions Engineering",
  "Client Onboarding & Enablement",
  "Cloud Platforms (AWS, SaaS)",
  "Salesforce & CRM",
  "APIs & Webhooks",
  "OAuth / SSO / OIDC",
  "Next.js & TypeScript",
  "Python",
  "Technical Documentation",
  "Collaborative Solution Selling",
  "Product Integrations",
  "Team Leadership",
  "Customer Success",
  "RFPs & POCs",
];
