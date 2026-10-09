import Link from "next/link";
import { site } from "@/content/copy";
import { Mark } from "./Mark";

type WordmarkProps = {
  size?: number;
  /** Drops the word on very narrow viewports so the nav still fits at 320px. */
  compact?: boolean;
};

export function Wordmark({ size = 22, compact = false }: WordmarkProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 text-ink">
      <Mark size={size} className="text-brand" />
      <span
        className={`text-[0.9375rem] font-semibold tracking-[-0.02em] ${
          compact ? "hidden sm:inline" : ""
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
