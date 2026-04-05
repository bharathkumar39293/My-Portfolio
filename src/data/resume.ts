import { Globe, Cpu, Server, Terminal, Shield } from 'lucide-react';

export const PROFILE = {
    name: "Bharath Kumar",
    role: "Systems & SDK Engineer",
    email: "Bharathkumar010101@gmail.com",
    phone: "8330960967",
    location: "India",
    linkedin: "https://www.linkedin.com/in/bharath-kumar-utukuru-6ab491246/",
    github: "https://github.com/bharathkumar39293",
    summary: "Systems & SDK Engineer obsessed with the \"invisible\" parts of software—race conditions, command queues, and distributed state. Most of my work is focused on making client-side SDKs bulletproof and ensuring background job infrastructure can handle failures gracefully. I am a core contributor to top-tier dev-tools like Formbricks and Trigger.dev, shipping fixes for high-stakes infrastructure bugs. Experienced in distributed orchestration (idempotency, retries) and telemetry (ClickHouse, OpenTelemetry)."
};

export const SKILLS = [
    { category: "Infrastructure & Systems", items: ["Node.js", "PostgreSQL", "Redis", "ClickHouse", "OpenTelemetry", "Docker"], icon: Server },
    { category: "SDK Reliability", items: ["Race Condition Debugging", "Idempotency", "Command Queues", "Fail-Open Architectures", "Error Handling"], icon: Shield },
    { category: "Languages & Frameworks", items: ["TypeScript", "JavaScript (ES6+)", "Express.js", "React.js", "Next.js"], icon: Globe },
    { category: "Core & Algorithms", items: ["Data Structures", "Sliding Window", "Async Programming", "System Architecture"], icon: Cpu }
];

export const EXPERIENCE = [
    {
        company: "Trigger.dev | Formbricks | Improved Tube | NexGen Studio Dev",
        role: "Open Source Software Engineer & Core Contributor",
        period: "Oct 2025 – Present",
        description: "Focusing on SDK reliability, resolving complex race conditions, and contributing to production open-source applications reaching 700k+ users.",
        achievements: [
            "Trigger.dev: Reconciled trace lifecycles with the run engine to mitigate ClickHouse lag in real-time telemetry (PR #2874).",
            "Formbricks: Fixed SDK race conditions by preventing pre-init commands from permanently dropping during unstable initializations (PR #7226).",
            "Formbricks: Implemented DoS attack mitigation by adding string-length validation to userId injections (PR #7378).",
            "Formbricks: Debugged SDK error states and UI click-target matching, ensuring 0% data loss during data collection (PR #7202, #7327).",
            "Improved Tube: Engineered a Playback Speed Button in the core player UI, enabling instant speed control for 700k+ users; modified 8 core files with zero regressions.",
            "NexGen Studio Dev: Designed and implemented an Admin Role Management module enforcing RBAC."
        ],
        links: [
            { label: "Trigger.dev PRs", url: "https://github.com/triggerdotdev/trigger.dev/pulls?q=is%3Apr+author%3Abharathkumar39293" },
            { label: "Formbricks PRs", url: "https://github.com/formbricks/formbricks/pulls?q=is%3Apr+author%3Abharathkumar39293" },
            { label: "ImprovedTube PR", url: "https://github.com/code-charity/youtube/pull/3202" },
            { label: "NexGen PR", url: "https://github.com/NexGenStudioDev/ciitm-frontend/pull/245" }
        ]
    }
];

export const PROJECTS = [
    {
        title: "Rate Limiter SDK",
        tech: ["TypeScript", "Redis", "PostgreSQL", "Express", "Docker"],
        description: "Built a production-grade distributed Rate Limiting system and an accompanying Fail-Open Client SDK. Engineered a Sliding Window algorithm using Redis Sorted Sets to prevent burst attacks, and utilized asynchronous Postgres logging to offload metrics and preserve millisecond API response times.",
        links: { demo: "https://rate-limiter-sdk.vercel.app/", github: "https://github.com/bharathkumar39293/Rate-Limiter-SDK" }
    },
    {
        title: "WebhookDrop Queue Infrastructure",
        tech: ["TypeScript", "Message Queues", "Workers", "Render", "Vercel"],
        description: "Engineered an asynchronous message processing webhooks engine. Decoupled the ingestion API from the execution worker pool, allowing for reliable and scalable handling of third-party webhooks without synchronous processing delays.",
        links: { github: "https://github.com/bharathkumar39293/WebHookDrop" }
    },
    {
        title: "Collaborative Code Editor",
        tech: ["React", "Node.js", "Socket.IO", "CodeMirror"],
        description: "Real-time collaborative editor supporting multiple concurrent users with room-based collaboration. Built language compilation via Piston API.",
        links: { demo: "https://collaborative-code-editor-puce.vercel.app/", github: "https://github.com/bharathkumar39293/collaborative-code-editor" }
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
