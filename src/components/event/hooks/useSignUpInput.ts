import { ChangeEvent, useState } from "react";

export const useSignUpInput = () => {
  const [user, setUser] = useState({
    email: "",
    lastName: "",
    firstName: "",
    password: "",
  });

  const [hidePassword, setHidePassword] = useState(false);

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };
  const toggleHidePassword = () => {
    // setHidePassword((prev) => !prev);
    setHidePassword(!hidePassword); // 두 방법다 이전 값의 반대를 가져옴.
  };
  return {
    onChangeUser,
    user,
    hidePassword,
    toggleHidePassword,
  };
};
