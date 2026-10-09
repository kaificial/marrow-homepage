import type { ReactNode } from "react";
import { Gutter } from "./Gutter";
import { SectionLabel } from "./SectionLabel";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  /** Set when the children already draw their own rules to the shell edge. */
  bleed?: boolean;
};

export function Section({ id, label, children, bleed = false }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} data-theme-box="">
      <SectionLabel label={label} />
      {bleed ? children : <Gutter className="py-10 sm:py-14">{children}</Gutter>}
    </section>
  );
}
