import { useMemo, useState } from "react";
import Timecode from "./Timecode";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Category, type Project } from "../data/projects";

const CATEGORIES: (Category | "All")[] = [
  "All",
  "Reels",
  "YouTube",
  "Cinematic",
  "AI Video",
  "Animation",
  "Promotional",
  "Storytelling",
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <Timecode code="00:01" label="Selected Work" />
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-balance max-w-xl">
              A collection of videos I've created and edited.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-mono-tc text-[11px] uppercase tracking-[0.15em] px-3.5 py-2 rounded-full border transition-colors ${
                  filter === c
                    ? "border-accent text-accent"
                    : "border-line text-ink-muted hover:text-ink hover:border-ink-dim"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
