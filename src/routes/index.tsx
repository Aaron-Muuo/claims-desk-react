import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Check, Clock3, Database, FileCheck2, GitBranch, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingLayout } from "@/components/claimsdesk/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "ClaimsDesk — Insurance Claims Automation" },
    { name: "description", content: "Automate insurance claims, financial approvals, SLA escalations, and audit trails with ClaimsDesk." },
    { property: "og:title", content: "ClaimsDesk — Insurance Claims Automation" },
    { property: "og:description", content: "Production-grade claims workflow and multi-tier approval automation for licensed insurers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

const stages = [
  { name: "Intake", count: 18, detail: "Policy and identity validation" },
  { name: "Assessment", count: 46, detail: "Evidence and reserve review" },
  { name: "Authorization", count: 37, detail: "Threshold-based sign-off" },
  { name: "Payout", count: 23, detail: "Settlement execution" },
];
const features = [
  { icon: GitBranch, n: "01", title: "Threshold-Based Approval Rules", copy: "Route every claim to the right authority level based on exposure, policy class, and approval mandate.", note: "Officer < 100k · Underwriter < 500k · Director > 500k" },
  { icon: Database, n: "02", title: "Transactional Database Integrity", copy: "Atomic policy balance deductions preserve financial correctness through every concurrent payout event.", note: "Zero double-spend risk" },
  { icon: Clock3, n: "03", title: "24/7 SLA Background Escalation", copy: "Continuously monitor approval queues and automatically flag claims waiting longer than 48 hours.", note: "Always-on escalation engine" },
  { icon: FileCheck2, n: "04", title: "Statutory & Audit Readiness", copy: "Create an immutable record of every decision, handoff, evidence update, and financial authorization.", note: "Complete regulatory traceability" },
];

function EnginePreview() {
  const [active, setActive] = useState(2);
  return <div className="engine-panel">
    <div className="flex items-start justify-between border-b border-ink-border p-5"><div><div className="flex items-center gap-2"><span className="status-dot" /><p className="text-xs font-semibold text-ink-foreground">Claims Processing Engine</p></div><p className="mt-1 text-[11px] text-ink-muted">Live operational overview · Updated now</p></div><ShieldCheck className="size-5 text-brand-bright" /></div>
    <div className="grid grid-cols-2 border-b border-ink-border"><Metric label="Total Exposure" value="KSh 48,250,000" /><Metric label="Pending Authorizations" value="KSh 2,450,000" alert /><Metric label="Active Claims" value="124" /><Metric label="SLA Compliance" value="99.4%" good /></div>
    <div className="p-5"><div className="mb-4 flex items-center justify-between"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Live pipeline</p><span className="text-[10px] text-brand-bright">17 actions today</span></div><div className="grid grid-cols-4 gap-2">{stages.map((stage, i) => <button key={stage.name} onClick={() => setActive(i)} className={`pipeline-step ${active === i ? "pipeline-step-active" : ""}`}><span className="text-lg font-bold tabular-nums">{stage.count}</span><span className="mt-1 text-[9px] uppercase">{stage.name}</span></button>)}</div><div className="mt-4 flex items-center justify-between rounded-md bg-ink-raised px-4 py-3 text-xs"><span className="text-ink-muted">{stages[active].detail}</span><span className="font-semibold text-ink-foreground">{stages[active].count} claims <ArrowRight className="ml-1 inline size-3" /></span></div></div>
  </div>;
}
function Metric({ label, value, alert, good }: { label: string; value: string; alert?: boolean; good?: boolean }) { return <div className="border-r border-t border-ink-border p-4"><p className="text-[10px] text-ink-muted">{label}</p><p className={`mt-2 text-base font-bold tabular-nums ${alert ? "text-warning" : good ? "text-brand-bright" : "text-ink-foreground"}`}>{value}</p></div>; }

function HomePage() {
  return <MarketingLayout><main>
    <section className="hero-grid"><div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20"><div><div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand"><BadgeCheck className="size-3.5" />Built for licensed insurance operations</div><h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-7xl">Automate insurance claims with <span className="text-brand">absolute audit integrity.</span></h1><p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">Purpose-built for insurance providers, underwriters, and claims officers. Enforce financial sign-off thresholds, automate SLA escalations, and eliminate manual review bottlenecks.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/login">Launch Staff Portal <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/architecture">Explore System Architecture</Link></Button></div><div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-brand" />Multi-tier authorization</span><span className="flex items-center gap-2"><Check className="size-4 text-brand" />Immutable audit ledger</span><span className="flex items-center gap-2"><Check className="size-4 text-brand" />API-first deployment</span></div></div><EnginePreview /></div></section>
    <section className="bg-surface-soft py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end"><div><p className="eyebrow">Control layer</p><h2 className="section-title">Every claim follows the rules. Every time.</h2></div><p className="max-w-lg text-sm leading-6 text-muted-foreground md:justify-self-end">Replace fragile inbox approvals with deterministic controls designed around delegated authority and insurance regulation.</p></div><div className="mt-12 grid gap-3 md:grid-cols-2">{features.map((f) => <article key={f.title} className="feature-card"><div className="flex items-start justify-between"><span className="icon-well"><f.icon /></span><span className="text-xs font-mono text-muted-foreground">{f.n}</span></div><h3 className="mt-8 text-xl font-bold">{f.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{f.copy}</p><p className="mt-6 border-t border-border pt-4 text-xs font-semibold text-brand">{f.note}</p></article>)}</div></div></section>
    <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="eyebrow">Deterministic workflow</p><h2 className="section-title mx-auto">From first notice to final settlement.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground">A controlled path with clear ownership, enforceable limits, and a complete event history.</p></div><div className="workflow-line mt-14">{["Intake & Policy Validation", "Threshold Routing", "Approval & Payout Execution", "Settled & Archived"].map((label, i) => <div key={label} className="workflow-item"><span className="workflow-number">{i + 1}</span><div><p className="text-sm font-bold">{label}</p><p className="mt-1 text-xs text-muted-foreground">{["Verify cover and claimant", "Assign delegated authority", "Commit funds atomically", "Lock the audit record"][i]}</p></div></div>)}</div><div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-center"><div><p className="text-2xl font-bold">Ready to inspect the workflow?</p><p className="mt-2 text-sm text-muted-foreground">Use any role to explore the staff experience.</p></div><Button asChild><Link to="/login">Open Staff Portal <ArrowRight /></Link></Button></div></div></section>
  </main></MarketingLayout>;
}
