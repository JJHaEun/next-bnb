import { logoutAPI } from "../../../lib/api/auth";

export const useLogout = () => {
  const logout = async () => {
    try {
      await logoutAPI();
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  };
  return {
    logout,
  };
};
