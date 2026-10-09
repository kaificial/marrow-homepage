import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function SectionHeading({ id, children, aside }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <h2 id={`${id}-heading`} className="text-title font-semibold text-balance">
        {children}
      </h2>
      {aside}
    </div>
  );
}
