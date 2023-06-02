import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/user";
import { signUpAPI, SignUpAPIBody } from "../../../lib/api/auth";

export const useSubmitSignUp =
  (birthDate: { birthMonth: string; birthDay: string; birthYear: string }) =>
  (user: SignUpAPIBody) => {
    const dispatch = useDispatch();
    const onSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

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
        dispatch(userActions.setLoggedInUser(data));
        // closeModalPortal();
        alert("회원가입 완료!!");
      } catch (e) {
        console.log(e);
      }
    };
    return {
      onSubmitSignUp,
    };
  };
