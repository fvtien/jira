import { SET_USERS, SET_USER, ADD_USER, DELETE_USER } from "./user.type";
import { User } from "@/app/shared/types/user.type";

export const setUsers = (users: User[]) => {
  return {
    type: SET_USERS,
    payload: users,
  } as const;
};

export const setUser = (user: User) => {
  return {
    type: SET_USER,
    payload: user,
  } as const;
};

export const addUser = (user: User) => {
  return {
    type: ADD_USER,
    payload: user,
  } as const;
};

export const deleteUser = (user: User) => {
  return {
    type: DELETE_USER,
    payload: user,
  } as const;
};
