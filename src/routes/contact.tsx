import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout, PageIntro } from "@/components/claimsdesk/site-shell";
import { MapPin, Mail, Phone, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <MarketingLayout>
      <main className="flex-1 animate-fade-in-top">
        <PageIntro
          eyebrow="Reach Out"
          title="Contact Us"
          description="Get in touch with the ClaimsDesk team for enterprise support and general inquiries."
        />
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-16 items-start">
              
              {/* Left Pane: Details & Location */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    We're here to help
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Whether you need technical guidance, pricing details, or enterprise support, our team of experts is ready to assist you.
                  </p>
                </div>
                
                <div className="space-y-6 border-t border-border pt-8">
                  <div className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand/10 text-brand">
                      <LifeBuoy className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Enterprise Support</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Existing customers get priority 24/7 support. Check your SLA dashboard or reach out directly to your account manager.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand/10 text-brand">
                      <MapPin className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Global Headquarters</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        ClaimsDesk Tower<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand/10 text-brand">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        contact@claimsdesk.example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand/10 text-brand">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Phone</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        +254 700 000 000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Pane: iOS Style Form */}
              <div className="rounded-[2rem] border border-border/60 bg-card p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Send a message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">First Name</label>
                      <input id="first-name" className="flex h-12 w-full rounded-md border-transparent bg-secondary/60 px-4 text-sm transition-colors focus:bg-background focus:ring-2 focus:ring-brand outline-none placeholder:text-muted-foreground/60" placeholder="Jane" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Last Name</label>
                      <input id="last-name" className="flex h-12 w-full rounded-md border-transparent bg-secondary/60 px-4 text-sm transition-colors focus:bg-background focus:ring-2 focus:ring-brand outline-none placeholder:text-muted-foreground/60" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email</label>
                    <input id="email" type="email" className="flex h-12 w-full rounded-md border-transparent bg-secondary/60 px-4 text-sm transition-colors focus:bg-background focus:ring-2 focus:ring-brand outline-none placeholder:text-muted-foreground/60" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                    <textarea id="message" className="flex min-h-[140px] w-full rounded-md border-transparent bg-secondary/60 p-4 text-sm transition-colors focus:bg-background focus:ring-2 focus:ring-brand outline-none resize-none placeholder:text-muted-foreground/60" placeholder="How can we help you today?" />
                  </div>
                  <button type="submit" className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-100">
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
