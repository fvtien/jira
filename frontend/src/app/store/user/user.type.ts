import { User } from "@/app/shared/types/user.type";

export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

export interface UsersState {
  users: User[];
}

export interface SetUsers {
  type: typeof SET_USERS;
  payload: User[];
}

export interface SetUser {
  type: typeof SET_USER;
  payload: User;
}

export interface AddUser {
  type: typeof ADD_USER;
  payload: User;
}

export interface DeleteUser {
  type: typeof DELETE_USER;
  payload: User;
}

export type UsersActionTypes = SetUsers | SetUser | AddUser | DeleteUser;
