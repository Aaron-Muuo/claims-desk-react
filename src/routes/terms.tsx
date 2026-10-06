import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <MarketingLayout>
      <main className="flex-1 animate-fade-in-top">
        <PageIntro
          eyebrow="Legal"
          title="Terms & Conditions"
          description="Read the terms and conditions governing the use of ClaimsDesk services."
        />
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5 text-muted-foreground lg:px-8 space-y-6">
            <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ClaimsDesk, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
            
            <h2 className="text-xl font-bold text-foreground">2. Service Usage</h2>
            <p>
              ClaimsDesk provides enterprise claims automation software. You agree to use the
              service only for lawful purposes and in a way that does not infringe the rights of,
              restrict or inhibit anyone else's use and enjoyment of the platform.
            </p>

            <h2 className="text-xl font-bold text-foreground">3. User Accounts</h2>
            <p>
              To use certain features of the service, you must register for an account. You are
              responsible for maintaining the confidentiality of your account information.
            </p>
            
            <h2 className="text-xl font-bold text-foreground">4. Liability</h2>
            <p>
              ClaimsDesk shall not be liable for any indirect, incidental, special, consequential
              or punitive damages, or any loss of profits or revenues.
            </p>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
