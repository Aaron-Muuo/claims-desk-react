# ClaimsDesk enterprise website and staff demo

## Overview
Build a polished, responsive B2B insurtech website with separate Home, Features, Architecture/About, API Contract, Login, and mock Dashboard views. The visual language will follow the supplied references: generous editorial spacing, crisp modular panels, a compact navigation capsule, pale mint/white surfaces, deep slate text, emerald accents, and restrained motion.

## Pages and experience
- Add shared navigation with the ClaimsDesk shield/workflow mark, Enterprise badge, route-aware links, mobile menu, and Staff Portal Login action.
- Build the Home page with the supplied messaging, two actions, an interactive claims-engine preview, four capability panels, and a four-stage workflow visualizer.
- Build a dedicated Features page expanding the approval, integrity, escalation, and audit capabilities with realistic operational details.
- Build the Architecture/About page with regulated-environment positioning, manual-versus-automated comparison, technical capability grid, system flow, and portfolio disclaimer.
- Build the API Contract page as a polished developer-facing reference with endpoint navigation, request/response examples, status indicators, and copyable snippets.
- Build the split-screen Login page with email/password controls, password visibility, remembered-terminal option, four one-click demo roles, simulated loading, and success notification.
- Route successful demo sign-ins to a role-aware mock Dashboard showing the selected role badge, authorization limit, exposure metrics, approval queue, claims table, SLA health, and sign-out action.

## Interaction and content
- Use realistic Kenya Shilling metrics and insurance claim records throughout.
- Make the home preview switch between pipeline stages and expose representative activity details.
- Make demo account presets populate the form; submitting displays progress, confirms the chosen role, and opens the dashboard.
- Keep authentication intentionally simulated and session-scoped for this portfolio demonstration; no real accounts or persistent customer data will be created.
- Ensure keyboard-accessible controls, visible focus states, clear form feedback, responsive layouts, and reduced-motion support.

## Visual system
- Define semantic Tailwind tokens for deep slate, white, pale mint, emerald, indigo, status colors, borders, shadows, and compact radii.
- Use a sharp sans-serif pairing with tabular numerals for financial metrics and dense operational data.
- Carry the references’ editorial spacing and modular card rhythm into a more enterprise, software-focused composition without embedding the reference images.
- Use Lucide icons consistently for navigation, workflow, security, status, and utility actions.

## Technical details
- Implement all requested destinations as TanStack routes with unique search/social metadata.
- Add focused reusable components for the site shell, brand mark, metrics, workflow, feature panels, authentication controls, and dashboard tables.
- Use in-browser state only for the requested mock authentication delay, role selection, notification, and dashboard session.
- Verify the primary flows and visual layout at desktop and mobile sizes, including all navigation targets and each demo role.
