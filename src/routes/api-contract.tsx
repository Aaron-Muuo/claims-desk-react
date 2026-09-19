import { createFileRoute } from "@tanstack/react-router";
import { Check, Clipboard, Code2, KeyRound, ShieldCheck, Webhook } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
export const Route = createFileRoute("/api-contract")({
  head: () => ({
    meta: [
      { title: "API Contract — ClaimsDesk" },
      {
        name: "description",
        content:
          "Review the ClaimsDesk REST API contract for claims intake, approvals, decisions, and audit events.",
      },
      { property: "og:title", content: "API Contract — ClaimsDesk" },
      {
        property: "og:description",
        content: "Developer reference for integrating enterprise insurance claims workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApiPage,
});
const endpoints = [
  { method: "POST", path: "/v1/claims", label: "Create claim" },
  { method: "GET", path: "/v1/claims/{claim_id}", label: "Retrieve claim" },
  { method: "POST", path: "/v1/claims/{claim_id}/decisions", label: "Record decision" },
  { method: "GET", path: "/v1/audit-events", label: "List audit events" },
];
const code = `curl --request POST \\\n  https://api.claimsdesk.dev/v1/claims \\\n  --header 'Authorization: Bearer <token>' \\\n  --header 'Idempotency-Key: clm_8F2A91' \\\n  --data '{\n    "policy_number": "POL-MTR-209441",\n    "loss_type": "motor_collision",\n    "claim_amount": 248500,\n    "currency": "KES"\n  }'`;
function ApiPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="Developer contract · v1.4"
          title="A predictable API for every claims decision."
          description="Designed to be highly developer-friendly, this REST API is meant for interfacing smoothly with your existing systems. Integrate claim intake, policy validation, and payouts seamlessly with zero need to migrate your legacy data."
        />
        <section className="py-20">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <aside>
              <p className="text-xs font-bold uppercase tracking-[.14em] text-muted-foreground">
                Core endpoints
              </p>
              <div className="mt-4 overflow-hidden rounded-3xl border border-border">
                {endpoints.map((e, i) => (
                  <div key={e.path} className={`p-4 ${i ? "border-t border-border" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`method ${e.method === "GET" ? "method-get" : "method-post"}`}
                      >
                        {e.method}
                      </span>
                      <code className="text-xs font-semibold">{e.path}</code>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{e.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {[
                  [KeyRound, "OAuth 2.0 bearer authentication"],
                  [ShieldCheck, "Idempotent financial writes"],
                  [Webhook, "Signed lifecycle webhooks"],
                ].map(([Icon, t]) => (
                  <div key={t as string} className="flex items-center gap-3 text-sm font-medium">
                    <Icon className="size-4 text-brand" />
                    {t as string}
                  </div>
                ))}
              </div>
            </aside>
            <div>
              <div className="overflow-hidden rounded-3xl border border-ink-border bg-ink text-ink-foreground">
                <div className="flex items-center justify-between border-b border-ink-border px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-4 text-brand-bright" />
                    <span className="text-xs font-semibold">Create a motor claim</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copy}
                    className="text-ink-muted hover:bg-ink-raised hover:text-ink-foreground"
                  >
                    {copied ? <Check /> : <Clipboard />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
                <pre className="overflow-x-auto p-6 text-xs leading-6 text-code">
                  <code>{code}</code>
                </pre>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ["201", "Claim created"],
                  ["409", "Duplicate event"],
                  ["422", "Validation failed"],
                ].map(([n, t]) => (
                  <div key={n} className="rounded-3xl border border-border p-4">
                    <p className="font-mono text-lg font-bold text-brand">{n}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
