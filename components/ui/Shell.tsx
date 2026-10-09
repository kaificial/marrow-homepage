import type { ReactNode } from "react";

/**
 * The page sits between two solid rails. The right dashed rail runs the whole
 * document; the left one is drawn per block by Gutter.
 */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[82rem] border-x border-line">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[var(--rail)] hidden border-r border-dashed border-line lg:block"
      />
      {children}
    </div>
  );
}
