import type { ReactNode } from "react";

type BracketProps = {
  children: ReactNode;
  tone?: "brand" | "muted";
  className?: string;
};

/** The [ label ] motif. Brackets are decorative and hidden from assistive tech. */
export function Bracket({ children, tone = "brand", className = "" }: BracketProps) {
  const color = tone === "brand" ? "text-brand-ink" : "text-muted";

  return (
    <span
      className={`font-mono text-[0.6875rem] tracking-[0.06em] ${color} ${className}`}
    >
      <span aria-hidden="true">[&nbsp;</span>
      {children}
      <span aria-hidden="true">&nbsp;]</span>
    </span>
  );
}
