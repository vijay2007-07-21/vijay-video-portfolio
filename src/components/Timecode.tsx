interface TimecodeProps {
  code: string; // e.g. "00:01"
  label: string;
}

// Signature structural device: every section is framed like a marker on a
// timeline, the way you'd label an edit point on a scrubber — because the
// content itself is a timeline of work.
export default function Timecode({ code, label }: TimecodeProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono-tc text-sm text-accent">{code}</span>
      <span className="h-px w-8 bg-line" />
      <span className="font-mono-tc text-xs tracking-[0.25em] uppercase text-ink-muted">
        {label}
      </span>
    </div>
  );
}
