type VisualPlaceholderProps = {
  label: string;
  sublabel?: string;
  tone?: string;
  className?: string;
};

const toneStyles = {
  navy: "from-navy via-[#26384f] to-[#5f748c]",
  denim: "from-[#14365d] via-[#1f5f8d] to-[#9eb9cf]",
  gold: "from-[#7c6638] via-gold to-[#f0dfb6]",
  slate: "from-[#4b5563] via-[#94a3b8] to-[#e2e8f0]"
};

export function VisualPlaceholder({
  label,
  sublabel,
  tone = "slate",
  className = ""
}: VisualPlaceholderProps) {
  const gradient = tone in toneStyles ? toneStyles[tone as keyof typeof toneStyles] : toneStyles.slate;

  return (
    <div
      className={`relative isolate flex h-full min-h-56 overflow-hidden rounded-lg bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
      <div className="relative mt-auto p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Image Placeholder
        </p>
        <p className="mt-2 text-xl font-bold leading-tight">{label}</p>
        {sublabel && <p className="mt-2 text-sm leading-6 text-white/75">{sublabel}</p>}
      </div>
    </div>
  );
}
