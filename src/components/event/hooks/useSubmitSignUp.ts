import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../../store";
import { commonActions } from "../../../../store/common";
import { userActions } from "../../../../store/user";
import { signUpAPI, SignUpAPIBody } from "../../../lib/api/auth";

export const useSubmitSignUp =
  (birthDate: { birthMonth: string; birthDay: string; birthYear: string }) =>
  (user: SignUpAPIBody) => {
    const validateMode = useSelector((state) => state.common.validateMode);
    const dispatch = useDispatch();
    const onSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

      dispatch(commonActions.setValidateMode(true));
      if (!user.email || !user.lastname || !user.firstname! || !user.password) {
        return undefined;
      }
      try {
        const signUpBody = {
          email: user.email,
          lastname: user.lastname,
          firstname: user.firstname,
          password: user.password,
          birthday: new Date(
            `${birthDate.birthDay}-${birthDate.birthMonth.replace("월", "")}-${
              birthDate.birthDay
            }`
          ).toISOString(),
        };
        const { data } = await signUpAPI(signUpBody);
        dispatch(userActions.setLoggedInUser(data)); // 리덕스의 state에 저장하기
        // closeModalPortal();
        alert("회원가입 완료!!");
      } catch (e) {
        console.log(e);
      }
    };
    return {
      onSubmitSignUp,
      validateMode,
    };
  };
