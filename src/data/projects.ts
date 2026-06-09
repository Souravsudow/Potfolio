export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  tech: { name: string; color: string }[];
  link: string;
  previewImage: string;
}

export const projects: ProjectData[] = [
  {
    slug: "mockstar-ai-interview-platform",
    title: "Mockstar – AI Interview Platform",
    description: "Developed AI interview platform with real-time feedback",
    tech: [
      { name: "TypeScript", color: "blue" },
      { name: "React", color: "cyan" },
      { name: "Next.js", color: "neutral" },
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "amber" },
      { name: "AWS", color: "orange" }
    ],
    link: "https://www.mockstar.in",
    previewImage: "/images/Screenshot 2026-06-05 at 3.39.57 PM.png"
  },
  {
    slug: "lerno-ai-learning-platform",
    title: "LERNO – AI-Driven Learning Platform",
    description: "Developed personalized learning platform using machine learning.",
    tech: [
      { name: "React", color: "cyan" },
      { name: "TensorFlow", color: "yellow" },
      { name: "Node.js", color: "green" },
      { name: "FastAPI", color: "emerald" }
    ],
    link: "https://deployment-adaa.vercel.app",
    previewImage: "/images/Screenshot 2026-06-05 at 3.44.21 PM.png"
  },
  {
    slug: "make-it-sours-ai-resume-formatter",
    title: "Make It Sour's – AI Resume Formatter",
    description: "Developed AI-powered resume transformation and processing 🚀",
    tech: [
      { name: "Rails", color: "cyan" },
      { name: "Spotify API", color: "emerald" },
      { name: "JavaScript", color: "yellow" },
      { name: "Redis", color: "red" }
    ],
    link: "https://make-it-sour-ss.netlify.app",
    previewImage: "/images/Screenshot 2026-06-05 at 3.48.03 PM.png"
  }
];
