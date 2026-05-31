type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-muted">{text}</p>}
    </div>
  );
}
