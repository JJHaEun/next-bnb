import { FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/user";
import { signUpAPI, SignUpAPIBody } from "../../../lib/api/auth";
import { usePasswordValidation } from "./usePasswordvalidation";
import { useSignUpSelector } from "./useSignUpSelect";
import { useValidateMode } from "./useValidateMode";

export const useSubmitSignUp =
  (user: SignUpAPIBody) => (closeModal: () => void) => {
    const dispatch = useDispatch();
    const { setValidateMode, validateMode } = useValidateMode();
    const {
      isPasswordHasNameOrEmail,
      isPasswordHasNumberOrSymbol,
      isPasswordMinLength,
    } = usePasswordValidation(user);
    const { birthDay, birthMonth, birthYear } = useSignUpSelector();
    useEffect(() => {
      // 컴포넌트 언마운트시 setValidateMode끄기
      return () => {
        setValidateMode(false);
      };
    }, []);

    const validateSignUpForm = () => {
      // input에 값이 없을때
      if (!user.email || !user.lastname || !user.firstname || !user.password) {
        return false;
      }

      // 비밀번호가 올바르지 않을때
      if (
        isPasswordHasNameOrEmail ||
        isPasswordHasNumberOrSymbol ||
        !isPasswordMinLength
      ) {
        return false;
      }

      // 생년월일 셀렉터 값이 없을때
      if (!birthDay || !birthMonth || !birthYear) {
        return false;
      }
      return true;
    };

    const onSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

      setValidateMode(true);
      console.log(validateSignUpForm());
      if (validateSignUpForm()) {
        try {
          const signUpBody = {
            email: user.email,
            lastname: user.lastname,
            firstname: user.firstname,
            password: user.password,
            birthday: new Date(
              `${birthDay}-${birthMonth?.replace("월", "")}-${birthYear}`
            ).toISOString(),
          };
          const { data } = await signUpAPI(signUpBody);
          dispatch(userActions.setLoggedInUser(data)); // 리덕스의 state에 저장하기
          closeModal();
          // alert("회원가입 완료!!");
        } catch (e) {
          console.log(e);
        }
      }
    };
    return {
      onSubmitSignUp,
      validateMode,
    };
  };
