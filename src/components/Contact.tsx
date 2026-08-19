import { motion } from "framer-motion";
import Timecode from "./Timecode";

// EDIT ME — replace with your real contact details before deploying.
const CONTACT = {
  email: "morlavijay16@gmail.com",
  whatsapp: "https://wa.me/916305894664",
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 border-t border-line relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(255,48,73,0.14), transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="flex justify-center">
          <Timecode code="00:08" label="Contact" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-4xl md:text-6xl text-balance"
        >
          Have a video in mind?
        </motion.h2>
        <p className="mt-5 text-ink-muted text-lg max-w-lg mx-auto">
          Let's turn your idea into something people want to watch.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="px-6 py-3.5 rounded-full bg-accent text-bg font-medium text-sm hover:bg-ink transition-colors"
          >
            Email Me
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full border border-line font-medium text-sm hover:border-ink transition-colors"
          >
            WhatsApp Me
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="px-6 py-3.5 rounded-full border border-line font-medium text-sm hover:border-ink transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
