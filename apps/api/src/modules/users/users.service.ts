import { authRepository } from "../auth/auth.repository";
import type { UpdateUserRolesInput } from "./users.schemas";

export const listUsers = async (schoolId?: string) => {
  const users = await authRepository.listUsers();

  return users
    .filter((user) => (schoolId ? user.schoolId === schoolId : true))
    .map((user) => ({
      id: user.id,
      schoolId: user.schoolId,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      roles: user.roles,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt.toISOString()
    }));
};

export const getUserById = async (userId: string) => {
  const user = await authRepository.getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    schoolId: user.schoolId,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    roles: user.roles,
    isEmailVerified: user.isEmailVerified,
    createdAt: user.createdAt.toISOString()
  };
};

export const updateUserRoles = async (userId: string, input: UpdateUserRolesInput) => {
  const user = await authRepository.getUserById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  user.roles = input.roles;
  await authRepository.updateUser(user);

  return {
    message: "User roles updated successfully",
    user: {
      id: user.id,
      roles: user.roles
    }
  };
};
