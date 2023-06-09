import { ChangeEvent, useState } from "react";

export const useSignUpSelector = () => {
  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  const onChangeBirthYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(e.target.value);
  };
  const onChangeBirthMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(e.target.value);
  };
  const onChangeBirthDay = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(e.target.value);
  };
  return {
    birthYear,
    birthDay,
    birthMonth,
    onChangeBirthYear,
    onChangeBirthMonth,
    onChangeBirthDay,
  };
};
