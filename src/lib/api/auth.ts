import { axios } from ".";
import { UserType } from "../../../types/user";

export interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday?: string;
}

export interface LoginAPIBody {
  email: string;
  password: string;
}

export const signUpAPI = async (body: SignUpAPIBody) =>
  await axios.post<UserType>("/api/auth/signUp", body);

export const loginAPI = async (body: LoginAPIBody) =>
  await axios.post<UserType>("/api/auth/login", body);

// 로그인 유지하기
export const meAPI = async () => await axios.get<UserType>("/api/auth/me");

// 로그아웃 api를 사용하는 함수
export const logoutAPI = async () => await axios.delete("/api/auth/logout");
