import { stubs } from "@/content/copy";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Bracket } from "@/components/ui/Bracket";
import { Gutter } from "@/components/ui/Gutter";
import { SectionLabel } from "@/components/ui/SectionLabel";

type StubPageProps = {
  eyebrow: string;
  heading: string;
  body: string;
};

export function StubPage({ eyebrow, heading, body }: StubPageProps) {
  return (
    <div data-theme-box="">
      <SectionLabel label={eyebrow} />
      <Gutter className="flex min-h-[55vh] flex-col justify-center py-20">
        <div className="max-w-xl">
          <Bracket>Not published</Bracket>
          <h1 className="mt-5 text-title font-semibold text-balance">{heading}</h1>
          <p className="mt-5 text-lede text-muted">{body}</p>
          <div className="mt-8">
            <ArrowLink href={stubs.backLink.href} label={stubs.backLink.label} />
          </div>
        </div>
      </Gutter>
    </div>
  );
}
