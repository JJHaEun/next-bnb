import { useSelector } from "../../../store";
import LogInModal from "./logInModal";
import SignUpModal from "./signUpModal";

interface IPropsAuth {
  closeModal: () => void;
}

export default function AuthModal({ closeModal }: IPropsAuth): JSX.Element {
  const authMode = useSelector((state) => state.auth.authMode);
  return (
    <>
      {authMode === "signup" && <SignUpModal closeModal={closeModal} />}
      {authMode === "login" && <LogInModal closeModal={closeModal} />}
    </>
  );
}
