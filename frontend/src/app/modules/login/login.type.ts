import { LoginData } from "@/app/shared/types/response.type";
import { AuthState } from "@/app/store/auth/auth.type";

export interface LoginProps {
  auth?: AuthState;
  errors: any;
  loginUser: (userData: LoginData) => void;
  handleSignUp: (page?: string) => void;
}
