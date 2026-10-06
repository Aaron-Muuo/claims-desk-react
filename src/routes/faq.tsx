import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
import { ClaimsDemoCta } from "@/components/claimsdesk/claims-demo-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, ServerCog, LockKeyhole, Coins, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ClaimsDesk" },
      { name: "description", content: "Frequently asked questions about ClaimsDesk." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    category: "Product & Operations",
    icon: ServerCog,
    items: [
      {
        q: "What is ClaimsDesk, and who is it designed for?",
        a: "ClaimsDesk is an internal claims workflow automation and approval engine built specifically for licensed insurance companies, underwriters, and claims administration teams. It is an operational platform for claims officers, managers, and finance directors to review, validate, approve, and track insurance claims with audit-ready financial governance.",
      },
      {
        q: "How does ClaimsDesk prevent overpayments and fraud?",
        a: "Before a claim can be submitted, the system automatically queries the member’s policy registry to verify active cover status, deductibles, and remaining annual limits. When approvals are processed, database-level transactions lock and deduct balances atomically, eliminating double-spending and unverified payouts.",
      },
      {
        q: "What happens when a claim exceeds the 48-hour review window?",
        a: "An automated background worker continuously tracks active claims against defined SLAs. If a claim sits in any officer's queue without action for more than 48 hours, the platform automatically flags it as Escalated, shifts its visual priority in the pipeline, and alerts supervisors to resolve the bottleneck.",
      },
      {
        q: "Can ClaimsDesk be used in other countries or customized for our specific rules?",
        a: "Yes. ClaimsDesk adapts to any market and local currency. Your team can easily configure all spending limits, escalation timers, and payout rules. For organizations with complex regulatory needs, unique hierarchies, or legacy systems, our Enterprise Edition provides fully tailored integrations and custom-built features.",
      },
    ],
  },
  {
    category: "Approval Engine & Governance",
    icon: ShieldCheck,
    items: [
      {
        q: "Can we customize the financial approval thresholds?",
        a: "Yes. The standard deployment uses a three-tier model (Claims Officer up to KSh 100,000; Underwriting Manager up to KSh 500,000; Finance Director above KSh 500,000). These monetary bands and approval tiers can be tailored to match your institution's specific internal Delegation of Authority (DoA) policy.",
      },
      {
        q: "Can a user submit and approve their own claim?",
        a: "No. ClaimsDesk enforces strict Role-Based Access Control (RBAC) and separation of duties. Users assigned to intake and registration cannot trigger approval actions on claims they create, protecting transaction integrity.",
      },
      {
        q: "How does the system handle audit trails for regulators?",
        a: "Every state transition—from submission, document review, and status escalation to final payout sign-off—is committed to an immutable audit ledger. The record captures the user identity, role, timestamp, old and new status, and approval notes, making statutory compliance reviews straightforward.",
      },
    ],
  },
  {
    category: "Integration & Security",
    icon: LockKeyhole,
    items: [
      {
        q: "Can ClaimsDesk integrate with our existing core insurance system or ERP?",
        a: "Yes. Built on a decoupled REST API architecture, ClaimsDesk can sync member policies, ingest claims from customer-facing web apps, and push approved payment instructions to third-party ERPs, core banking APIs, or mobile money disbursement gateways.",
      },
      {
        q: "Is on-premise deployment supported for regulatory data compliance?",
        a: "Yes. While managed cloud hosting is standard, enterprise deployments support on-premise installation within your private data center or local cloud tenant to satisfy data sovereignty and Insurance Regulatory Authority (IRA) compliance requirements.",
      },
      {
        q: "How is sensitive customer and financial data secured?",
        a: "The platform utilizes encrypted connections (TLS/HTTPS), salted password hashing, JWT bearer tokens with role claims for API authorization, and parameter-safe database operations to prevent injection attacks.",
      },
    ],
  },
  {
    category: "Pricing & Pilot Accounts",
    icon: Coins,
    items: [
      {
        q: "What is included in the 30-day free pilot?",
        a: "The 30-day pilot provides full access to test the platform with up to 5 staff seats and 100 test claims. It includes complete access to the approval engine, SLA escalation alerts, and reporting dashboards without requiring a credit card.",
      },
      {
        q: "How does the KSh 1,000 per user per month billing work?",
        a: "Pricing is calculated strictly on active internal staff seats (claims officers, underwriters, finance reviewers, and system admins). You can add or deactivate user seats at any time, with billing adjusting accordingly on your monthly cycle.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="Frequently Asked Questions"
          title="Everything you need to know."
          description="Find answers to common questions about ClaimsDesk's operations, security, integration, and pricing models."
        />
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="grid gap-12">
              {faqs.map((section) => (
                <div
                  key={section.category}
                  className="rounded-2xl border border-border bg-card p-6 md:p-10"
                >
                  <div className="flex items-center gap-4 border-b border-border pb-6 mb-6">
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                      <section.icon className="size-5" />
                    </span>
                    <h2 className="text-xl font-bold">{section.category}</h2>
                  </div>
                  <Accordion type="multiple" className="w-full">
                    {section.items.map((item, i) => (
                      <AccordionItem key={item.q} value={`item-${i}`}>
                        <AccordionTrigger className="text-left font-bold text-base hover:text-brand">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-6 text-muted-foreground pt-2 pb-4">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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
