import type { Metadata } from "next";
import { site, stubs } from "@/content/copy";
import { StubPage } from "@/components/layout/StubPage";

export const metadata: Metadata = {
  title: `${stubs.docs.title}. ${site.name}`,
  description: stubs.docs.body,
};

export default function DocsPage() {
  return (
    <StubPage
      eyebrow={stubs.docs.title}
      heading={stubs.docs.heading}
      body={stubs.docs.body}
    />
  );
}
