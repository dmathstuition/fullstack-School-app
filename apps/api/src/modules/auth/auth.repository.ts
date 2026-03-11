import { randomUUID } from "crypto";

export interface AuthUserRecord {
  id: string;
  schoolId: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  roles: string[];
  isEmailVerified: boolean;
  createdAt: Date;
}

interface RefreshTokenRecord {
  tokenHash: string;
  userId: string;
  expiresAt: Date;
  revokedAt?: Date;
}

interface VerificationTokenRecord {
  token: string;
  userId: string;
  expiresAt: Date;
}

interface PasswordResetTokenRecord {
  token: string;
  userId: string;
  expiresAt: Date;
}

const users = new Map<string, AuthUserRecord>();
const usersByEmail = new Map<string, string>();
const refreshTokens = new Map<string, RefreshTokenRecord>();
const verificationTokens = new Map<string, VerificationTokenRecord>();
const resetTokens = new Map<string, PasswordResetTokenRecord>();

export const authRepository = {
  async createUser(input: Omit<AuthUserRecord, "id" | "createdAt" | "isEmailVerified">): Promise<AuthUserRecord> {
    const user: AuthUserRecord = {
      id: randomUUID(),
      createdAt: new Date(),
      isEmailVerified: false,
      ...input
    };
    users.set(user.id, user);
    usersByEmail.set(user.email.toLowerCase(), user.id);
    return user;
  },

  async getUserByEmail(email: string): Promise<AuthUserRecord | null> {
    const userId = usersByEmail.get(email.toLowerCase());
    return userId ? users.get(userId) ?? null : null;
  },

  async getUserById(userId: string): Promise<AuthUserRecord | null> {
    return users.get(userId) ?? null;
  },


  async listUsers(): Promise<AuthUserRecord[]> {
    return Array.from(users.values());
  },

  async updateUser(user: AuthUserRecord): Promise<void> {
    users.set(user.id, user);
    usersByEmail.set(user.email.toLowerCase(), user.id);
  },

  async saveRefreshToken(tokenHash: string, userId: string, expiresAt: Date): Promise<void> {
    refreshTokens.set(tokenHash, { tokenHash, userId, expiresAt });
  },

  async getRefreshToken(tokenHash: string): Promise<RefreshTokenRecord | null> {
    return refreshTokens.get(tokenHash) ?? null;
  },

  async revokeRefreshToken(tokenHash: string): Promise<void> {
    const token = refreshTokens.get(tokenHash);
    if (!token) return;
    token.revokedAt = new Date();
    refreshTokens.set(tokenHash, token);
  },

  async saveEmailVerificationToken(token: string, userId: string, expiresAt: Date): Promise<void> {
    verificationTokens.set(token, { token, userId, expiresAt });
  },

  async consumeEmailVerificationToken(token: string): Promise<VerificationTokenRecord | null> {
    const record = verificationTokens.get(token) ?? null;
    if (record) verificationTokens.delete(token);
    return record;
  },

  async savePasswordResetToken(token: string, userId: string, expiresAt: Date): Promise<void> {
    resetTokens.set(token, { token, userId, expiresAt });
  },

  async consumePasswordResetToken(token: string): Promise<PasswordResetTokenRecord | null> {
    const record = resetTokens.get(token) ?? null;
    if (record) resetTokens.delete(token);
    return record;
  }
};
