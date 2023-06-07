import { SelectHTMLAttributes } from "react";
import { useSelector } from "../../../store";
import { SelectorContainer } from "../styles/select/selector.styles";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  value?: string[];
  disableOptions?: string[];
  isValid?: boolean;
}

export default function Selector({
  options = [],
  disableOptions = [],
  isValid,
  ...props
}: ISelectProps): JSX.Element {
  //options = [] 이것은 options값이 없을 경우의 기본값을 설정한것!!
  const validateMode = useSelector((state) => state.common.validateMode);
  return (
    <SelectorContainer isValid={!!isValid} validateMode={validateMode}>
      <select {...props}>
        {options.map((option, i) => (
          <option
            key={i}
            value={option}
            disabled={disableOptions.includes(option)} // 또는 disableOptions을 사용하지 않고 option을 사용하여 option이 "일"이거나 "월"이거나 "년"일때라고 넣어주면 됨.(option === "일" || option === "월" || option === "년")
          >
            {option}
          </option>
        ))}
      </select>
    </SelectorContainer>
  );
}
