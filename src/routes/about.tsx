import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
import { Button } from "@/components/ui/button";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  Calculator,
  CheckCircle2,
  Clock,
  Database,
  FileCheck,
  GitBranch,
  Layers,
  LayoutDashboard,
  ShieldAlert,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ClaimsDesk" },
      {
        name: "description",
        content: "Learn more about ClaimsDesk's mission, platform mechanics, and how it works.",
      },
    ],
  }),
  component: AboutPage,
});

const problems = [
  {
    title: "Approval Delays",
    desc: "Claims sit idle between departments without clear ownership or visibility into who holds pending authorization.",
    icon: Clock,
  },
  {
    title: "Financial Exposure",
    desc: "Sign-offs often occur without real-time, automated verification of a member's remaining policy coverage, creating risks of over-limit payouts and fraud.",
    icon: ShieldAlert,
  },
  {
    title: "Audit and Compliance Gaps",
    desc: "Offline email chains and manual paperwork fail to record an immutable, timestamped ledger of decisions, complicating statutory reporting and internal audits.",
    icon: FileCheck,
  },
  {
    title: "SLA Breaches",
    desc: "Without automated alerts, claims requiring urgent reviews exceed statutory resolution windows, driving up administrative costs and claimant dissatisfaction.",
    icon: AlertTriangle,
  },
];

const mechanics = [
  {
    title: "Threshold-Driven Financial Routing",
    desc: "Claims automatically route to authorized personnel based on settlement exposure. Under 100k to Claims Officers, 100k-500k to Underwriters, and above 500k to the Finance Director.",
    icon: GitBranch,
  },
  {
    title: "Transactional Ledger Deductions",
    desc: "Atomic database transactions simultaneously deduct policy balances, change claim status, and log the action, ensuring zero risk of double-spending or balance mismatch.",
    icon: Database,
  },
  {
    title: "Automated 24/7 SLA Escalation",
    desc: "An internal background worker continuously monitors claims. Any file lingering for more than 48 hours is automatically flagged as Escalated.",
    icon: Activity,
  },
  {
    title: "Granular Role-Based Access Control",
    desc: "Access levels strictly segregate operational duties—preventing claims submission officers from approving their own files and restricting audit-log alterations.",
    icon: ShieldCheck,
  },
];

const personas = [
  {
    role: "The Insured Member",
    desc: "The customer who holds the policy and submits bills or hospital receipts for reimbursement.",
    icon: Users,
  },
  {
    role: "The Claims Officer",
    desc: "The frontline staff member who examines paperwork, verifies the accident, and checks policy coverage.",
    icon: BadgeCheck,
  },
  {
    role: "The Underwriter",
    desc: "A senior risk specialist who handles cases involving higher financial amounts or unusual policy conditions.",
    icon: Briefcase,
  },
  {
    role: "The Finance Director",
    desc: "The executive in charge of the treasury, giving final approval before large sums of money leave the company.",
    icon: Calculator,
  },
];

const workflow = [
  {
    title: "Submission & Instant Verification",
    desc: "Claim details are entered. The platform automatically checks if the cover is active and within annual limits.",
  },
  {
    title: "Frontline Review",
    desc: "The Claims Officer inspects receipts and verifies details. Bills under KSh 100,000 are approved directly.",
  },
  {
    title: "Automatic Routing",
    desc: "For larger amounts (e.g., KSh 350,000), the system locks the officer's approval button and routes the file up.",
  },
  {
    title: "Atomic Payout & Ledger Update",
    desc: "Upon final sign-off, the database instantly deducts the payout, updates status, and writes an unchangeable audit record.",
  },
  {
    title: "The Automated Watchdog",
    desc: "If a claim sits for more than 48 hours, a background service flags it as Escalated, notifying supervisors.",
  },
];

