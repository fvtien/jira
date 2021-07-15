import { API } from "./api";
import { User, UpdateUser, GetUsers, GetUserByMail } from "../types/user.type";

export const updateUser = async (
  id: string,
  user: Partial<User>
): Promise<UpdateUser> => {
  try {
    const { data } = await API.put(`/user/${id}`, user);
    return data;
  } catch (error) {
    return error;
  }
};

export const getUsers = async (): Promise<GetUsers> => {
  try {
    const { data } = await API.get("/users");
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserByMail = async (email: string): Promise<GetUserByMail> => {
  try {
    const { data } = await API.get(`/user/${email}`);
    return data;
  } catch (error) {
    return error;
  }
};
