import { IS_SAMPLE_DATA } from "@/content/sample-data";
import { sampleData } from "@/content/copy";

/**
 * Rendered by the figure frames themselves rather than by their callers, so a
 * chart cannot ship without the badge while the sample flag is set.
 */
export function SampleDataBadge() {
  if (!IS_SAMPLE_DATA) return null;

  return (
    <span
      title={sampleData.badgeTitle}
      className="inline-flex shrink-0 items-center gap-1.5 border border-line-strong px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted"
    >
      <span aria-hidden="true" className="size-1.5 bg-brand" />
      {sampleData.badge}
    </span>
  );
}
