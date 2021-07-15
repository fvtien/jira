export type UserRoles = "Administrator" | "Client" | "Employee";

export interface UserStatus {
  text: string;
  editedAt: string;
  until?: string;
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: UserRoles;
  status: UserStatus;
}

export interface UpdateUser {
  success: boolean;
  message: string;
  error: string;
}

export interface GetUsers {
  success: boolean;
  error?: string;
  data: User[];
}

export interface GetUserByMail {
  success: boolean;
  error: string;
  data: User;
}
