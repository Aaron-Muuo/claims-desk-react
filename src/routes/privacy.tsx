import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <MarketingLayout>
      <main className="flex-1 animate-fade-in-top">
        <PageIntro
          eyebrow="Legal"
          title="Privacy Policy"
          description="Learn how we collect, use, and protect your data."
        />
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5 text-muted-foreground lg:px-8 space-y-6">
            <h2 className="text-xl font-bold text-foreground">1. Data Collection</h2>
            <p>
              We collect information that you provide directly to us when using the platform,
              including account details, claims data, and system logs necessary for the operation
              of ClaimsDesk.
            </p>
            
            <h2 className="text-xl font-bold text-foreground">2. Use of Information</h2>
            <p>
              The information we collect is used to provide, maintain, and improve our services,
              to process transactions, and to send related information including confirmations and
              invoices.
            </p>

            <h2 className="text-xl font-bold text-foreground">3. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft,
              misuse and unauthorized access, disclosure, alteration and destruction.
            </p>
            
            <h2 className="text-xl font-bold text-foreground">4. Information Sharing</h2>
            <p>
              We do not share personal information with companies, organizations, or individuals
              outside of ClaimsDesk except in cases where we have your explicit consent or are
              legally required to do so.
            </p>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
