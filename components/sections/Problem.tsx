import { problem } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Problem() {
  return (
    <Section id="problem" label={problem.eyebrow}>
      <SectionHeading id="problem">{problem.heading}</SectionHeading>
      <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
        {problem.body.map((line, index) => (
          <li key={line} className="bg-bg p-6 sm:p-7">
            <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-brand-ink">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed">{line}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
