import { useDispatch } from "react-redux";
import { userActions } from "../../../../store/user";
import { logoutAPI } from "../../../lib/api/auth";

export const useLogout = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  };
  return {
    logout,
  };
};
