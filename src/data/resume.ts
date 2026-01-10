import { Globe, Cpu, Server, Terminal } from 'lucide-react';

export const PROFILE = {
    name: "Utukuru Bharath Kumar",
    role: "Full Stack Developer",
    email: "Bharathkumar010101@gmail.com",
    phone: "8330960967",
    location: "India",
    linkedin: "https://www.linkedin.com/in/bharath-kumar-utukuru-6ab491246/",
    github: "https://github.com/bharathkumar010101",
    summary: "Full Stack Software Engineer with hands-on experience building and deploying production-scale web applications using React, Next.js, Node.js, Express, MongoDB, and RESTful APIs. Proven contributor to high-traffic applications serving 700,000+ users, with experience in role-based access control (RBAC), authentication, real-time systems, and scalable frontend architectures. Strong foundation in Data Structures & Algorithms, system optimization, and collaborative development using Git-based workflows."
};

export const SKILLS = [
    { category: "Frontend", items: ["React.js", "Next.js (App Router)", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"], icon: Globe },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Auth (RBAC)", "MongoDB", "SQL"], icon: Server },
    { category: "Real-Time / Core", items: ["Socket.IO", "WebSockets", "Data Structures", "Algorithms", "Async Programming"], icon: Cpu },
    { category: "Languages / Tools", items: ["Python", "C++", "Git", "GitHub", "Vercel", "Render", "CodeMirror"], icon: Terminal }
];

export const EXPERIENCE = [
    {
        company: "Improved Tube | NexGen Studio Dev",
        role: "Software Developer — Open source Contributor",
        period: "Oct 2025 – Present",
        description: "Contributing to production web applications.",
        achievements: [
            "Engineered a Playback Speed Button in Improved Tube’s core player UI, enabling instant speed control for 700k+ users; modified 8 core files with zero regressions and applied efficient algorithms for smooth performance.",
            "Designed, implemented, and merged an Admin Role Management module for NexGen Studio Dev, enforcing role-based access control through protected routing and admin lifecycle management."
        ],
        links: [
            { label: "GitHub-1", url: "https://github.com/code-charity/youtube/pull/3202" },
            { label: "GitHub-2", url: "https://github.com/NexGenStudioDev/ciitm-frontend/pull/245" }
        ]
    },
];

export const PROJECTS = [
    {
        title: "Collaborative Code Editor",
        tech: ["React", "Node.js", "Socket.IO", "CodeMirror"],
        description: "Real-time collaborative editor supporting multiple concurrent users. Implemented Socket.IO for room-based collaboration and user presence tracking. Added Syntax highlighting, live chat, multi-language support (C, C++, Java, Python) via Piston API.",
        links: { demo: "https://collaborative-code-editor-puce.vercel.app/", github: "https://github.com/bharathkumar39293/collaborative-code-editor" }
    },
    {
        title: "Resume Mate AI-Powered Resume Builder",
        tech: ["React 18", "Node", "Express", "Redux", "MongoDB", "Generative AI"],
        description: "Customizable resume templates with real-time preview. Integrated the Google Gemini API to generate AI-based resume summaries.",
        links: { demo: "https://resume-mate-nu.vercel.app/", github: "https://github.com/bharathkumar39293/ResumeMate" }
    },
    {
        title: "Campaign Management Dashboard",
        tech: ["React", "API Design", "Data Visualization"],
        description: "Built a campaign management dashboard with search, filtering, pagination, and bulk actions. Designed data models and APIs to compute and display performance metrics including CTR, CPC, CPA, impressions, and conversions. Optimized frontend rendering.",
        links: { demo: "https://campaign-dashboard-psi.vercel.app/", github: "https://github.com/bharathkumar39293/campaign-dashboard" }
    }
];

export const EDUCATION = [
    {
        institution: "Hindustan Institute of Science and Technology (HITS)",
        degree: "B.Tech in Computer Science Engineering",
        period: "2022 – 2026",
        details: "CGPA: 8.05"
    }
];

export const CERTIFICATIONS = [
    "2nd Prize — Code Arena Coding Competition, HITS (150–200 participants)",
    "Hackathon Participant — Code4EdTech built a Flask-based resume–JD matching application."
];
