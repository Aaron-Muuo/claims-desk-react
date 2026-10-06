import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
import { ClaimsDemoCta } from "@/components/claimsdesk/claims-demo-cta";
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
  ArrowRight,
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

const aiWorkflow = [
  {
    stage: "1. Intake (FNOL)",
    capability: "Document Vision & Extraction",
    action: "Ingests uploaded garage estimates, receipts, or police abstracts. Auto-extracts incident dates, loss descriptions, itemized costs, and initial claimed amounts in KSh."
  },
  {
    stage: "2. UnderReview",
    capability: "Completeness & Coverage Verification",
    action: "Cross-references extracted claim facts against the member's policy schedule. Flags excluded perils, expired coverages, or missing mandatory attachments before staff touches the file."
  },
  {
    stage: "3. Assessment",
    capability: "Loss Adjusting & Cost Auditing",
    action: "Compares itemized garage repair bills against standard market part prices in Kenya. Flags suspicious line items (e.g., inflated spare parts or labor charges)."
  },
  {
    stage: "4. Escalation",
    capability: "Anomaly & Fraud Detection",
    action: "Computes a composite Risk Score (0–100). Flags cross-tenant duplicate submissions, frequent claimants, or inconsistent incident timing."
  },
  {
    stage: "5. Sign-off / Rejection",
    capability: "Natural Language Generation",
    action: "If approved, prepares discharge vouchers with itemized breakdowns. If rejected, generates formal repudiation letters citing exact policy clauses and exclusion codes."
  }
];

const aiBusinessValue = [
  {
    title: "Straight-Through Processing (STP) for Low-Value Claims",
    desc: "Claims under KSh 25,000 with zero fraud flags and high document confidence can move from Submitted directly to Approved automatically, reducing officer triage workload by up to 40%."
  },
  {
    title: "Cycle Time Reduction",
    desc: "Drops First Notice of Loss (FNOL) document intake and indexing from 2–3 business days to under 60 seconds."
  },
  {
    title: "Loss Leakage Prevention",
    desc: "Identifies altered receipts, fabricated police abstract stamps, and bills exceeding baseline regional repair benchmarks."
  },
  {
    title: "Consistency in Repudiations",
    desc: "Eliminates ambiguous rejection reasons, reducing legal exposure and statutory disputes before insurance regulatory bodies."
  }
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
        <section className="bg-background py-20 lg:py-28">
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
                <div key={problem.title} className="rounded-[2rem] border border-border bg-card p-6">
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
                  <div key={mechanic.title} className="rounded-[2rem] border border-border/60 bg-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
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
                      className="flex gap-4 rounded-[2rem] border border-border bg-card p-4"
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

            <div className="mt-14 flex w-full flex-col">
              {/* Row 1 */}
              <div className="grid md:grid-cols-3">
                {workflow.slice(0, 3).map((step, i) => (
                  <div key={step.title} className={`p-8 md:border-b border-border ${i < 2 ? 'md:border-r' : ''} ${i < 3 ? 'border-b md:border-b' : ''}`}>
                    <div className="flex gap-4">
                      <span className="workflow-number">{i + 1}</span>
                      <div>
                        <p className="text-sm font-bold leading-tight">{step.title}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid md:grid-cols-2">
                {workflow.slice(3, 5).map((step, i) => (
                  <div key={step.title} className={`p-8 ${i === 0 ? 'md:border-r border-b md:border-b-0 border-border' : ''}`}>
                    <div className="flex gap-4">
                      <span className="workflow-number">{i + 4}</span>
                      <div>
                        <p className="text-sm font-bold leading-tight">{step.title}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

                {/* AI in Claims Management */}
        <section className="bg-surface-soft py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center mb-14">
              <p className="eyebrow">Intelligence</p>
              <h2 className="section-title mx-auto">How AI Demonstrates Clear Business Value</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                To justify integration, AI must impact measurable insurer operational metrics. Here is how ClaimsDesk applies intelligence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-16">
              {aiBusinessValue.map((item) => (
                <div key={item.title} className="rounded-lg border border-border/60 bg-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                  <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 font-bold text-foreground">Workflow Stage</th>
                      <th className="px-6 py-4 font-bold text-foreground">AI Capability</th>
                      <th className="px-6 py-4 font-bold text-foreground">Concrete Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {aiWorkflow.map((row) => (
                      <tr key={row.stage} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{row.stage}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.capability}</td>
                        <td className="px-6 py-4 text-muted-foreground leading-relaxed">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <ClaimsDemoCta />
      </main>
    </MarketingLayout>
  );
}
