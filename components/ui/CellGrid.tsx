import type { ReactNode } from "react";

type CellGridProps = {
  children: ReactNode;
  /** Column classes for the grid. Cells are divided by hairlines, not gaps. */
  columns?: string;
};

export function CellGrid({ children, columns = "sm:grid-cols-2" }: CellGridProps) {
  return (
    <div className={`grid gap-px border border-line bg-line ${columns}`}>{children}</div>
  );
}
