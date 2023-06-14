import { FormEvent } from "react";
import { loginAPI, LoginAPIBody } from "../../../lib/api/auth";

export const useSubmitLogIn = (loginInput: LoginAPIBody) => {
  const onSubmitLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginInput.email || !loginInput.password) {
      alert("이메일과 비밀번호를 입력해주세요");
    } else {
      const loginBody = {
        email: loginInput.email,
        password: loginInput.password,
      };

      try {
        const { data } = await loginAPI(loginBody);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return {
    onSubmitLogIn,
  };
};
