import type { ReactNode } from "react";
import { Bracket } from "@/components/ui/Bracket";
import { SampleDataBadge } from "@/components/ui/SampleDataBadge";

type ChartFrameProps = {
  title: string;
  caption?: string;
  children: ReactNode;
};

export function ChartFrame({ title, caption, children }: ChartFrameProps) {
  return (
    <figure className="border border-line bg-bg">
      <figcaption className="flex items-center justify-between gap-3 border-b border-dashed border-line px-4 py-2.5">
        <Bracket tone="muted">{title}</Bracket>
        <SampleDataBadge />
      </figcaption>
      <div className="px-4 py-5">{children}</div>
      {caption && (
        <p className="border-t border-dashed border-line px-4 py-2.5 font-mono text-[0.6875rem] text-muted">
          {caption}
        </p>
      )}
    </figure>
  );
}
