# ClaimsDesk Enterprise

Build a modern, enterprise-grade B2B SaaS marketing website and internal staff authentication screen for "ClaimsDesk" — an automated insurance claims workflow and approval engine designed specifically for licensed insurance companies and underwriters (not consumer-facing).

This project is a high-level portfolio demonstration, so the interface must look like a polished, production-ready enterprise product with realistic mock data and interactive elements.

---

### Tech Stack & Design System
- Framework: React, Tailwind CSS, Lucide React icons.
- Visual Aesthetic: Modern enterprise fintech/insurtech. Clean slate/navy dark-slate backgrounds with crisp whites, neutral borders (`border-slate-200` / `border-slate-800`), and deep emerald or indigo accents.
- Typography: Sharp, scannable sans-serif. Highly legible tables, badges, and financial metrics.
- Currency formatting for sample metrics: Kenya Shillings (KSh).

---

### Pages & Requirements

#### 1. Global Navigation
- Brand Logo: "ClaimsDesk" with a subtle shield/workflow icon and an "Enterprise" badge.
- Nav Links: Home, Features, Architecture / About, API Contract.
- Right Action: High-contrast button labeled "Staff Portal Login" linking directly to the login view.

#### 2. Home Page (B2B Enterprise Landing)
- Hero Section: 
  - Headline: "Automate Insurance Claims & Multi-Tier Approvals with Absolute Audit Integrity."
  - Subtitle: "Purpose-built for insurance providers, underwriters, and claims officers. Enforce financial sign-off thresholds, automate SLA escalations, and eliminate manual review bottlenecks."
  - Primary CTAs: "Launch Staff Portal" (opens login) and "Explore System Architecture" (links to About).
  - Visual element: An interactive preview mockup card of the Claims Processing Engine showing real-time stats:
    - Total Exposure: KSh 48,250,000
    - Pending Authorizations: KSh 2,450,000
    - Active Claims in Pipeline: 124
    - SLA Compliance Rate: 99.4%
- Feature Grid:
  - 1. Threshold-Based Approval Rules (Claims Officer < KSh 100k, Underwriter < KSh 500k, Finance Director > KSh 500k).
  - 2. Transactional Database Integrity (Atomic policy balance deductions, zero double-spend risks).
  - 3. 24/7 SLA Background Escalation (Automatic flagging of overdue claims pending > 48 hours).
  - 4. Statutory & Audit Readiness (Immutable audit trails for regulatory compliance).
- Workflow Visualizer: A clean 4-step horizontal stepper showing the pipeline: `Intake & Policy Validation -> Threshold Routing -> Approval & Payout Execution -> Settled & Archived`.

#### 3. About / Technical Architecture Page
- Positioning: Explain why ClaimsDesk was engineered for regulated insurance environments.
- Problem vs. Solution comparison cards (Manual spreadsheets & email chains vs. Automated API-first workflow).
- Technical Capabilities Grid:
  - Decoupled REST API backend ready for high-volume transactions.
  - Role-Based Access Control (RBAC) enforcing strict separation of duties.
  - Granular Policy Registry tracking active covers and real-time deductibles.
- Disclaimer banner at the bottom: "Portfolio Implementation built to demonstrate production-grade insurance system architecture."

#### 4. Staff Login Screen (`/login`)
- Layout: Split-screen layout (Left side: dark enterprise branding banner with platform highlights; Right side: clean, centered authentication card).
- Form Elements:
  - Corporate Email input (`name@assurance-group.com`).
  - Password input with toggle visibility.
  - "Remember this terminal" checkbox.
  - "Sign In to Terminal" primary button.
- Demo Role Presets (Critical for portfolio testing):
  - Add a "1-Click Demo Accounts" selector or pill buttons right below the login form so visitors/recruiters can pre-fill credentials:
    1. Claims Officer (Limit: KSh 100,000)
    2. Underwriting Manager (Limit: KSh 500,000)
    3. Finance Director (Limit: KSh 5,000,000+)
    4. Compliance Auditor (Read-Only)
- Mock State Behavior:
  - On submit, simulate an authentication delay with a spinner, show a success toast ("Authenticated as [Role]"), and route to a mock dashboard view with appropriate role badges.

i have attached hero and homepage vibe screenshots for structure and feel of the ui

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a0a068ae-e8e9-43b3-a898-83e3f89952c5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
