/**
 * Every string rendered on the site lives here. Components read from this file
 * and format nothing they were not given.
 */

/** Placeholders. Replace with the real command and URLs before launch. */
export const INSTALL_COMMAND = "curl -fsSL <INSTALL_URL> | sh";
export const GITHUB_URL = "https://github.com/<org>/marrow";
export const AUTHOR_NAME = "Kai Kim";
export const AUTHOR_URL = "https://github.com/<handle>";

export const site = {
  name: "Marrow",
  title: "Marrow. Measure how long code survives.",
  description:
    "Marrow tracks every line in a repository, written by a human or by an agent, and measures how long it survives. Fingerprinting is local. Source code never leaves the machine.",
} as const;

export const nav = {
  skipToContent: "Skip to content",
  links: [
    { label: "Study", href: "/study" },
    { label: "Explorer", href: "/explorer" },
    { label: "Docs", href: "/docs" },
    { label: "GitHub", href: GITHUB_URL, external: true },
  ],
  themeToggleLabel: "Switch color theme",
} as const;

export const hero = {
  eyebrow: "Kaplan-Meier survival analysis",
  headline: "Measure what happens to code after it is written.",
  lede: "Every AI coding tool reports output. Marrow reports outcome. It tracks every line in your repository and measures how long it survives, with human-written code as the control group.",
  installLabel: "Install",
  copyLabel: "Copy install command",
  copiedLabel: "Copied",
  secondaryLink: { label: "Read the study", href: "/study" },
  chartTitle: "Line survival by author",
  axisX: "days since written",
  axisY: "share of lines surviving",
} as const;

export const problem = {
  eyebrow: "The gap",
  heading: "Output is not outcome.",
  body: [
    "Agentic coding tools report lines suggested, lines accepted, and sessions run.",
    "None of them report whether the code was still there a month later.",
    "Churn is normal, so a number for agent code means nothing without the human baseline from the same repository.",
  ],
} as const;

export const method = {
  eyebrow: "Method",
  heading: "Four stages, all of them local.",
  stages: [
    {
      index: "01",
      tag: "Hooks and snapshots",
      name: "Capture",
      body: "Marrow hooks the file writes of agentic CLIs and snapshots the working tree. A large share of agent-written code is created and deleted before it is ever committed, and a tool that reads only commit history misses all of it. Git history supplies the long tail and the human control group.",
    },
    {
      index: "02",
      tag: "tree-sitter",
      name: "Fingerprint",
      body: "Every line is parsed with tree-sitter, normalized to its token sequence, and hashed on the machine it came from. Formatting and whitespace fall out of the normal form. Only hashes and metadata are stored or synced.",
    },
    {
      index: "03",
      tag: "Histogram diff",
      name: "Genealogy",
      body: "Lines are tracked across commits with histogram diff, monotonic sequence alignment inside changed hunks, and seed-and-extend move detection. A block moved to another file is recorded as a move. Reformatting, renames, and refactors are not counted as deletions.",
    },
    {
      index: "04",
      tag: "Kaplan-Meier",
      name: "Survival analysis",
      body: "Kaplan-Meier estimation produces a survival curve per cohort. Lines still alive at measurement time are censored, not averaged over. A hazard model ranks which lines are most likely to be short-lived.",
    },
  ],
} as const;

export const privacy = {
  eyebrow: "Privacy",
  heading: "Source code never leaves the device.",
  body: [
    "Marrow reads your repository locally. It stores a hash of each normalized line and a small set of metadata about it.",
    "There is no upload of file contents, no upload of diffs, and no telemetry on what you wrote. When you sync to the dashboard or the GitHub App, the record below is what moves.",
  ],
  recordCaption:
    "One stored line record. The hash covers the normalized token sequence. The text it came from is never stored or transmitted.",
} as const;

export const findings = {
  eyebrow: "Findings",
  heading: "Early results.",
  lede: "Three results from the study. Sample, methodology, and limitations are in the full write-up.",
  link: { label: "Read the study", href: "/study" },
  chartTitle: "Median survival by author",
} as const;

export const explorer = {
  eyebrow: "Explorer",
  heading: "Browse public repositories.",
  body: [
    "Survival data precomputed on well-known open source repositories. No install and no account.",
    "Public history carries no reliable author label, so these repositories are measured as a single cohort. The agent and human comparison requires running Marrow on your own repository.",
  ],
  link: { label: "Open the explorer", href: "/explorer" },
  columns: {
    repository: "Repository",
    language: "Language",
    lines: "Lines tracked",
    halfLife: "Half-life",
  },
} as const;

export const install = {
  eyebrow: "Install",
  heading: "One command.",
  body: "Marrow runs as a CLI and serves its dashboard from localhost. Nothing is sent anywhere until you connect a sync target.",
  platforms: [
    { name: "macOS", detail: "Apple silicon and Intel" },
    { name: "Linux", detail: "x86-64 and arm64" },
    { name: "Windows", detail: "Through WSL 2" },
  ],
  docsLink: { label: "Read the docs", href: "/docs" },
} as const;

export const footer = {
  tagline: "Measure how long code survives.",
  groups: [
    {
      title: "Project",
      links: [
        { label: "GitHub", href: GITHUB_URL, external: true },
        { label: "Docs", href: "/docs" },
      ],
    },
    {
      title: "Data",
      links: [
        { label: "Study", href: "/study" },
        { label: "Explorer", href: "/explorer" },
      ],
    },
  ],
  authorPrefix: "Built by",
} as const;

export const scrollHint = "Scroll for the method";

export const sampleData = {
  badge: "sample data",
  badgeTitle:
    "These figures are placeholders. They are not measurements and will be replaced with study results.",
  tableSummary: "Accessible data table for the chart above.",
} as const;

export const stubs = {
  study: {
    title: "Study",
    heading: "The study is not published yet.",
    body: "The full write-up will cover the sample, the capture method, the censoring rules, the hazard model, and the limitations. Every figure on the landing page is a placeholder until it lands.",
  },
  docs: {
    title: "Docs",
    heading: "Documentation is not published yet.",
    body: "Installation, the hook setup for each supported agent CLI, the local dashboard, the sync targets, and the GitHub App will be documented here.",
  },
  explorer: {
    title: "Explorer",
    heading: "The explorer is not open yet.",
    body: "Precomputed survival curves for well-known public repositories, browsable without installing anything. The repository list on the landing page is a preview of the shape of it.",
  },
  backLink: { label: "Back to the landing page", href: "/" },
} as const;
