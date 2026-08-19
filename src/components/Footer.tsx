// EDIT ME — replace with your real social URLs.
const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/vijay_thoughts__?igsh=MWFidGV6bG1zamdoZw==" },
  { label: "YouTube", href: "https://youtube.com/@m.vaitec-h?si=gsbXfrinbEF0dH4Y" },
  { label: "LinkedIn", href: "linkedin.com/in/morla-vijay-5a3790383" },
  { label: "GitHub", href: "https://github.com/vijay2007-07-21" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono-tc text-xs uppercase tracking-[0.15em] text-ink-dim text-center md:text-left">
          Vijay — Video Editor &amp; Creative Creator
          <br className="md:hidden" />
          <span className="md:ml-3">© 2026 All Rights Reserved.</span>
        </div>

        <ul className="flex items-center gap-6 font-mono-tc text-xs uppercase tracking-[0.15em] text-ink-muted">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
