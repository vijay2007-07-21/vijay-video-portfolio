import { motion } from "framer-motion";
import Timecode from "./Timecode";
import { featuredProject } from "../data/projects";

export default function Featured() {
  const p = featuredProject;
  return (
    <section className="py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 relative aspect-video rounded-xl overflow-hidden border border-line"
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(150deg, #1c1c20, #0e0e10 55%, #1a1013)" }}
          />
          <video
            src={p.video}
            poster={p.thumbnail || undefined}
            muted
            loop
            playsInline
            autoPlay
            onError={(e) => (e.currentTarget.style.display = "none")}
            className="relative w-full h-full object-cover"
          />
        </motion.div>

        <div className="md:col-span-5">
          <Timecode code="00:03" label="Featured Project" />

          <dl className="space-y-5">
            <div>
              <dt className="font-mono-tc text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                Project
              </dt>
              <dd className="font-display font-semibold text-2xl mt-1">{p.title}</dd>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <dt className="font-mono-tc text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                  Role
                </dt>
                <dd className="mt-1 text-ink-muted">Video Editor</dd>
              </div>
              <div>
                <dt className="font-mono-tc text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                  Type
                </dt>
                <dd className="mt-1 text-ink-muted">{p.category}</dd>
              </div>
            </div>
            <div>
              <dt className="font-mono-tc text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                Description
              </dt>
              <dd className="mt-1 text-ink-muted leading-relaxed">{p.description}</dd>
            </div>
            <div>
              <dt className="font-mono-tc text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                Tools
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono-tc text-[10px] uppercase border border-line rounded-full px-2.5 py-1 text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <a
            href="#work"
            className="mt-8 inline-flex items-center gap-2 font-mono-tc text-xs uppercase tracking-[0.15em] border-b border-accent text-accent pb-1 hover:gap-3 transition-all"
          >
            Watch Project →
          </a>
        </div>
      </div>
    </section>
  );
}
