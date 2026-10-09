import { INSTALL_COMMAND, install } from "@/content/copy";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CopyCommand } from "@/components/ui/CopyCommand";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Install() {
  return (
    <Section id="install" label={install.eyebrow}>
      <SectionHeading
        id="install"
        aside={<ArrowLink href={install.docsLink.href} label={install.docsLink.label} />}
      >
        {install.heading}
      </SectionHeading>

      <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-3">
        <div className="bg-bg p-6 sm:p-7 lg:col-span-2">
          <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">{install.body}</p>
          <div className="mt-6 max-w-lg">
            <CopyCommand command={INSTALL_COMMAND} />
          </div>
        </div>
        <dl className="min-w-0 bg-bg p-6 sm:p-7">
          {install.platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-baseline justify-between gap-6 border-b border-dashed border-line py-2.5 first:pt-0 last:border-0 last:pb-0"
            >
              <dt className="text-[0.875rem] font-medium">{platform.name}</dt>
              <dd className="text-right text-[0.8125rem] text-muted">{platform.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
