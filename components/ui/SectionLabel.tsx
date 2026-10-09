import { Bracket } from "./Bracket";
import { CornerTicks } from "./CornerTicks";
import { Gutter } from "./Gutter";

type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="relative border-y border-dashed border-line">
      <CornerTicks />
      <Gutter className="py-4">
        <Bracket tone="muted">{label}</Bracket>
      </Gutter>
    </div>
  );
}
