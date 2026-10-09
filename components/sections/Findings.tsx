import { findings } from "@/content/copy";
import { findingsList, halfLifeComparison, headlineStat } from "@/content/sample-data";
import { ComparisonBars } from "@/components/chart/ComparisonBars";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";

export function Findings() {
  return (
    <Section id="findings" label={findings.eyebrow}>
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div className="min-w-0">
          <h2 id="findings-heading" className="text-title font-semibold text-balance">
            {findings.heading}
          </h2>
          <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">
            {findings.lede}
          </p>
        </div>
        <p className="flex flex-col items-start sm:items-end">
          <span
            aria-hidden="true"
            className="text-outline font-mono text-[clamp(3.5rem,9vw,6rem)] leading-none font-semibold tracking-[-0.03em]"
          >
            {headlineStat.value}
          </span>
          <span className="mt-2 font-mono text-[0.6875rem] tracking-[0.08em] text-muted">
            {headlineStat.label}
          </span>
        </p>
      </div>

      <ol className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-3">
        {findingsList.map((finding) => (
          <li key={finding.id} className="flex flex-col bg-bg p-6 sm:p-7">
            <p className="font-mono text-[1.625rem] tracking-[-0.02em] text-brand-ink">
              {finding.value}
            </p>
            <h3 className="mt-3 text-[1rem] font-semibold tracking-[-0.01em] text-balance">
              {finding.claim}
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{finding.detail}</p>
            <p className="mt-auto pt-6 font-mono text-[0.6875rem] leading-relaxed text-muted">
              {finding.basis}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10 max-w-2xl">
        <ComparisonBars chart={halfLifeComparison} />
        <div className="mt-6">
          <ArrowLink href={findings.link.href} label={findings.link.label} />
        </div>
      </div>
    </Section>
  );
}
