import { ChangeEvent, useState } from "react";

export const useSignUpSelector = () => {
  const [birthDate, setBirthDate] = useState({
    birthMonth: "",
    birthDay: "",
    birthYear: "",
  });

  const onChangeBirthDate = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBirthDate((prevBirthDate) => ({
      ...prevBirthDate,
      [name]: value,
    }));
  };

  return {
    birthDate,
    onChangeBirthDate,
  };
};
