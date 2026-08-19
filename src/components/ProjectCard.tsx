import { useRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.button
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group relative text-left rounded-xl overflow-hidden border border-line bg-bg-card focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, #1c1c20, #0e0e10 55%, #1a1013)",
          }}
        />
        <video
          ref={videoRef}
          src={project.video}
          poster={project.thumbnail || undefined}
          muted
          loop
          playsInline
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="relative w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute top-4 left-4 font-mono-tc text-[10px] uppercase tracking-[0.2em] text-ink-muted px-2.5 py-1 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm">
          {project.category}
        </div>

        {/* play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full border border-white/25 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-accent">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M15 9L0.75 17.3301L0.75 0.669873L15 9Z" fill="#F3F1EC" />
            </svg>
          </span>
        </div>

        <div className="absolute left-4 bottom-4 right-4">
          <h3 className="font-display font-semibold text-lg leading-snug">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
