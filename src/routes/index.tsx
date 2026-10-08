import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Database,
  FileCheck2,
  GitBranch,
  ShieldCheck,
  TrendingUp,
  Code2,
  Layers,
  Users,
  Car,
  HeartPulse,
  Building2,
  ScanText,
  Calculator,
  ShieldAlert,
  FileSearch,
  PenLine,
  Zap,
} from "lucide-react";
import { HeroAnimatedGrid } from "@/components/claimsdesk/hero-animated-grid";
import { ClaimsDemoCta } from "@/components/claimsdesk/claims-demo-cta";
import { Button } from "@/components/ui/button";
import { MarketingLayout } from "@/components/claimsdesk/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClaimsDesk - Insurance Claims Automation" },
      {
        name: "description",
        content:
          "Automate insurance claims, financial approvals, SLA escalations, and audit trails with ClaimsDesk.",
      },
      { property: "og:title", content: "ClaimsDesk — Insurance Claims Automation" },
      {
        property: "og:description",
        content:
          "Production-grade claims workflow and multi-tier approval automation for licensed insurers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: GitBranch,
    n: "01",
    title: "Automatic Spending Limits",
    copy: "Send bills to the right person based on the amount, so staff handle small payouts while managers review larger sums.",
    note: "Officer < KSh 100k · Manager < KSh 500k · Director > KSh 500k",
  },
  {
    icon: Database,
    n: "02",
    title: "Safe Balance Deductions",
    copy: "Instantly update customer policy limits with each payout so money is never deducted or paid out twice.",
    note: "Zero risk of duplicate payments",
  },
  {
    icon: Clock3,
    n: "03",
    title: "48-Hour Delay Alerts",
    copy: "Watch pending files day and night, automatically flagging any claim left waiting for more than 48 hours.",
    note: "Automatic supervisor alerts",
  },
  {
    icon: FileCheck2,
    n: "04",
    title: "Tamper-Proof Activity Log",
    copy: "Keep a permanent, unchangeable record of every review, document upload, and approved payment down to the second.",
    note: "Inspection-ready history",
  },
];
function HomePage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <section className="relative overflow-hidden bg-background">
          <HeroAnimatedGrid />
          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-5xl flex-col items-center justify-center px-5 py-16 text-center lg:px-8 lg:py-20 pointer-events-none">
            <div className="flex flex-col items-center pointer-events-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500 bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                <BadgeCheck className="size-3.5 text-white" />
                Built for licensed insurance operations
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Automated Claims Workflows and Settlement Auditing for <span className="text-brand">Licensed Insurers.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Purpose-built for insurance providers and underwriters to automate claim intake, validate policy limits in real time, and record every adjudication decision down to the second.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/login">
                    Try demo <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/pricing">Explore pricing</Link>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-brand" />
                  Multi-tier authorization
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-brand" />
                  Immutable audit ledger
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-brand" />
                  Automated workflows
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-brand py-10 overflow-hidden text-white w-full">
          <div className="w-full px-5 md:px-12 lg:px-20">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-white/70 mb-8">
              Trusted by innovative claims teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80">
              <div className="flex items-center gap-2 text-xl font-serif font-bold text-white">
                <ShieldCheck className="size-6" /> Aegis Life
              </div>
              <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
                <Car className="size-7" /> Vanguard Auto
              </div>
              <div className="flex items-center gap-2 text-xl font-medium tracking-wide text-white">
                <HeartPulse className="size-6" /> Horizon Health
              </div>
              <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-white">
                <Building2 className="size-6" /> Apex Property
              </div>
            </div>
          </div>
        </section>
        <section className="bg-surface-soft py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">About ClaimsDesk</p>
                <h2 className="section-title">A purpose-built platform for insurance operations.</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  In traditional environments, processing relies heavily on physical documentation
                  and shared inboxes. ClaimsDesk address the core operational challenges of high-volume
                  operations: manual handoffs, unverified policy payouts, compliance
                  vulnerabilities, and missed SLAs.
                </p>
                <Button asChild variant="link" className="mt-6 p-0 font-bold text-brand h-auto">
                  <Link to="/about" className="flex items-center gap-2">
                    See more <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 items-start">
                <div className="rounded-[2rem] border border-border/60 bg-card p-8">
                  <Users className="mb-4 size-6 text-brand" />
                  <h3 className="text-sm font-bold">Multi-Role Control</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Officer, Underwriter, and Director segregation of duties.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-border/60 bg-card p-8 sm:mt-24">
                  <ShieldCheck className="size-6 text-brand mb-4" />
                  <h3 className="text-sm font-bold">Fraud Prevention</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Real-time verification of policy coverage limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center mb-16">
              <p className="eyebrow">Platform Features</p>
              <h2 className="section-title mx-auto">Everything You Need to Settle Claims with Confidence.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <article key={f.title} className="rounded-[2rem] border border-border/60 bg-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                  <div className="flex items-start justify-between">
                    <span className="icon-well">
                      <f.icon />
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{f.n}</span>
                  </div>
                  <h3 className="mt-8 text-sm font-bold">{f.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">{f.copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/features" className="flex items-center gap-2">
                  Explore all features <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20 lg:py-28 bg-brand/5 border-y border-brand/10">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center mb-16">
              <p className="eyebrow text-brand">Powered by AI</p>
              <h2 className="section-title mx-auto text-foreground">Next-Generation Claims Automation</h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                ClaimsDesk integrates advanced AI to accelerate decisions, prevent fraud, and eliminate manual data entry.
                The AI handles the heavy lifting, while your team retains full financial control.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: ScanText,
                  title: "Instant Data Extraction",
                  description: "Automatically read and extract details from police abstracts, invoices, and receipts. No more manual typing."
                },
                {
                  icon: Calculator,
                  title: "Smart Cost Benchmarking",
                  description: "Compare mechanic and hospital bills against local market rates to automatically flag inflated prices."
                },
                {
                  icon: ShieldAlert,
                  title: "Automated Fraud Detection",
                  description: "AI scans every claim for suspicious patterns, duplicate submissions, and policy inconsistencies in real time."
                },
                {
                  icon: FileSearch,
                  title: "Policy Coverage Checks",
                  description: "Cross-reference claim details against the customer's exact policy terms to highlight covered and excluded items."
                },
                {
                  icon: PenLine,
                  title: "Auto-Drafted Documents",
                  description: "Automatically generate personalized rejection letters or payment vouchers based on the final claim decision."
                },
                {
                  icon: Zap,
                  title: "Straight-Through Processing",
                  description: "Low-risk, low-value claims can be instantly verified and approved by AI, dropping cycle times from days to seconds."
                }
              ].map((aiFeature) => (
                <div key={aiFeature.title} className="rounded-lg border border-border/60 bg-card p-6 hover:-translate-y-1 transition-transform">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-brand/10 p-2.5">
                    <aiFeature.icon className="size-5 text-brand" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{aiFeature.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{aiFeature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-20 text-ink-foreground lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Architecture Summary */}
              <div>
                <span className="icon-well mb-6 text-ink-foreground bg-ink-raised border-ink-border">
                  <Layers className="size-5" />
                </span>
                <h2 className="text-2xl font-bold">Engineered Architecture</h2>
                <p className="mt-4 text-sm leading-6 text-ink-muted">
                  Claims decisions move money, change reserves, and create legal records. ClaimsDesk
                  treats control, traceability, and financial correctness as foundational system
                  properties. Our scalable infrastructure guarantees high availability and
                  transactional consistency.
                </p>
                <ul className="mt-6 space-y-3 border-y border-ink-border py-6">
                  {[
                    "Stateless REST API services",
                    "Granular policy registry databases",
                    "Immutable audit ledgers",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="size-4 text-brand-bright shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="link"
                  className="mt-4 p-0 font-bold text-brand-bright h-auto hover:text-white"
                >
                  <Link to="/architecture" className="flex items-center gap-2">
                    Review architecture <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              {/* API Summary */}
              <div>
                <span className="icon-well mb-6 text-ink-foreground bg-ink-raised border-ink-border">
                  <Code2 className="size-5" />
                </span>
                <h2 className="text-2xl font-bold">Developer-Friendly API</h2>
                <p className="mt-4 text-sm leading-6 text-ink-muted">
                  Integrate claim intake, policy validation, and payout execution directly. It is
                  highly developer-friendly and specifically designed to interface smoothly with
                  your existing systems—there is absolutely no need to migrate your legacy data.
                </p>
                <ul className="mt-6 space-y-3 border-y border-ink-border py-6">
                  {[
                    "OAuth 2.0 bearer authentication",
                    "Idempotent financial writes",
                    "Signed lifecycle webhooks",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="size-4 text-brand-bright shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="link"
                  className="mt-4 p-0 font-bold text-brand-bright h-auto hover:text-white"
                >
                  <Link to="/api-contract" className="flex items-center gap-2">
                    View API contract <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="text-center mb-16">
              <p className="eyebrow">Customer Success</p>
              <h2 className="section-title mx-auto">Trusted by industry leaders.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "Since deploying ClaimsDesk, our SLA breaches have dropped by 94%. The automated escalation engine is an absolute gamechanger for our operations team.",
                  author: "Sarah Jenkins",
                  role: "Head of Claims, Horizon Health",
                },
                {
                  quote:
                    "The API integration with our legacy ERP was completely seamless. We didn't have to migrate any historical data to immediately start utilizing the new approval routing.",
                  author: "David Ochieng",
                  role: "CTO, Vanguard Auto",
                },
                {
                  quote:
                    "Audit compliance used to take us weeks. Now, every decision is immutably logged with the exact threshold logic. Our compliance team couldn't be happier.",
                  author: "Elena Rostova",
                  role: "Finance Director, Aegis Life",
                },
              ].map((t) => (
                <div
                  key={t.author}
                  className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between"
                >
                  <p className="text-sm leading-6 text-muted-foreground italic mb-8">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-sm text-foreground">{t.author}</p>
                    <p className="text-xs text-brand mt-1 font-medium">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <ClaimsDemoCta />
      </main>
    </MarketingLayout>
  );
}
