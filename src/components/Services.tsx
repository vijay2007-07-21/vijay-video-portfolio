import { motion } from "framer-motion";
import Timecode from "./Timecode";

const SERVICES = [
  {
    title: "Short-form Video Editing",
    desc: "Fast-paced, scroll-stopping edits built for Reels and Shorts.",
  },
  {
    title: "YouTube Video Editing",
    desc: "Long-form pacing, structure and retention-focused cuts.",
  },
  {
    title: "Cinematic Video Editing",
    desc: "Color, sound and rhythm treated like a short film, not a clip.",
  },
  {
    title: "AI Video Creation",
    desc: "AI-generated and AI-assisted video content, edited to feel intentional.",
  },
  {
    title: "Motion Graphics",
    desc: "Titles, transitions and overlays that add clarity, not clutter.",
  },
  {
    title: "Promotional Videos",
    desc: "Product and brand videos built around a single clear message.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Timecode code="00:06" label="Services" />
        <h2 className="font-display font-semibold text-3xl md:text-4xl mb-14 max-w-xl text-balance">
          How I can help.
        </h2>

        <div className="divide-y divide-line border-t border-b border-line">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group py-7 grid md:grid-cols-12 gap-4 md:items-center"
            >
              <span className="md:col-span-1 font-mono-tc text-xs text-ink-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 font-display text-xl md:text-2xl group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="md:col-span-7 text-ink-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
