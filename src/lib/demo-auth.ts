export type DemoRole = "Claims Officer" | "Underwriting Manager" | "Finance Director" | "Compliance Auditor";
export type DemoUser = { role: DemoRole; limit: string; email: string; initials: string };
export const demoUsers: DemoUser[] = [
  { role: "Claims Officer", limit: "KSh 100,000", email: "officer@assurance-group.com", initials: "CO" },
  { role: "Underwriting Manager", limit: "KSh 500,000", email: "underwriter@assurance-group.com", initials: "UM" },
  { role: "Finance Director", limit: "KSh 5,000,000+", email: "finance@assurance-group.com", initials: "FD" },
  { role: "Compliance Auditor", limit: "Read-only access", email: "auditor@assurance-group.com", initials: "CA" },
];
export const DEMO_SESSION_KEY = "claimsdesk-demo-role";
