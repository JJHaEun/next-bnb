import { useState } from "react";

export const useOnFocusPassword = () => {
  const [passwordFocused, setPasswordFocused] = useState(false);
  const onFocusPassword = () => {
    setPasswordFocused(true);
  };
  return {
    onFocusPassword,
    passwordFocused,
  };
};
