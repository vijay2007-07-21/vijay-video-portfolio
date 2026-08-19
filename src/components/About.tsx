import { motion } from "framer-motion";
import Timecode from "./Timecode";

const STATS = [
  { value: "20+", label: "Videos Edited" },
  { value: "3+", label: "Projects Completed" },
  { value: "3+", label: "Creative Projects" },
  { value: "1+", label: "Years Editing" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-6">
        <div className="md:col-span-4">
          <Timecode code="00:02" label="About" />
          <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight text-balance">
            Turning ideas into{" "}
            <span className="text-accent">visual</span> stories.
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-ink-muted leading-relaxed"
          >I'm a Computer Science Engineering student and creative video editor passionate about turning ideas into engaging visual stories. I create promotional videos, motivational content, reels and AI-assisted videos, combining creativity, editing and technology to create content people want to watch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-14 grid grid-cols-2 gap-8"
          >
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-line pt-4">
                <div className="font-display font-bold text-3xl md:text-4xl text-ink">
                  {s.value}
                </div>
                <div className="mt-1 font-mono-tc text-xs uppercase tracking-[0.2em] text-ink-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
