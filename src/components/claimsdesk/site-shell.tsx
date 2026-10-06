import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShieldCheck, X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CurrencySwitcher } from "./currency-switcher";
import { LanguageSwitcher } from "./language-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 ${inverse ? "text-primary-foreground" : "text-foreground"}`}
      aria-label="ClaimsDesk home"
    >
      <img src={inverse ? "/logo-2.png" : "/logo.png"} alt="ClaimsDesk" className={inverse ? "h-10 w-auto object-contain" : "w-8 h-8 object-contain"} />
      <span className="text-[17px] font-bold">ClaimsDesk</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`flex h-full items-center rounded-full px-4 text-xs font-semibold transition-colors ${
        pathname === to
          ? "bg-secondary text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-5xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <div className="hidden items-center gap-4 md:flex">
          <nav
            className="flex h-10 items-center rounded-full border border-border bg-card p-1"
            aria-label="Primary navigation"
          >
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/pricing" label="Pricing" />
            <NavLink to="/faq" label="FAQ" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex h-full items-center gap-1 rounded-full px-4 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground">
                  More <ChevronDown className="size-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[700px] p-4">
                <div className="grid grid-cols-3 gap-4">
                  <DropdownMenuItem
                    asChild
                    className="h-auto flex-col items-start p-4 cursor-pointer focus:bg-secondary"
                  >
                    <Link to="/features" className="group flex flex-col w-full">
                      <div className="flex w-full items-center justify-between mb-2">
                        <span className="font-bold text-sm text-foreground">Features</span>
                        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        Explore the core workflow mechanics, policy validation, and deterministic
                        approvals.
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="h-auto flex-col items-start p-4 cursor-pointer focus:bg-secondary"
                  >
                    <Link to="/architecture" className="group flex flex-col w-full">
                      <div className="flex w-full items-center justify-between mb-2">
                        <span className="font-bold text-sm text-foreground">Architecture</span>
                        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        Review our scalable infrastructure, decoupled API, and immutable audit
                        ledgers.
                      </span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="h-auto flex-col items-start p-4 cursor-pointer focus:bg-secondary"
                  >
                    <Link to="/api-docs" className="group flex flex-col w-full">
                      <div className="flex w-full items-center justify-between mb-2">
                        <span className="font-bold text-sm text-foreground">API Docs</span>
                        <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        Developer-friendly REST API for seamless integration with existing systems.
                      </span>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink to="/contact" label="Contact Us" />
          </nav>
          <Button asChild className="h-10 rounded-full px-5">
            <Link to="/login" className="flex items-center gap-2">
              Try demo <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <nav className="grid gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              About
            </Link>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              FAQ
            </Link>
            <Link
              to="/features"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              Features
            </Link>
            <Link
              to="/architecture"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              Architecture
            </Link>
            <Link
              to="/api-docs"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium hover:bg-secondary"
            >
              API Docs
            </Link>
            <Button asChild className="mt-2 w-full justify-center">
              <Link to="/login" className="flex items-center gap-2">
                Try demo <ArrowRight className="size-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full bg-brand text-brand-foreground py-1">
        <div className="mx-auto flex max-w-5xl justify-end items-center gap-1 px-5 lg:px-8">
          <LanguageSwitcher />
          <div className="h-4 w-px bg-white/20 mx-1" />
          <CurrencySwitcher />
        </div>
      </div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
            An automated workflow and approval platform for licensed insurers, underwriters, and
             claims teams.
          </p>
        </div>
        <div>
          <p className="footer-title">Platform</p>
          <div className="footer-links">
            <Link to="/pricing">Pricing</Link>
            <Link to="/features">Features</Link>
            <Link to="/architecture">Architecture</Link>
            <Link to="/api-docs">Developer API Docs</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Relevant Links</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Access</p>
          <div className="footer-links">
            <Link to="/login">Try Demo</Link>
            <span>Enterprise support</span>
            <span>Audit documentation</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-2 border-t border-ink-border px-5 py-5 text-xs text-ink-muted sm:flex-row sm:justify-between lg:px-8">
        <span>© 2026 ClaimsDesk. Portfolio demonstration.</span>
        <span>Built by Aaron M.</span>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-surface-soft">
      <div className="mx-auto max-w-5xl px-5 py-18 lg:px-8 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 w-full text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
