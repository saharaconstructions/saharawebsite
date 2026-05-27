interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", inverted }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${inverted ? "text-accent" : "text-primary"}`}>
          <span className={`h-px w-8 ${inverted ? "bg-accent" : "bg-primary"}`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-3xl md:text-5xl font-bold leading-[1.1] ${inverted ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${inverted ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
