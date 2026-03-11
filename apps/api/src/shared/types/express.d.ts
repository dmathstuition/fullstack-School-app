import type { JwtPayload } from "jsonwebtoken";

export interface AuthUser extends JwtPayload {
  userId: string;
  schoolId?: string;
  roles: string[];
}
