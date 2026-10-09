/**
 * Every number rendered on the site comes from this file.
 *
 * While IS_SAMPLE_DATA is true the figures are placeholders and each chart
 * renders a visible badge saying so. Replace the values with study output and
 * set the flag to false. Nothing else needs to change.
 */
export const IS_SAMPLE_DATA = true;

export type Cohort = "agent" | "human";

export type SurvivalPoint = {
  /** Days since the line was first written. */
  t: number;
  /** Kaplan-Meier survival probability, 0 to 1, non-increasing. */
  s: number;
  /** Lines still alive and still under observation at t. */
  atRisk: number;
  /** Lines censored in the interval ending at t. */
  censored: number;
};

export type SurvivalSeries = {
  cohort: Cohort;
  label: string;
  /** First t where survival crosses 0.5. Null when the curve never does. */
  halfLifeDays: number | null;
  linesObserved: number;
  /** Must begin at { t: 0, s: 1 }. */
  points: SurvivalPoint[];
};

export type SurvivalCurve = {
  id: string;
  /** Describes the sample the curve was computed over. */
  scope: string;
  maxDays: number;
  series: SurvivalSeries[];
};

export type Finding = {
  id: string;
  /** Preformatted for display so no component invents a rounding. */
  value: string;
  claim: string;
  detail: string;
  basis: string;
};

export type ComparisonChart = {
  id: string;
  title: string;
  unit: string;
  /** Axis ceiling, so bars do not rescale when the data changes. */
  max: number;
  bars: { label: string; value: number; cohort: Cohort }[];
};

export type ExplorerEntry = {
  slug: string;
  language: string;
  linesTracked: number;
  halfLifeDays: number;
  window: string;
};

export type StoredRecord = {
  line_hash: string;
  file_hash: string;
  repo_id: string;
  lang: string;
  token_count: number;
  author: Cohort;
  agent_id: string | null;
  born_at: string;
  died_at: string | null;
  event: "alive" | "deleted" | "rewritten";
};

export const heroCurve: SurvivalCurve = {
  id: "survival-by-author",
  scope: "One repository, 14 months of history",
  maxDays: 150,
  series: [
    {
      cohort: "agent",
      label: "Agent-written",
      halfLifeDays: 9,
      linesObserved: 128400,
      points: [
        { t: 0, s: 1.0, atRisk: 128400, censored: 0 },
        { t: 1, s: 0.938, atRisk: 120400, censored: 0 },
        { t: 2, s: 0.881, atRisk: 113050, censored: 0 },
        { t: 3, s: 0.836, atRisk: 107310, censored: 0 },
        { t: 4, s: 0.782, atRisk: 100380, censored: 60 },
        { t: 6, s: 0.703, atRisk: 90260, censored: 120 },
        { t: 7, s: 0.641, atRisk: 82290, censored: 180 },
        { t: 8, s: 0.572, atRisk: 73410, censored: 240 },
        { t: 9, s: 0.498, atRisk: 63880, censored: 310 },
        { t: 12, s: 0.441, atRisk: 56500, censored: 410 },
        { t: 16, s: 0.392, atRisk: 50120, censored: 620 },
        { t: 21, s: 0.351, atRisk: 44780, censored: 980 },
        { t: 30, s: 0.309, atRisk: 39200, censored: 1840 },
        { t: 45, s: 0.271, atRisk: 33900, censored: 3120 },
        { t: 60, s: 0.248, atRisk: 30480, censored: 4260 },
        { t: 90, s: 0.221, atRisk: 25900, censored: 7480 },
        { t: 120, s: 0.207, atRisk: 21300, censored: 9100 },
        { t: 150, s: 0.198, atRisk: 17600, censored: 11200 },
      ],
    },
    {
      cohort: "human",
      label: "Human-written",
      halfLifeDays: 47,
      linesObserved: 214900,
      points: [
        { t: 0, s: 1.0, atRisk: 214900, censored: 0 },
        { t: 1, s: 0.986, atRisk: 211900, censored: 0 },
        { t: 2, s: 0.974, atRisk: 209320, censored: 0 },
        { t: 3, s: 0.964, atRisk: 207170, censored: 0 },
        { t: 5, s: 0.945, atRisk: 203090, censored: 140 },
        { t: 7, s: 0.928, atRisk: 199440, censored: 260 },
        { t: 10, s: 0.902, atRisk: 193850, censored: 430 },
        { t: 14, s: 0.868, atRisk: 186540, censored: 760 },
        { t: 21, s: 0.808, atRisk: 173650, censored: 1420 },
        { t: 28, s: 0.746, atRisk: 160320, censored: 2180 },
        { t: 35, s: 0.671, atRisk: 144170, censored: 3050 },
        { t: 42, s: 0.573, atRisk: 123120, censored: 4310 },
        { t: 47, s: 0.498, atRisk: 107020, censored: 5460 },
        { t: 60, s: 0.417, atRisk: 89600, censored: 8940 },
        { t: 75, s: 0.371, atRisk: 79730, censored: 12600 },
        { t: 90, s: 0.339, atRisk: 72840, censored: 16200 },
        { t: 120, s: 0.301, atRisk: 64680, censored: 23400 },
        { t: 150, s: 0.284, atRisk: 61030, censored: 29800 },
      ],
    },

  ],
};

