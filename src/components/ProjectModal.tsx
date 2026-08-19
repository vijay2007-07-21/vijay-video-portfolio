import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "../data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 md:top-0 md:-right-12 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors"
            >
              ✕
            </button>

            <div className="rounded-xl overflow-hidden border border-line bg-bg-card">
              <div className="relative aspect-video bg-black">
                <video
                  src={project.video}
                  poster={project.thumbnail || undefined}
                  controls
                  autoPlay
                  playsInline
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-mono-tc text-xs uppercase tracking-[0.2em] text-accent mb-2">
                    {project.category} · {project.year}
                  </div>
                  <h3 className="font-display font-semibold text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-ink-muted max-w-lg">
                    {project.description}
                  </p>
                </div>
                {project.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2 max-w-[220px] justify-end">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="font-mono-tc text-[10px] uppercase tracking-wide border border-line rounded-full px-2.5 py-1 text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
