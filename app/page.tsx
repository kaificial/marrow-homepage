import { ExplorerTeaser } from "@/components/sections/ExplorerTeaser";
import { Findings } from "@/components/sections/Findings";
import { Hero } from "@/components/sections/Hero";
import { Install } from "@/components/sections/Install";
import { Method } from "@/components/sections/Method";
import { Privacy } from "@/components/sections/Privacy";
import { Problem } from "@/components/sections/Problem";
import { ScrollBand } from "@/components/sections/ScrollBand";
import { RuledBand } from "@/components/ui/RuledBand";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ScrollBand />
      <Problem />
      <RuledBand />
      <Method />
      <RuledBand />
      <Privacy />
      <RuledBand />
      <Findings />
      <RuledBand />
      <ExplorerTeaser />
      <RuledBand />
      <Install />
    </>
  );
}
