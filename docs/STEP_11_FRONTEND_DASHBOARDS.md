# GSMS — Step 11: Frontend Dashboards (Next.js + Tailwind)

This step delivers the `apps/web` frontend scaffold and role-based dashboard UI framework.

## Delivered frontend structure

- Next.js App Router scaffold at `apps/web`.
- Tailwind CSS + PostCSS + TypeScript configuration.
- Public pages:
  - `/` landing page
  - `/login`
  - `/register`
- Dashboard pages:
  - `/super-admin`
  - `/school-admin`
  - `/teacher`
  - `/student`
  - `/parent`
  - `/accountant`
  - `/librarian`
  - `/admission-officer`

## UI framework

- Shared layout primitives:
  - Sidebar navigation by role
  - Header with action buttons
  - Stat cards
  - Data table for activities
  - Quick actions panel
- Mobile-first responsive layout using modern flex/grid composition.
- Colorful gradient design system with elevated contrast.
- Glassmorphism visual style using translucent cards + blur surfaces.
- Dark-mode compatible tokens via Tailwind `dark` strategy.

## Next integration steps

1. Connect role pages to authenticated session state.
2. Consume `/api/v1` backend endpoints for live data.
3. Add chart components and notifications drawer.
4. Add route guards and RBAC navigation filtering from JWT claims.
