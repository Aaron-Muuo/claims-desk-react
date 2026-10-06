import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  Check,
  Database,
  FileSpreadsheet,
  KeyRound,
  LayoutDashboard,
  Layers,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "System Architecture — ClaimsDesk" },
      {
        name: "description",
        content:
          "See how ClaimsDesk supports regulated insurance workflows with API-first services, RBAC, and policy controls.",
      },
      { property: "og:title", content: "System Architecture — ClaimsDesk" },
      {
        property: "og:description",
        content: "A production-grade architecture for regulated claims operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArchitecturePage,
});
function ArchitecturePage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="Architecture & rationale"
          title="Engineered for regulated insurance environments."
          description="Claims decisions move money, change reserves, and create legal records. ClaimsDesk treats control, traceability, and financial correctness as foundational system properties."
        />
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="comparison-card comparison-manual">
                <div className="flex items-center gap-3">
                  <span className="icon-well-muted">
                    <FileSpreadsheet />
                  </span>
                  <div>
                    <p className="eyebrow text-danger">Manual operations</p>
                    <h2 className="mt-1 text-2xl font-bold">Spreadsheets & email chains</h2>
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  {[
                    "Approval limits depend on human memory",
                    "Evidence becomes fragmented across inboxes",
                    "Policy balances can be updated out of sequence",
                    "SLA breaches appear after the fact",
                  ].map((x) => (
                    <li key={x} className="flex gap-3 text-sm text-muted-foreground">
                      <AlertTriangle className="size-4 shrink-0 text-danger" />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="comparison-card comparison-auto">
                <div className="flex items-center gap-3">
                  <span className="icon-well">
                    <Network />
                  </span>
                  <div>
                    <p className="eyebrow">ClaimsDesk model</p>
                    <h2 className="mt-1 text-2xl font-bold">Automated API-first workflow</h2>
                  </div>
                </div>
                <ul className="mt-8 space-y-4">
                  {[
                    "Authority limits enforced before every decision",
                    "All evidence linked to one immutable claim record",
                    "Balances and payouts committed atomically",
                    "Escalations generated continuously",
                  ].map((x) => (
                    <li key={x} className="flex gap-3 text-sm font-medium">
                      <Check className="size-4 shrink-0 text-brand" />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="bg-surface-soft py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <p className="eyebrow">Technical capabilities</p>
            <h2 className="section-title">Built in layers. Governed end to end.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                [
                  ServerCog,
                  "Decoupled REST API",
                  "A stateless contract prepared for high-volume claim intake, approval actions, and partner integrations.",
                ],
                [
                  KeyRound,
                  "Role-Based Access Control",
                  "Strict separation of duties across officers, underwriters, finance leaders, and compliance auditors.",
                ],
                [
                  Database,
                  "Granular Policy Registry",
                  "Active cover, remaining limits, deductibles, endorsements, and claim exposure in one consistent record.",
                ],
              ].map(([Icon, t, c]) => (
                <article key={t as string} className="rounded-[2rem] border border-border/60 bg-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                  <span className="icon-well">
                    <Icon />
                  </span>
                  <h3 className="mt-7 text-xl font-bold">{t as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{c as string}</p>
                </article>
              ))}
            </div>
            <div className="architecture-flow mt-14">
              <Flow icon={Boxes} title="Client & partner channels" note="Portal, broker, API" />
              <ArrowRight />
              <Flow icon={Network} title="Claims orchestration" note="Rules, state, SLA" />
              <ArrowRight />
              <Flow icon={ShieldCheck} title="Financial control plane" note="RBAC, ledger, audit" />
            </div>
          </div>
        </section>
        <section className="border-t border-border bg-ink py-20 text-ink-foreground lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
              <div>
                <p className="eyebrow text-brand-bright">Engineering Architecture</p>
                <h2 className="section-title text-ink-foreground">Decoupled API-first design.</h2>
                <p className="mt-6 text-sm leading-6 text-ink-muted">
                  ClaimsDesk is built for high availability and transactional consistency. It is
                  deployed as a production-grade demonstration platform showcasing scalable
                  enterprise architecture, workflow automation, and financial governance standards.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[2rem] border border-ink-border bg-ink-raised p-5">
                  <LayoutDashboard className="mb-4 size-6 text-brand-bright" />
                  <h3 className="text-sm font-bold">Client Layer</h3>
                  <p className="mt-2 text-xs leading-5 text-ink-muted">
                    A single-page application (SPA) built with React and Tailwind CSS, providing
                    fast, responsive status pipelines.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-ink-border bg-ink-raised p-5">
                  <Layers className="mb-4 size-6 text-brand-bright" />
                  <h3 className="text-sm font-bold">API & Logic</h3>
                  <p className="mt-2 text-xs leading-5 text-ink-muted">
                    A RESTful API engine responsible for identity management, validation rules, and
                    business workflow enforcement.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-ink-border bg-ink-raised p-5">
                  <Database className="mb-4 size-6 text-brand-bright" />
                  <h3 className="text-sm font-bold">Data Storage</h3>
                  <p className="mt-2 text-xs leading-5 text-ink-muted">
                    A relational database utilizing indexed tables and stored procedures for
                    critical financial operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="flex gap-4 rounded-[2rem] border border-brand/20 bg-brand-soft p-6">
              <ShieldCheck className="size-6 shrink-0 text-brand" />
              <div>
                <p className="font-bold">Portfolio implementation</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Built to demonstrate production-grade insurance system architecture. This
                  environment uses realistic mock data and does not process live policies or claims.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
function Flow({ icon: Icon, title, note }: { icon: typeof Boxes; title: string; note: string }) {
  return (
    <div className="flex-1 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-[2rem] bg-primary text-primary-foreground">
        <Icon />
      </span>
      <p className="mt-4 text-sm font-bold">{title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
