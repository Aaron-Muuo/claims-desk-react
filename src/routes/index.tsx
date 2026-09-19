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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingLayout } from "@/components/claimsdesk/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClaimsDesk — Insurance Claims Automation" },
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
    title: "Threshold-Based Approval Rules",
    copy: "Route every claim to the right authority level based on exposure, policy class, and approval mandate.",
    note: "Officer < 100k · Underwriter < 500k · Director > 500k",
  },
  {
    icon: Database,
    n: "02",
    title: "Transactional Database Integrity",
    copy: "Atomic policy balance deductions preserve financial correctness through every concurrent payout event.",
    note: "Zero double-spend risk",
  },
  {
    icon: Clock3,
    n: "03",
    title: "24/7 SLA Background Escalation",
    copy: "Continuously monitor approval queues and automatically flag claims waiting longer than 48 hours.",
    note: "Always-on escalation engine",
  },
  {
    icon: FileCheck2,
    n: "04",
    title: "Statutory & Audit Readiness",
    copy: "Create an immutable record of every decision, handoff, evidence update, and financial authorization.",
    note: "Complete regulatory traceability",
  },
];
function HomePage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <section className="hero-grid">
          <div className="mx-auto flex min-h-[720px] max-w-5xl flex-col items-center justify-center px-5 py-16 text-center lg:px-8 lg:py-20">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand">
                <BadgeCheck className="size-3.5" />
                Built for licensed insurance operations
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl">
                Automate insurance claims with{" "}
                <span className="text-brand">absolute audit integrity.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Purpose-built for insurance providers, underwriters, and claims officers. Enforce
                financial sign-off thresholds, automate SLA escalations, and eliminate manual review
                bottlenecks.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/login">
                    Try demo <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/architecture">Explore System Architecture</Link>
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
                  API-first deployment
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="border-t border-b border-border bg-card py-10 overflow-hidden">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Trusted by innovative claims teams worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale">
              <div className="flex items-center gap-2 text-xl font-serif font-bold text-foreground">
                <ShieldCheck className="size-6" /> Aegis Life
              </div>
              <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
                <Car className="size-7" /> Vanguard Auto
              </div>
              <div className="flex items-center gap-2 text-xl font-medium tracking-wide text-foreground">
                <HeartPulse className="size-6" /> Horizon Health
              </div>
              <div className="flex items-center gap-2 text-xl font-black uppercase tracking-tighter text-foreground">
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
                <h2 className="section-title">A purpose-built engine for insurance operations.</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  In traditional environments, processing relies heavily on physical documentation
                  and shared inboxes. We address the core operational challenges of high-volume
                  operations: manual handoffs, unverified policy payouts, compliance
                  vulnerabilities, and missed SLAs.
                </p>
                <Button asChild variant="link" className="mt-6 p-0 font-bold text-brand h-auto">
                  <Link to="/about" className="flex items-center gap-2">
                    Read the full story <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-card p-6">
                  <Users className="mb-4 size-6 text-brand" />
                  <h3 className="text-sm font-bold">Multi-Role Control</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Officer, Underwriter, and Director segregation of duties.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-6 sm:mt-8">
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
              <h2 className="section-title mx-auto">Deterministic workflow mechanics.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <article key={f.title} className="feature-card">
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
      </main>
    </MarketingLayout>
  );
}
