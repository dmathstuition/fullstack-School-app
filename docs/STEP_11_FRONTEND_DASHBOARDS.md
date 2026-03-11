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

## Full Teacher platform pages

- `/teacher`
- `/teacher/my-classes`
- `/teacher/attendance`
- `/teacher/assignments`
- `/teacher/results`
- `/teacher/timetable`
- `/teacher/exams`
- `/teacher/cbt`
- `/teacher/messages`
- `/teacher/performance`
- `/teacher/salary`
- `/teacher/resources`
- `/teacher/profile`

## Full Student platform pages

- `/student`
- `/student/timetable`
- `/student/assignments`
- `/student/results`
- `/student/payments`
- `/student/attendance`
- `/student/subjects`
- `/student/library`
- `/student/exams`
- `/student/cbt`
- `/student/messages`
- `/student/profile`

## UI framework

- Shared layout primitives:
  - Sidebar navigation by role
  - Header with theme toggle button
  - Stat cards
  - Data table for activities
- Mobile-first responsive layout using Tailwind utility classes.
  - Header with action buttons
  - Stat cards
  - Data table for activities
  - Quick actions panel
- Mobile-first responsive layout using modern flex/grid composition.
- Colorful gradient design system with elevated contrast.
- Glassmorphism visual style using translucent cards + blur surfaces.
  - Class performance + subject-distribution chart cards
- Mobile-first responsive layout using modern flex/grid composition.
- Multi-educational color design (blue, purple, green, orange accents) to represent varied academic modules.
- Glassmorphism visual style using translucent cards + blur surfaces.
- Animated button effects (`edu-btn`) with hover lift + shine transitions.
- Dark-mode compatible tokens via Tailwind `dark` strategy.

## Next integration steps

1. Connect role pages to authenticated session state.
2. Consume `/api/v1` backend endpoints for live data.
3. Add chart components and notifications drawer.
3. Replace static chart placeholders with live chart data from attendance/results modules.
4. Add route guards and RBAC navigation filtering from JWT claims.
