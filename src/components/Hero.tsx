import { motion } from "framer-motion";
import { featuredProject } from "../data/projects";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pb-20 pt-32"
    >
      {/* ambient cinematic light */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(255,48,73,0.18), transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(108,76,241,0.15), transparent 60%), #0a0a0c",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8 font-mono-tc text-xs uppercase tracking-[0.25em] text-ink-muted"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Video Editor — Reel Rolling
        </motion.div>

        <h1 className="font-display font-bold text-balance text-[13vw] leading-[0.95] md:text-[6.2vw] md:leading-[0.95] tracking-tight max-w-5xl">
          {"Turning Ideas Into".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className="inline-block mr-4"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
            className="inline-block italic text-accent"
          >
            Visual Stories.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-md text-ink-muted text-base md:text-lg"
        >
          Video editor &amp; creative content creator crafting cinematic,
          engaging and scroll-stopping videos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3.5 rounded-full bg-accent text-bg font-medium text-sm hover:bg-ink transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full border border-line font-medium text-sm hover:border-ink transition-colors"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>

      {/* featured preview strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="max-w-7xl w-full mx-auto px-6 md:px-10 mt-14"
      >
        <div className="relative aspect-video md:aspect-[21/8] rounded-2xl overflow-hidden border border-line group">
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #17171b, #0a0a0c 60%, #1a1013)",
            }}
          >
            <span className="font-mono-tc text-[11px] text-ink-dim uppercase tracking-[0.2em]">
              Women's College Promotion
            </span>
          </div>
          <video
            className="relative w-full h-full object-cover"
            src={featuredProject.video}
            muted
            loop
            playsInline
            autoPlay
            onError={(e) => (e.currentTarget.style.display = "none")}
            poster={featuredProject.thumbnail || undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
          <div className="absolute left-5 bottom-4 font-mono-tc text-xs text-ink-muted uppercase tracking-[0.2em]">
            Featured — {featuredProject.title}
          </div>
          <div className="absolute right-5 bottom-4 font-mono-tc text-xs text-ink-muted">
            00:00:03:12
          </div>
        </div>
      </motion.div>
    </section>
  );
}
