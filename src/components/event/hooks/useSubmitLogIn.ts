import { FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/user";
import { loginAPI, LoginAPIBody } from "../../../lib/api/auth";
import { useValidateMode } from "./useValidateMode";

export const useSubmitLogIn =
  (loginInput: LoginAPIBody) => (closeModal: () => void) => {
    const { setValidateMode, validateMode } = useValidateMode();
    const dispatch = useDispatch();
    // 컴포넌트 사라질때 validateMode끄기
    useEffect(() => {
      return () => {
        setValidateMode(false);
      };
    }, []);
    const onSubmitLogIn = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setValidateMode(true);

      if (!loginInput.email || !loginInput.password) {
        alert("이메일과 비밀번호를 입력해주세요");
      } else {
        const loginBody = {
          email: loginInput.email,
          password: loginInput.password,
        };

        try {
          const { data } = await loginAPI(loginBody);
          // 로그인에 성공했을 경우 유저 정보 값을 리덕스에 저장하고 로그인 모달 닫기
          dispatch(userActions.setLoggedInUser(data));
          closeModal();
          close;
        } catch (e) {
          console.log(e);
        }
      }
    };
    return {
      onSubmitLogIn,
      validateMode,
    };
  };
