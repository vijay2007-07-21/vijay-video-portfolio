import Timecode from "./Timecode";

// EDIT ME — list only the software you actually use.
const TOOLS = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "CapCut",
  "Photoshop",
];

export default function Tools() {
  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Timecode code="00:05" label="Tools" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-line rounded-xl overflow-hidden">
          {TOOLS.map((t) => (
            <div
              key={t}
              className="bg-bg px-5 py-8 flex items-center justify-center text-center hover:bg-bg-card transition-colors"
            >
              <span className="font-mono-tc text-xs uppercase tracking-[0.1em] text-ink-muted">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
