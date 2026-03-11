# GSMS — Step 4: Authentication System

Step 4 implements the core authentication workflows for the backend API scaffold.

## Implemented Endpoints

All endpoints are served under `/api/v1/auth`.

- `POST /register`
  - Creates user account with hashed password and role list.
  - Generates an email verification token.
- `POST /verify-email`
  - Verifies account using one-time token.
- `POST /login`
  - Validates credentials and email verification status.
  - Issues access token + refresh token.
- `POST /refresh`
  - Verifies refresh token JWT.
  - Checks token hash storage, revocation status, and expiry.
  - Rotates refresh token (old revoked, new issued).
- `POST /logout`
  - Revokes the submitted refresh token.
- `POST /forgot-password`
  - Returns generic response and issues reset token when user exists.
- `POST /reset-password`
  - Validates reset token and updates password hash.
- `GET /super-admin-only`
  - Protected route demonstrating `requireAuth + requireRoles` RBAC middleware.

## Security Controls Added

- Bcrypt hashing for passwords.
- JWT access + refresh tokens with separate secrets.
- Stored **hashed** refresh tokens for revocation checks.
- One-time email verification and password reset tokens.
- Validation with Zod for all auth payloads.
- Role-based route authorization middleware.

## Implementation Notes

- Current persistence is an in-memory repository (`auth.repository.ts`) to unblock flow validation before database integration.
- In Step 5, this repository will be replaced by PostgreSQL-backed repositories aligned with Step 2 schema.

## Test Coverage Added

- Registration + email verification + login + refresh + logout flow.
- Forgot-password + reset-password flow.
- Unverified user login denial.
- RBAC gate test via `super-admin-only` route.
