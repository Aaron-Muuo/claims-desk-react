import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  DatabaseZap,
  FileLock2,
  GitBranch,
  LockKeyhole,
  Scale,
  Globe,
  TimerReset,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
import { ClaimsDemoCta } from "@/components/claimsdesk/claims-demo-cta";
export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Claims Workflow Features — ClaimsDesk" },
      {
        name: "description",
        content:
          "Explore delegated authority, transactional integrity, SLA escalation, and audit controls in ClaimsDesk.",
      },
      { property: "og:title", content: "Claims Workflow Features — ClaimsDesk" },
      {
        property: "og:description",
        content: "Enterprise controls for high-integrity insurance claims operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});
const items = [
  [
    GitBranch,
    "Tiered spending limits",
    "Routes each claim to the right person based on cost, allowing staff to resolve routine bills quickly while managers review larger payouts.",
    [
      "Claims Officers: under KSh 100,000",
      "Underwriting Managers: under KSh 500,000",
      "Finance Directors: KSh 500,000 and above",
    ],
  ],
  [
    DatabaseZap,
    "Safe balance deductions",
    "Verifies policy limits and deducts balances in a single protected step, preventing duplicate payouts or overdrawn customer accounts.",
    [
      "Instant coverage limit checks",
      "Zero risk of paying twice",
      "Protected account balances",
    ],
  ],
  [
    BellRing,
    "48-hour delay alerts",
    "Tracks open files around the clock and automatically alerts managers whenever a claim sits untouched for longer than two days.",
    [
      "Automatic 48-hour escalation timer",
      "Moves delayed files to the top of the queue",
      "Instant supervisor notifications",
    ],
  ],
  [
    FileLock2,
    "Tamper-proof audit history",
    "Records an unchangeable timeline of every file upload, reviewer comment, and sign-off down to the exact second for regulatory checks.",
    [
      "Permanent log of every action taken",
      "Exact timestamps on evidence and notes",
      "One-click reports for compliance teams",
    ],
  ],
  [
    LockKeyhole,
    "Strict role separation",
    "Prevents fraud by ensuring the person who logs a claim cannot approve it, keeping all staff inside their authorized responsibilities.",
    [
      "Separation between intake and approval",
      "Permissions limited to job function",
      "Read-only access mode for external auditors",
    ],
  ],
  [
    TimerReset,
    "Automatic error recovery",
    "Safely re-runs interrupted operations and flags unexpected errors, ensuring payments and updates never get stuck mid-process.",
    [
      "Safe automatic retries on network drops",
      "Dedicated screen for flagged issues",
      "Zero lost work during system interruptions",
    ],
  ],
] as const;
function FeaturesPage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="Platform capabilities"
          title="Controls that make ClaimsDesk dependable."
          description="ClaimsDesk combines financial safeguards, configurable rules, and complete traceability in one focused platform."
        />
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map(([Icon, title, copy, bullets]) => (
                <article key={title} className="rounded-[2rem] border border-border/60 bg-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                  <span className="icon-well">
                    <Icon />
                  </span>
                  <h2 className="mt-7 text-xl font-bold">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                  <ul className="mt-6 space-y-3 border-t border-border pt-5">
                    {bullets.map((b) => (
                      <li className="flex gap-2 text-xs font-medium" key={b}>
                        <CheckCircle2 className="size-4 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-ink py-18 text-ink-foreground">
          <div className="mx-auto max-w-5xl flex flex-col items-start justify-between px-5 lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-brand-bright">
                <Scale className="size-5" />
                <span className="text-xs font-bold uppercase tracking-[.14em]">
                  Designed for simplicity
                </span>
              </div>
              <h2 className="mt-4 w-full text-3xl font-bold md:text-4xl">
                Built to make claims simple, faster & automatic.
              </h2>
              <p className="mt-4 w-full text-base leading-relaxed text-muted-foreground/80 md:text-lg">
                Real efficiency is not about extra buttons or complex settings. ClaimsDesk simplifies your everyday tasks by handling routine checks, tracking review deadlines, and passing approvals forward on its own, so files never get stuck on someone's desk.
              </p>
            </div>

          </div>
        </section>
        <section className="bg-background py-18">
          <div className="mx-auto max-w-5xl flex flex-col items-start justify-between px-5 lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-brand">
                <Globe className="size-5" />
                <span className="text-xs font-bold uppercase tracking-[.14em]">
                  Flexible for Any Region. Built Around Your Rules.
                </span>
              </div>
              <p className="mt-4 w-full text-base leading-relaxed text-muted-foreground md:text-lg">
                ClaimsDesk seamlessly supports any currency and adapts to any market. You're never locked into rigid workflows—your team can customize approval thresholds, review deadlines, and payout logic directly from the dashboard, zero coding required.
              </p>
              <p className="mt-4 w-full text-base leading-relaxed text-muted-foreground md:text-lg">
                Because every institution manages risk differently, we give you absolute control over your operational rules. If your team has specialized regulatory guidelines, intricate internal hierarchies, or relies on legacy core systems, our Enterprise Edition provides custom-built integrations and tools engineered specifically for your business.
              </p>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <ClaimsDemoCta />
      </main>
    </MarketingLayout>
  );
}
