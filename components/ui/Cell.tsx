import type { ReactNode } from "react";
import Link from "next/link";
import { Bracket } from "./Bracket";

type CellProps = {
  index?: string;
  title: string;
  body: string;
  tag?: string;
  href?: string;
  visual?: ReactNode;
};

export function Cell({ index, title, body, tag, href, visual }: CellProps) {
  const footer = (tag || href) && (
    <div className="mt-6 flex items-center justify-between gap-4">
      {tag ? <Bracket>{tag}</Bracket> : <span />}
      {href && (
        <span
          aria-hidden="true"
          className="text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-brand-ink"
        >
          &rarr;
        </span>
      )}
    </div>
  );

  const content = (
    <>
      {visual && <div className="border-b border-line">{visual}</div>}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {index && (
          <p className="mb-3 font-mono text-[0.6875rem] tracking-[0.14em] text-muted">{index}</p>
        )}
        <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em]">{title}</h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{body}</p>
        <div className="mt-auto">{footer}</div>
      </div>
    </>
  );

  if (!href) {
    return (
      <div className="flex flex-col bg-bg">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col bg-bg transition-colors hover:bg-surface"
    >
      {content}
    </Link>
  );
}