export const findingsList: Finding[] = [
  {
    id: "median-survival",
    value: "9 days",
    claim: "Agent-written lines have a median survival of 9 days.",
    detail:
      "Human-written lines in the same repository run to 47 days. The gap holds after excluding generated files and vendored directories.",
    basis: "128,400 agent lines and 214,900 human lines, one repository, 14 months.",
  },
  {
    id: "pre-commit-death",
    value: "38%",
    claim: "38 percent of agent-written lines are deleted before they are ever committed.",
    detail:
      "Working-tree snapshots catch these. A tool that reads only commit history reports none of them.",
    basis: "Same sample. Measured between the agent file write and the next commit touching that file.",
  },
  {
    id: "session-hazard",
    value: "2.1x",
    claim: "Lines in files touched by three or more agent sessions die 2.1 times faster.",
    detail:
      "Session count on a file is the strongest single predictor in the hazard model, ahead of file size and language.",
    basis: "Cox proportional hazards on the same sample. Predictors and diagnostics are in the study.",
  },
];

/** The one figure called out at display size. Keep it in sync with the curve. */
export const headlineStat = {
  value: "9d",
  label: "median agent line survival",
} as const;

export const halfLifeComparison: ComparisonChart = {
  id: "half-life-by-author",
  title: "Median survival by author",
  unit: "days",
  max: 60,
  bars: [
    { label: "Agent-written", value: 9, cohort: "agent" },
    { label: "Human-written", value: 47, cohort: "human" },
  ],
};

export const explorerEntries: ExplorerEntry[] = [
  {
    slug: "vercel/next.js",
    language: "TypeScript",
    linesTracked: 1284000,
    halfLifeDays: 118,
    window: "History since 2019-01",
  },
  {
    slug: "rust-lang/rust",
    language: "Rust",
    linesTracked: 2940000,
    halfLifeDays: 204,
    window: "History since 2015-05",
  },
  {
    slug: "pallets/flask",
    language: "Python",
    linesTracked: 62400,
    halfLifeDays: 331,
    window: "History since 2010-04",
  },
  {
    slug: "redis/redis",
    language: "C",
    linesTracked: 412700,
    halfLifeDays: 486,
    window: "History since 2009-03",
  },
];

export const storedRecordExample: StoredRecord = {
  line_hash: "b41f0c9d7a2e5518",
  file_hash: "7d3a91c0e6b84427",
  repo_id: "a0f4e2c8",
  lang: "typescript",
  token_count: 14,
  author: "agent",
  agent_id: "claude-code",
  born_at: "2026-04-11T09:22:41Z",
  died_at: "2026-04-13T17:05:02Z",
  event: "rewritten",
};
