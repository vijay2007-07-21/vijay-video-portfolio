import { motion } from "framer-motion";
import Timecode from "./Timecode";

const SKILLS = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Transitions",
  "Sound Design",
  "Visual Effects",
  "Short-form Content",
  "Storytelling",
  "AI Video Creation",
  "Thumbnail Design",
  "Social Media Content",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Timecode code="00:04" label="Skills" />
        <h2 className="font-display font-semibold text-3xl md:text-4xl mb-14 max-w-xl text-balance">
          Creative editing that makes every frame count.
        </h2>

        <div className="flex flex-wrap gap-x-3 gap-y-4">
          {SKILLS.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group font-display text-2xl md:text-4xl text-ink-dim hover:text-ink transition-colors cursor-default"
            >
              {s}
              {i < SKILLS.length - 1 && (
                <span className="text-accent mx-3 md:mx-4">/</span>
              )}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
