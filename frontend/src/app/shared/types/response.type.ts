export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type LoginData = Omit<SignUpData, "firstName" | "lastName">;
