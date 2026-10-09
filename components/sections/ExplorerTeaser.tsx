import { explorer } from "@/content/copy";
import { explorerEntries } from "@/content/sample-data";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SampleDataBadge } from "@/components/ui/SampleDataBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDays, formatLineCount } from "@/lib/format";

export function ExplorerTeaser() {
  return (
    <Section id="explorer" label={explorer.eyebrow}>
      <SectionHeading
        id="explorer"
        aside={<ArrowLink href={explorer.link.href} label={explorer.link.label} />}
      >
        {explorer.heading}
      </SectionHeading>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-10">
        {explorer.body.map((line) => (
          <p key={line} className="text-[0.9375rem] leading-relaxed text-muted">
            {line}
          </p>
        ))}
      </div>

      <div className="mt-10 border border-line">
        <div className="flex items-center justify-end border-b border-dashed border-line px-4 py-2.5">
          <SampleDataBadge />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[0.8125rem]">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-4 py-3 font-medium text-muted">
                  {explorer.columns.repository}
                </th>
                <th scope="col" className="hidden px-4 py-3 font-medium text-muted sm:table-cell">
                  {explorer.columns.language}
                </th>
                <th
                  scope="col"
                  className="hidden px-4 py-3 text-right font-medium text-muted sm:table-cell"
                >
                  {explorer.columns.lines}
                </th>
                <th scope="col" className="px-4 py-3 text-right font-medium text-muted">
                  {explorer.columns.halfLife}
                </th>
              </tr>
            </thead>
            <tbody>
              {explorerEntries.map((entry) => (
                <tr key={entry.slug} className="border-b border-dashed border-line last:border-0">
                  <th scope="row" className="px-4 py-3.5 font-mono font-normal">
                    {entry.slug}
                  </th>
                  <td className="hidden px-4 py-3.5 text-muted sm:table-cell">{entry.language}</td>
                  <td className="hidden px-4 py-3.5 text-right font-mono tabular-nums text-muted sm:table-cell">
                    {formatLineCount(entry.linesTracked)}
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono tabular-nums">
                    {formatDays(entry.halfLifeDays)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
