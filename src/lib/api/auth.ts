import { axios } from ".";
import { UserType } from "../../../types/user";

export interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday?: string;
}

export const signUpAPI = async (body: SignUpAPIBody) => {
  await axios.post<UserType>("/api/auth/signUp", body);
};
