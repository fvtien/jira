import { SignUpData } from "@/app/shared/types/response.type";
import { AuthState } from "@/app/store/auth/auth.type";

export interface SignUpProps {
  auth?: AuthState;
  errors?: any;
  signUpUser: (userData: SignUpData, history: any) => void;
  handleSignUp: (page?: string) => any;
}
