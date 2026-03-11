# GSMS — Step 5: User Management Module

Step 5 introduces the first user management APIs on top of the Step 4 authentication foundation.

## Implemented Endpoints

All endpoints are served under `/api/v1/users`.

- `GET /me`
  - Returns profile for authenticated user.
  - Requires `Authorization: Bearer <access_token>`.
- `GET /`
  - Lists users for the caller's school scope.
  - Requires `SUPER_ADMIN` or `SCHOOL_ADMIN` role.
- `PATCH /:userId/roles`
  - Updates user role list.
  - Requires `SUPER_ADMIN` role.

## What was added

- New `users` module:
  - `users.routes.ts`
  - `users.controller.ts`
  - `users.service.ts`
  - `users.schemas.ts`
- Route wired into API router under `/api/v1/users`.
- Auth repository extended with `listUsers()` to support user directory queries.
- Added integration tests for:
  - listing users
  - updating roles
  - fetching self profile

## Security and RBAC behavior

- All user endpoints are authenticated.
- Role checks are enforced using `requireRoles` middleware.
- List endpoint is scoped to request user's `schoolId`.

## Current limitation

- Persistence is still in-memory via `auth.repository.ts`.
- Step 6 should move user management storage to PostgreSQL repositories and include pagination/filtering for large schools.
