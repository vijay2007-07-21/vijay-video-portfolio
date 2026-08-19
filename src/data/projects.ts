export type Category =
  | "Reels"
  | "YouTube"
  | "Cinematic"
  | "AI Video"
  | "Animation"
  | "Promotional"
  | "Storytelling";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  video: string;
  thumbnail: string;
  tools: string[];
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "Business Promotional Campaign",
    description:
      "A promotional video designed to showcase a business through engaging visuals, dynamic editing and clear storytelling.",
    category: "Promotional",
    video: "/videos/WhatsApp Video 2026-08-19 at 5.45.01 PM.mp4",
    thumbnail: "",
    tools: ["CapCut"],
    year: "2026",
  },

  {
    id: "proj-02",
    title: "Women's College Promotion",
    description:
      "A promotional video created to highlight a women's college, its environment and opportunities through engaging visual storytelling.",
    category: "Promotional",
    video: "/videos/lv_0_20260819171207 (1) (1).mp4",
    thumbnail: "",
    tools: ["CapCut"],
    year: "2026",
    featured: true,
  },

  {
    id: "proj-03",
    title: "Motivational Storytelling Edit",
    description:
      "A motivational video focused on inspiring viewers through powerful visuals, pacing, music and storytelling.",
    category: "Storytelling",
    video: "/videos/lv_0_20260819172850 (1) (1) (1).mp4",
    thumbnail: "",
    tools: ["CapCut"],
    year: "2026",
  },
];

export const featuredProject =
  projects.find((p) => p.featured) ?? projects[0];