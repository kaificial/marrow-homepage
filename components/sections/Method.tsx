import { method } from "@/content/copy";
import { Cell } from "@/components/ui/Cell";
import { CellGrid } from "@/components/ui/CellGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Method() {
  return (
    <Section id="method" label={method.eyebrow}>
      <SectionHeading id="method">{method.heading}</SectionHeading>
      <div className="mt-10">
        <CellGrid>
          {method.stages.map((stage) => (
            <Cell
              key={stage.index}
              index={stage.index}
              title={stage.name}
              body={stage.body}
              tag={stage.tag}
            />
          ))}
        </CellGrid>
      </div>
    </Section>
  );
}
