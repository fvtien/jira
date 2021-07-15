import jwtDecode from "jwt-decode";
import setAuthToken from "@/app/shared/utils/setAuthToken";
import { USER_LOADING, SET_CURRENT_USER } from "./auth.type";
import { SET_ERRORS } from "../error/error.type";
import { API } from "@/app/shared/apis/api";
import { User } from "@/app/shared/types/user.type";
import { SignUpData, LoginData } from "@/app/shared/types/response.type";

export const signUpUser =
  (userData: SignUpData, history: any) => (dispatch: any) => {
    API.post("/signup", userData)
      .then(() => history.push("/home"))
      .catch(error => {
        dispatch({
          type: SET_ERRORS,
          payload: error.response.data,
        });
      });
  };

export const setCurrentUser = (decoded: User) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  } as const;
};

export const loginUser = (userData: LoginData) => (dispatch: any) => {
  API.post("/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded: User = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(error => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data,
      });
    });
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  } as const;
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("jwtToken");
  setAuthToken("");
  dispatch(setCurrentUser(null));
};
