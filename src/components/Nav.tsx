import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* scrubber progress bar — the site's own playhead */}
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-[2px] bg-accent"
      />
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-bg/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-bold tracking-tight text-lg">
            VIJAY<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-mono-tc text-xs tracking-[0.15em] uppercase text-ink-muted">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 font-mono-tc text-xs uppercase tracking-[0.15em] border border-line px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-b border-line px-6 py-6">
          <ul className="flex flex-col gap-5 font-mono-tc text-sm uppercase tracking-[0.15em] text-ink-muted">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
