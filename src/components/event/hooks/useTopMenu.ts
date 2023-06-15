import { useState } from "react";

export const useTopMenu = () => {
  const [isUserMenuOpend, setIsUserMenuOpend] = useState(false);
  const menuOpendOutsideClick = () => {
    if (isUserMenuOpend === true) {
      setIsUserMenuOpend(false);
    }
  };
  const menuOpen = () => {
    setIsUserMenuOpend((prev) => !prev);
  };
  return {
    menuOpendOutsideClick,
    menuOpen,
    isUserMenuOpend,
  };
};
