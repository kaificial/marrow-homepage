import type { Metadata } from "next";
import { site, stubs } from "@/content/copy";
import { StubPage } from "@/components/layout/StubPage";

export const metadata: Metadata = {
  title: `${stubs.study.title}. ${site.name}`,
  description: stubs.study.body,
};

export default function StudyPage() {
  return (
    <StubPage
      eyebrow={stubs.study.title}
      heading={stubs.study.heading}
      body={stubs.study.body}
    />
  );
}
