type LuxHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  className?: string;
};

// 招商首页专用分区标题：衬线大标题 + 铜色引线眉标。
export function LuxHeading({ eyebrow, title, text, tone = "light", className = "mb-12" }: LuxHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={`max-w-4xl ${className}`} data-reveal>
      {eyebrow && (
        <p className={`mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] ${dark ? "text-gold" : "text-bronze"}`}>
          <span className={`h-px w-8 ${dark ? "bg-gold/70" : "bg-bronze/60"}`} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl font-bold leading-snug tracking-tight [overflow-wrap:anywhere] [word-break:keep-all] sm:text-[2.6rem] sm:leading-[1.25] ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 max-w-[42rem] text-base leading-8 ${dark ? "text-white/70" : "text-stone"}`}>{text}</p>}
    </div>
  );
}
