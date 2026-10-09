import { privacy } from "@/content/copy";
import { storedRecordExample } from "@/content/sample-data";
import { RecordBlock } from "@/components/ui/RecordBlock";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Privacy() {
  return (
    <Section id="privacy" label={privacy.eyebrow}>
      <SectionHeading id="privacy">{privacy.heading}</SectionHeading>
      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="min-w-0 space-y-4 lg:col-span-5">
          {privacy.body.map((line) => (
            <p key={line} className="text-[0.9375rem] leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
        <div className="min-w-0 lg:col-span-7">
          <RecordBlock
            record={storedRecordExample}
            title="stored line record"
            caption={privacy.recordCaption}
          />
        </div>
      </div>
    </Section>
  );
}
