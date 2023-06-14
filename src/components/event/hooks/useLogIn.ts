import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../store/auth";

export const useLogIn = () => {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.id]: e.target.value,
    });
  };

  // 회원가입 모달로 변경하기
  const changeToSignUpModal = () => {
    dispatch(authActions.setAuthMode("signup"));
  };
  return {
    loginInput,
    onChangeLoginInput,
    changeToSignUpModal,
  };
};
