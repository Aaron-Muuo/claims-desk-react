import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";

export const Route = createFileRoute("/api-docs")({
  head: () => ({
    meta: [
      { title: "API Docs - ClaimsDesk" },
      {
        name: "description",
        content: "Review the ClaimsDesk REST API Docs for claims intake, approvals, decisions, and audit events.",
      },
      { property: "og:title", content: "API Docs - ClaimsDesk" },
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

function ApiPage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="Developer API Docs"
          title="A predictable API for every claims decision."
          description="Designed to be highly developer-friendly, this REST API is meant for interfacing smoothly with your existing systems. Integrate claim intake, policy validation, and payouts seamlessly with zero need to migrate your legacy data."
        />
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-16">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why our Docs are Valuable</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our comprehensive API documentation empowers your engineering team to build custom integrations 
                in days, not months. The docs contain full interactive references for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>All routes of claim management (creation, update, retrieval).</li>
                <li>Managing dynamic workflows and approval matrices.</li>
                <li>Triggering and querying AI analyses and fraud scores.</li>
                <li>Managing tenant subscriptions, license pools, and AI credit balances.</li>
                <li>Core features including OAuth 2.0 authentication, idempotency, and secured endpoints.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">API Access Requirements</h2>
              <p className="text-muted-foreground leading-relaxed">
                To guarantee the security of our financial ledgers, API access is restricted to authenticated tenants.
                To obtain API keys and access the full suite of integration tools, your organization must be subscribed 
                to either the <strong>Pro</strong> or <strong>Enterprise</strong> tier. Upon upgrading, your administrative 
                dashboard will unlock the Developer Portal where you can generate secure tokens and configure webhooks.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-brand/5 border border-brand/20 p-8 rounded-3xl flex flex-col items-center text-center">
              <h2 className="text-xl font-bold mb-4 text-brand-dark">Ready to Start Building?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl">
                Dive into the full technical documentation, explore request/response schemas, and test endpoints live.
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="http://claimsdesk.runasp.net/swagger/" target="_blank" rel="noreferrer">
                  View Full API Docs
                </a>
              </Button>
            </div>

          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
