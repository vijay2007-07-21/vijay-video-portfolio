import { motion } from "framer-motion";
import Timecode from "./Timecode";

const STEPS = [
  { tc: "00:00", title: "Understand", desc: "Understand the idea, audience and objective." },
  { tc: "00:01", title: "Edit", desc: "Build the story using cuts, pacing and visuals." },
  { tc: "00:02", title: "Enhance", desc: "Add color grading, sound design, motion graphics and effects." },
  { tc: "00:03", title: "Deliver", desc: "Export a polished video optimized for the target platform." },
];

export default function Process() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Timecode code="00:07" label="Process" />
        <h2 className="font-display font-semibold text-3xl md:text-4xl mb-16 max-w-xl text-balance">
          From brief to final export.
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="hidden md:block w-3 h-3 rounded-full bg-accent mb-9 relative z-10 ring-4 ring-bg" />
                <span className="font-mono-tc text-xs text-accent">{s.tc}</span>
                <h3 className="font-display text-2xl mt-2 mb-2">{s.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
