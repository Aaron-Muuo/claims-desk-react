import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileText,
  Gauge,
  LogOut,
  Menu,
  Search,
  ShieldCheck,
  Users,
  FileCheck,
  BarChart,
  UserCog,
  GitBranch,
  Settings,
  UserCircle,
  HelpCircle,
  User,
} from "lucide-react";
import { Brand } from "@/components/claimsdesk/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { demoUsers } from "@/lib/demo-auth";
const schema = z.object({
  role: z
    .enum(["Claims Officer", "Underwriting Manager", "Finance Director", "Compliance Auditor"])
    .catch("Claims Officer"),
});
export const Route = createFileRoute("/dashboard")({
  validateSearch: (s) => schema.parse(s),
  head: () => ({
    meta: [
      { title: "Claims Operations — ClaimsDesk" },
      {
        name: "description",
        content: "Role-aware demonstration dashboard for ClaimsDesk insurance claims operations.",
      },
      { property: "og:title", content: "Claims Operations — ClaimsDesk" },
      {
        property: "og:description",
        content: "A production-style insurance claims operations workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});
const claims = [
  {
    id: "CLM-2026-1842",
    policy: "POL-MTR-209441",
    claimant: "Amina Wanjiku",
    type: "Motor collision",
    amount: "KSh 248,500",
    age: "3h 12m",
    status: "Awaiting approval",
    tone: "warning",
  },
  {
    id: "CLM-2026-1839",
    policy: "POL-HLT-118204",
    claimant: "Peter Otieno",
    type: "In-patient medical",
    amount: "KSh 84,750",
    age: "7h 48m",
    status: "Assessment",
    tone: "info",
  },
  {
    id: "CLM-2026-1827",
    policy: "POL-PRP-771903",
    claimant: "Karibu Logistics",
    type: "Property damage",
    amount: "KSh 1,840,000",
    age: "22h 05m",
    status: "Director review",
    tone: "danger",
  },
  {
    id: "CLM-2026-1814",
    policy: "POL-MTR-205118",
    claimant: "Njeri Kamau",
    type: "Motor theft",
    amount: "KSh 620,000",
    age: "1d 09h",
    status: "Underwriting",
    tone: "info",
  },
];
function Navbar({ onMenuClick, user }: { onMenuClick: () => void; user: any }) {
  const nav = useNavigate({ from: "/dashboard" });
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-border bg-card">
      <div className="flex h-full items-center justify-between px-5 lg:px-7">
        <div className="flex items-center gap-5">
          <Brand />
          <span className="hidden h-6 w-px bg-border sm:block" />
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="rounded-full">
            <Menu />
          </Button>
          <span className="hidden text-xs font-semibold text-muted-foreground sm:block">
            Operations Terminal
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="Search" className="rounded-full">
            <Search />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="relative rounded-full"
          >
            <Bell />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-danger" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full p-1 pl-3 transition-colors hover:bg-secondary">
                <span className="text-sm font-semibold hidden sm:inline-block">{user.role}</span>
                <div className="grid size-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {user.initials}
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2">
              <DropdownMenuItem className="cursor-pointer rounded-xl p-2.5">
                <User className="mr-2 size-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-xl p-2.5">
                <HelpCircle className="mr-2 size-4" /> Tutorial
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer rounded-xl p-2.5 text-danger focus:bg-danger/10 focus:text-danger"
                onClick={() => nav({ to: "/login" })}
              >
                <LogOut className="mr-2 size-4" /> Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function SideGroup({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground hover:bg-secondary/50 transition-colors"
      >
        {title}
        <ChevronDown
          className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`space-y-1 overflow-hidden transition-all duration-200 ${open ? "mt-1 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

function Sidebar({ user, open }: { user: any; open: boolean }) {
  const nav = useNavigate({ from: "/dashboard" });
  return (
    <aside
      className={`fixed top-16 bottom-0 left-0 z-30 flex w-64 flex-col border-r border-border bg-card p-4 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
        <div className="mb-4">
          <Side icon={Gauge} label="Dashboard" active />
        </div>

        <SideGroup title="Workspace" defaultOpen={true}>
          <Side icon={FileText} label="Claims queue" />
          <Side icon={CheckCircle2} label="Approvals" badge="12" />
        </SideGroup>

        <SideGroup title="Registry">
          <Side icon={Users} label="Members" />
          <Side icon={FileCheck} label="Policies" />
        </SideGroup>

        <SideGroup title="Governance">
          <Side icon={Clock3} label="SLA monitor" />
          <Side icon={ShieldCheck} label="Audit trails" />
          <Side icon={BarChart} label="Reports" />
        </SideGroup>

        <SideGroup title="Admin">
          <Side icon={UserCog} label="User management" />
          <Side icon={UserCircle} label="Profiles" />
          <Side icon={GitBranch} label="Workflows" />
          <Side icon={Settings} label="Settings" />
        </SideGroup>
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-surface-soft p-3">
        <div className="flex items-center gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {user.initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-foreground">Amina Wanjiku</p>
            <p className="truncate text-[10px] text-muted-foreground">{user.role}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 rounded-full text-muted-foreground hover:text-danger hover:bg-danger/10"
            onClick={() => nav({ to: "/login" })}
          >
            <LogOut className="size-4" />
          </Button>
        </div>
      </div>
    </aside>
  );
}

function Dashboard() {
  const { role } = Route.useSearch();
  const user = demoUsers.find((u) => u.role === role) ?? demoUsers[0];
  const readOnly = role === "Compliance Auditor";

  // Start open on desktop, can be toggled
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-dashboard animate-fade-in-top">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} user={user} />

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar user={user} open={sidebarOpen} />

        <main
          className={`flex-1 overflow-y-scroll custom-scrollbar transition-all duration-300 ${
            sidebarOpen ? "lg:pl-64" : "pl-0"
          }`}
        >
          <section className="min-w-0 p-5 lg:p-7">
            <div className="mx-auto max-w-[1440px]">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">
                    Friday, 18 September 2026
                  </p>
                  <h1 className="mt-1 text-2xl font-bold">Claims operations overview</h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Monitor exposure, authorizations, and service commitments.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2">
                  <span className="grid size-9 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {user.initials}
                  </span>
                  <div>
                    <p className="text-xs font-bold">{user.role}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {readOnly ? "Read-only oversight" : `Authority: ${user.limit}`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <DashMetric
                  icon={CircleDollarSign}
                  label="Total exposure"
                  value="KSh 48.25M"
                  trend="+4.8%"
                />
                <DashMetric
                  icon={Clock3}
                  label="Pending authorization"
                  value="KSh 2.45M"
                  trend="12 claims"
                  warn
                />
                <DashMetric icon={FileText} label="Active claims" value="124" trend="+8 today" />
                <DashMetric icon={Gauge} label="SLA compliance" value="99.4%" trend="+0.6%" good />
              </div>
              <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_320px]">
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border px-5 py-4">
                    <div>
                      <h2 className="text-sm font-bold">Priority claims queue</h2>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        Sorted by SLA risk and financial exposure
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full">
                      View all <ChevronRight />
                    </Button>
                  </div>
                  <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full min-w-[760px] text-left">
                      <thead>
                        <tr className="border-b border-border bg-secondary/60 text-[10px] uppercase tracking-[.1em] text-muted-foreground">
                          <th className="px-5 py-3">Claim</th>
                          <th>Claimant</th>
                          <th>Type</th>
                          <th>Exposure</th>
                          <th>Age</th>
                          <th>Status</th>
                          <th className="pr-5"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {claims.map((c) => (
                          <tr
                            key={c.id}
                            className="border-b border-border last:border-0 hover:bg-secondary/40"
                          >
                            <td className="px-5 py-4">
                              <p className="text-xs font-bold">{c.id}</p>
                              <p className="mt-1 text-[10px] text-muted-foreground">{c.policy}</p>
                            </td>
                            <td className="text-xs font-medium">{c.claimant}</td>
                            <td className="text-xs text-muted-foreground">{c.type}</td>
                            <td className="text-xs font-bold tabular-nums">{c.amount}</td>
                            <td className="text-xs tabular-nums text-muted-foreground">{c.age}</td>
                            <td>
                              <Badge variant="outline" className={`rounded-full status-${c.tone}`}>
                                {c.status}
                              </Badge>
                            </td>
                            <td className="pr-5">
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label={`Open ${c.id}`}
                                className="rounded-full"
                              >
                                <ChevronRight />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <aside className="space-y-5">
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-bold">SLA health</h2>
                      <span className="text-lg font-bold text-brand">99.4%</span>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-[99.4%] bg-brand" />
                    </div>
                    <div className="mt-5 space-y-4">
                      <Health label="Within target" value="119" color="bg-brand" />
                      <Health label="Due within 6h" value="4" color="bg-warning" />
                      <Health label="Escalated" value="1" color="bg-danger" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-ink p-5 text-ink-foreground">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="size-4 text-warning" />
                      <h2 className="text-sm font-bold">Attention required</h2>
                    </div>
                    <p className="mt-4 text-2xl font-bold">KSh 1.84M</p>
                    <p className="mt-1 text-xs leading-5 text-ink-muted">
                      Property claim CLM-2026-1827 approaches its review threshold.
                    </p>
                    <Button className="mt-5 w-full rounded-full" disabled={readOnly}>
                      {readOnly ? "Auditor view only" : "Review claim"}
                    </Button>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
function Side({
  icon: Icon,
  label,
  active,
  badge,
}: {
  icon: typeof Gauge;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold ${
        active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary"
      }`}
    >
      <Icon className="size-4" />
      {label}
      {badge && (
        <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-[9px] text-primary-foreground">
          {badge}
        </span>
      )}
    </button>
  );
}
function DashMetric({
  icon: Icon,
  label,
  value,
  trend,
  warn,
  good,
}: {
  icon: typeof Gauge;
  label: string;
  value: string;
  trend: string;
  warn?: boolean;
  good?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="icon-well-small">
          <Icon />
        </span>
        {good ? (
          <ArrowUpRight className="size-4 text-brand" />
        ) : warn ? (
          <AlertTriangle className="size-4 text-warning" />
        ) : (
          <ArrowDownRight className="size-4 text-muted-foreground" />
        )}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-bold tabular-nums">{value}</p>
      <p
        className={`mt-2 text-[10px] font-semibold ${
          good ? "text-brand" : warn ? "text-warning" : "text-muted-foreground"
        }`}
      >
        {trend}
      </p>
    </div>
  );
}
function Health({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center text-xs">
      <span className={`mr-2 size-2 rounded-full ${color}`} />
      <span className="text-muted-foreground">{label}</span>
      <strong className="ml-auto">{value}</strong>
    </div>
  );
}