function AboutPage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="About ClaimsDesk"
          title="Enterprise workflow automation for licensed insurers."
          description="We address the core operational challenges of high-volume insurance operations: manual handoffs, unverified policy payouts, compliance vulnerabilities, and missed SLA turnaround times."
        />

        {/* The Operational Problem */}
        <section className="bg-surface-soft py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow">The Operational Problem</p>
              <h2 className="section-title mx-auto">Why traditional claims management fails.</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                In traditional environments, processing relies heavily on physical documentation,
                shared inboxes, and fragmented spreadsheets, introducing critical risks.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {problems.map((problem) => (
                <div key={problem.title} className="rounded-3xl border border-border bg-card p-6">
                  <div className="icon-well mb-5">
                    <problem.icon />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{problem.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Platform Mechanics */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Platform Mechanics</p>
                <h2 className="section-title">Engineered for control and speed.</h2>
                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  The platform digitizes claims intake, validates real-time policy coverage
                  balances, enforces strict financial sign-off boundaries, and maintains an
                  immutable audit trail for every status change.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {mechanics.map((mechanic) => (
                  <div key={mechanic.title} className="feature-card">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="icon-well-small">
                        <mechanic.icon />
                      </span>
                      <h3 className="text-sm font-bold leading-tight">{mechanic.title}</h3>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">{mechanic.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works: A Simple Guide */}
        <section className="bg-surface-soft py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="mb-16 md:text-center">
              <p className="eyebrow">A Simple Guide</p>
              <h2 className="section-title md:mx-auto">How ClaimsDesk Works</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground md:mx-auto md:max-w-2xl">
                You don't need a background in insurance. The platform simply ensures that when
                money needs to be paid out, the request is valid, reviewed by the right person, and
                processed without unnecessary delays.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold">
                  <CheckCircle2 className="size-5 text-brand" /> What is a claim?
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  When someone buys insurance, they pay a fee called a premium. If an incident
                  occurs, the customer asks the insurance company to pay the bill. That formal
                  request for payment is called a claim.
                </p>

                <h3 className="mb-6 mt-10 flex items-center gap-2 text-lg font-bold">
                  <CheckCircle2 className="size-5 text-brand" /> Why Approval Thresholds?
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  In any organization handling money, a junior employee should not have the
                  authority to disburse millions alone. Thresholds prevent fraud and costly errors
                  while speeding up routine work. Most everyday claims are small, and forcing an
                  executive to sign off on a routine clinic bill creates massive backlog.
                </p>
              </div>

              <div>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold">
                  <Users className="size-5 text-brand" /> Key People in the System
                </h3>
                <div className="grid gap-3">
                  {personas.map((persona) => (
                    <div
                      key={persona.role}
                      className="flex gap-4 rounded-3xl border border-border bg-card p-4"
                    >
                      <div className="mt-1 flex-none text-brand">
                        <persona.icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">{persona.role}</h4>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {persona.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Lifecycle of a Claim */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow">Workflow</p>
              <h2 className="section-title mx-auto">The Lifecycle of a Claim</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                From first notice to final settlement, a controlled path with clear ownership,
                enforceable limits, and a complete event history.
              </p>
            </div>

            <div
              className="workflow-line mt-14"
              style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}
            >
              {workflow.map((step, i) => (
                <div key={step.title} className="workflow-item">
                  <span className="workflow-number">{i + 1}</span>
                  <div>
                    <p className="text-xs font-bold leading-tight">{step.title}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:py-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-brand p-10 text-primary-foreground md:flex-row md:p-14 shadow-2xl">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Ready to transform your claims?
                </h2>
                <p className="mt-4 text-brand-soft text-sm md:text-base leading-relaxed opacity-90">
                  Experience firsthand how our automated workflow reduces processing time,
                  eliminates manual errors, and enforces your financial thresholds perfectly.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="shrink-0 rounded-full px-10 py-6 text-base font-bold shadow-lg transition-transform hover:scale-105"
              >
                <Link to="/login">Try demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
