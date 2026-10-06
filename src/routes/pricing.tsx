import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
import { CircleCheck, ShieldCheck, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCurrency } from "@/lib/currency";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing - ClaimsDesk" },
      { name: "description", content: "Pricing plans for ClaimsDesk." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    priceText: "Free",
    interval: "/ 30 days",
    audience: "Kickstart your journey with ClaimsDesk",
    features: [
      "Up to 5 team members",
      "Up to 100 sandbox claims",
      "Standard 3-tier rules",
      "Manual review only",
      "Standard audit history",
      "Webhook triggers",
      "Community & email support",
    ],
    cta: "Start 30-Day Trial",
    highlight: false,
    to: "/login",
  },
  {
    name: "Pro",
    basePrice: 1000,
    interval: "/ seat / month",
    audience: "Growing claims & underwriting teams",
    features: [
      "Unlimited claims processing",
      "Customizable financial thresholds",
      "Automated 48-hour background worker",
      "Full immutable audit ledger & export",
      "API access",
      "Priority email (24-hour response)",
    ],
    cta: "Buy Now",
    highlight: true,
    to: "/login",
    taxNote: "(exclusive of tax)"
  },
  {
    name: "Enterprise",
    priceText: "Annual License",
    interval: "/ organization",
    audience: "Regulated insurers & high-volume underwriters",
    features: [
      "Unlimited users",
      "Unlimited claims processing",
      "Multi-entity & cross-department routing",
      "Custom SLA timers & SMS alerts",
      "Regulatory reporting & audit logs",
      "ERP, core banking, & payment gateways",
      "On-Premise Deployment",
      "Addons and customizations",
    ],
    cta: "Contact Sales",
    highlight: false,
    to: "/login",
  },
];

const faqs = [
  {
    q: "What happens after the 30-day trial ends?",
    a: "Your account pauses automatically. We retain your sandbox data securely until you upgrade to a paid plan, allowing you to pick up exactly where you left off.",
  },
  {
    q: "Can we add or remove claims officers mid-month?",
    a: "Yes. Our billing is flexible-seats are pro-rated automatically so you only pay for the exact active time of each user.",
  },
  {
    q: "Can the system deploy on private cloud or on-premise?",
    a: "Yes. Private cloud and on-premise deployments are available under the Enterprise tier to meet strict regulatory data sovereignty requirements.",
  },
];

function PricingPage() {
  const { format } = useCurrency();
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <MarketingLayout>
      <main className="animate-fade-in-top">
        <PageIntro
          eyebrow="Pricing Plans"
          title="Enterprise claims automation for every scale."
          description="Clear differentiation between trial evaluation, operational scaling, and institutional compliance. No credit card required to start."
        />

        {/* Pricing Cards */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            {/* Annual Toggle */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-3 bg-surface-soft p-2 rounded-full border border-border">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Annually</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand/10 text-brand text-xs font-bold">Save 16% (2 months free)</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {plans.slice(0, 2).map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-[2rem] border bg-card p-8 ${
                    plan.highlight ? "border-brand" : "border-border"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-max rounded-full bg-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">{plan.audience}</p>
                  <div className="mt-6 flex flex-col items-start gap-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight text-foreground">
                        {plan.basePrice !== undefined
                          ? format(isAnnual ? plan.basePrice * (10 / 12) : plan.basePrice)
                          : plan.priceText}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {plan.interval}
                      </span>
                    </div>
                    {plan.taxNote && (
                      <span className="text-xs text-muted-foreground/80">{plan.taxNote}</span>
                    )}
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="mt-8 w-full"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link to={plan.to}>{plan.cta}</Link>
                  </Button>
                  <ul className="mt-10 flex flex-1 flex-col gap-4 text-sm text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <CircleCheck className="size-4 shrink-0 text-brand" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Enterprise Full-Width Card */}
            <div className="mt-8 relative flex flex-col rounded-[2rem] border border-primary bg-primary p-8 text-primary-foreground lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                </div>
                <p className="mt-3 text-sm text-primary-foreground/80">{plans[2].audience}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-xl tracking-tight">{plans[2].priceText}</span>
                  <span className="text-sm font-medium text-primary-foreground/80">
                      {plans[2].interval}
                    </span>
                </div>
                <Button asChild size="lg" variant="secondary" className="mt-8 w-full">
                  <Link to={plans[2].to}>{plans[2].cta}</Link>
                </Button>
              </div>

              <div className="mt-10 lg:mt-0 lg:w-2/3">
                <ul className="grid gap-4 sm:grid-cols-2 text-sm text-primary-foreground/90">
                  {plans[2].features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CircleCheck className="size-4 shrink-0 text-primary-foreground" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Banner */}
        <section className="bg-surface-soft py-16">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="text-xl font-bold">Institutional Security</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Engineered for licensed insurers and underwriters, meeting strict regulatory
                    requirements.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <Lock className="mb-2 size-5 text-brand" />
                    <h4 className="text-sm font-bold">RBAC</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Strict role-based access control
                    </p>
                  </div>
                  <div>
                    <ShieldCheck className="mb-2 size-5 text-brand" />
                    <h4 className="text-sm font-bold">End-to-End Encryption</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Data secured in transit and at rest
                    </p>
                  </div>
                  <div>
                    <Database className="mb-2 size-5 text-brand" />
                    <h4 className="text-sm font-bold">Daily Backups</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Automated database replication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <div className="text-center">
              <p className="eyebrow">Questions & Answers</p>
              <h2 className="section-title mx-auto">Pricing FAQs</h2>
            </div>
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`item-${i}`}>
                    <AccordionTrigger className="text-base">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-6 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
