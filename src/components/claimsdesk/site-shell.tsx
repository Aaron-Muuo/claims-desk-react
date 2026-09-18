import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Architecture", to: "/architecture" },
  { label: "API Contract", to: "/api-contract" },
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${inverse ? "text-primary-foreground" : "text-foreground"}`} aria-label="ClaimsDesk home">
      <span className={`grid size-9 place-items-center rounded-md ${inverse ? "bg-primary-foreground/10" : "bg-primary text-primary-foreground"}`}><ShieldCheck className="size-5" /></span>
      <span className="text-[17px] font-bold">ClaimsDesk</span>
      <span className={`rounded-sm border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] ${inverse ? "border-primary-foreground/20 text-primary-foreground/70" : "border-border text-muted-foreground"}`}>Enterprise</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center rounded-md border border-border bg-card p-1 shadow-xs md:flex" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.to} to={item.to} className={`rounded px-4 py-2 text-xs font-semibold transition-colors ${pathname === item.to ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{item.label}</Link>)}
        </nav>
        <div className="hidden md:block"><Button asChild size="sm"><Link to="/login">Staff Portal Login</Link></Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <div className="border-t border-border bg-background px-5 py-4 md:hidden"><nav className="grid gap-1">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-secondary">{item.label}</Link>)}<Button asChild className="mt-2"><Link to="/login">Staff Portal Login</Link></Button></nav></div>}
    </header>
  );
}

export function MarketingLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div><Brand inverse /><p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">A workflow and approval engine engineered for licensed insurers, underwriters, and regulated claims teams.</p></div>
        <div><p className="footer-title">Platform</p><div className="footer-links"><Link to="/features">Features</Link><Link to="/architecture">Architecture</Link><Link to="/api-contract">API Contract</Link></div></div>
        <div><p className="footer-title">Access</p><div className="footer-links"><Link to="/login">Staff Portal</Link><span>Enterprise support</span><span>Audit documentation</span></div></div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-ink-border px-5 py-5 text-xs text-ink-muted sm:flex-row sm:justify-between lg:px-8"><span>© 2026 ClaimsDesk. Portfolio demonstration.</span><span>Nairobi, Kenya · Built for regulated operations</span></div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-surface-soft"><div className="mx-auto max-w-7xl px-5 py-18 lg:px-8 lg:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p></div></section>;
}
