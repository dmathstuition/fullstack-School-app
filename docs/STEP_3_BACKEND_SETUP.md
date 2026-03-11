# GSMS — Step 3: Backend Project Setup (Node.js + Express + TypeScript)

This step scaffolds the backend service foundation for GSMS with production-oriented defaults.

## Completed in this step

- Created `apps/api` service workspace.
- Added TypeScript + Express runtime setup.
- Added strict environment validation with Zod.
- Added structured logging with Pino and HTTP request logging.
- Added baseline security middleware:
  - Helmet
  - CORS (configured origin)
  - Global rate limiting
- Added JWT + bcrypt utility layer for auth foundation.
- Added global error handling and 404 handling.
- Added versioned base API routing with:
  - `GET /api/v1/health/live`
  - `GET /api/v1/health/ready`
  - `POST /api/v1/auth/login`
- Added basic integration tests for health and auth routes.
- Added `.env.example` for local and CI configuration.

## Folder structure introduced

```text
apps/api/
├── .env.example
├── package.json
├── tsconfig.json
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── env.ts
│   │   ├── logger.ts
│   │   └── security.ts
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── rateLimit.middleware.ts
│   │   └── rbac.middleware.ts
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.schemas.ts
│   │   │   └── auth.service.ts
│   │   └── health/
│   │       ├── health.controller.ts
│   │       └── health.routes.ts
│   ├── routes/
│   │   └── index.ts
│   └── shared/
│       └── types/
│           └── express.d.ts
└── tests/
    ├── auth.test.ts
    └── health.test.ts
```

## Notes

- The current auth service is intentionally scaffold-level and returns signed tokens from a mock payload.
- In Step 4, the auth module will be connected to persistence (users, roles, refresh token store), password verification, email verification, and forgot-password workflows.
