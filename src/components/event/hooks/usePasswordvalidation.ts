import { useMemo } from "react";
import { SignUpAPIBody } from "../../../lib/api/auth";

export const usePasswordValidation = (user: SignUpAPIBody) => {
  // 비밀번호 최소자리
  // const PASSWORD_MIN_LENGTH = 8;

  // password가 이름이나 이메일을 포함하는가
  // password는 본인 이름이나 메일주소를 포함해서는 안됨.

  const isPasswordHasNameOrEmail = useMemo(
    () =>
      !user.password ||
      !user.lastname ||
      user.password.includes(user.lastname) ||
      user.password.includes(user.email.split("@")[0]),
    [user.password, user.lastname, user.email]
  );

  const isPasswordMinLength = useMemo(
    () => !!user.password && user.password.length >= 8,
    [user.password]
  );
  const isPasswordHasNumberOrSymbol = useMemo(
    () =>
      // 특수기호 표함여부
      // /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g
      // 숫자 포함여부
      // /[0-9]/g
      !(
        /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g.test(user.password) ||
        /[0-9]/g.test(user.password)
      ),
    [user.password]
  );

  return {
    isPasswordHasNameOrEmail,
    isPasswordMinLength,
    isPasswordHasNumberOrSymbol,
  };
};
