import type { ReactNode } from "react";
import { DashedRail } from "./DashedRail";

type GutterProps = {
  children: ReactNode;
  className?: string;
  /** Set false to run content past this block without the left rail. */
  rail?: boolean;
};

/** Holds content inside the rails and draws the left one behind it. */
export function Gutter({ children, className = "", rail = true }: GutterProps) {
  return (
    <div className={`relative px-5 sm:px-8 lg:px-[var(--rail-content)] ${className}`}>
      {rail && <DashedRail />}
      {children}
    </div>
  );
}
