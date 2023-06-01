import { axios } from ".";

export interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday?: string;
}

export const signUpAPI = async (body: SignUpAPIBody) => {
  await axios.post("/api/auth/signUp", body);
};
