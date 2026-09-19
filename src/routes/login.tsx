import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  FileCheck2,
  LoaderCircle,
  LockKeyhole,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { toast } from "sonner";
import { Brand } from "@/components/claimsdesk/site-shell";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { demoUsers, type DemoUser } from "@/lib/demo-auth";
export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Staff Portal Login — ClaimsDesk" },
      {
        name: "description",
        content:
          "Access the ClaimsDesk portfolio staff portal using a demonstration insurance operations role.",
      },
      { property: "og:title", content: "Staff Portal Login — ClaimsDesk" },
      {
        property: "og:description",
        content: "Secure demonstration access to the ClaimsDesk staff workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});
function LoginPage() {
  const navigate = useNavigate({ from: "/login" });
  const [selected, setSelected] = useState<DemoUser>(demoUsers[0]);
  const [email, setEmail] = useState(demoUsers[0].email);
  const [password, setPassword] = useState("ClaimsDesk2026!");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const choose = (u: DemoUser) => {
    setSelected(u);
    setEmail(u.email);
    setPassword("ClaimsDesk2026!");
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success(`Authenticated as ${selected.role}`);
      navigate({ to: "/dashboard", search: { role: selected.role } });
    }, 1100);
  };
  return (
    <main className="grid min-h-screen animate-fade-in-top lg:grid-cols-[.9fr_1.1fr]">
      <section className="login-brand-panel sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="relative z-10 flex flex-1 flex-col justify-between py-10">
          <Brand inverse />
          <div className="my-auto max-w-xl">
            <p className="eyebrow text-brand-bright">Claims operations terminal</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-ink-foreground md:text-5xl">
              Decisions move faster when control is built in.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-ink-muted">
              Review, authorize, and audit insurance claims through one governed workspace.
            </p>
          </div>
          <p className="text-xs text-ink-muted mt-auto">
            Authorized staff access · Demonstration environment
          </p>
        </div>
      </section>
      <section className="flex min-h-full items-center justify-center bg-surface-soft px-5 py-12">
        <div className="w-full max-w-lg">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to website
          </Link>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-9">
            <div className="flex items-start justify-between">
              <div>
                <p className="eyebrow">Secure access</p>
                <h2 className="mt-3 text-3xl font-bold">Staff portal login</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use a demo role to inspect the terminal.
                </p>
              </div>
              <span className="icon-well">
                <ShieldCheck />
              </span>
            </div>
            <form className="mt-8 space-y-5" onSubmit={submit}>
              <label className="form-label">
                Corporate email
                <Input
                  className="mt-2 h-11"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@assurance-group.com"
                  required
                />
              </label>
              <label className="form-label">
                Password
                <div className="relative mt-2">
                  <Input
                    className="h-11 pr-10"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1"
                    onClick={() => setShow(!show)}
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {show ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-xs font-medium">
                <Checkbox checked={remember} onCheckedChange={(v) => setRemember(v === true)} />
                Remember this terminal
              </label>
              <Button className="h-11 w-full" disabled={loading}>
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Authenticating…
                  </>
                ) : (
                  "Sign In to Terminal"
                )}
              </Button>
            </form>
            <div className="my-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-bold uppercase tracking-[.14em] text-muted-foreground">
                1-click demo accounts
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {demoUsers.map((u) => (
                <button
                  key={u.role}
                  type="button"
                  className={`role-preset ${selected.role === u.role ? "role-preset-active" : ""}`}
                  onClick={() => choose(u)}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-secondary text-[10px] font-bold">
                    {u.initials}
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block truncate text-xs font-bold">{u.role}</span>
                    <span className="block truncate text-[10px] text-muted-foreground">
                      {u.limit}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <p className="mt-5 text-center text-[11px] leading-5 text-muted-foreground">
            Mock authentication only. No real credentials or personal data are stored.
          </p>
        </div>
      </section>
    </main>
  );
}
