import { useState } from "react";

export const useShowModalSign = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const showSignModal = () => {
    setModalOpened((prev) => !prev);
  };
  return {
    modalOpened,
    showSignModal,
  };
};
