import type { Metadata } from "next";
import { site, stubs } from "@/content/copy";
import { StubPage } from "@/components/layout/StubPage";

export const metadata: Metadata = {
  title: `${stubs.explorer.title}. ${site.name}`,
  description: stubs.explorer.body,
};

export default function ExplorerPage() {
  return (
    <StubPage
      eyebrow={stubs.explorer.title}
      heading={stubs.explorer.heading}
      body={stubs.explorer.body}
    />
  );
}
