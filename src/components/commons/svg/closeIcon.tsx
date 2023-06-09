import { useShowModalSign } from "../../event/hooks/useModal";

interface IPropsCloseIcon {
  className: string;
  onClick: () => void;
}

export default function CloseIcon({
  className,
  onClick,
}: IPropsCloseIcon): JSX.Element {
  return (
    <span className={className} onClick={onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 6.55009L15.5501 0L16 0.449909L9.44991 7L16 13.5501L15.5501 14L9 7.44991L2.44991 14L2 13.5501L8.55009 7L2 0.449909L2.44991 0L9 6.55009Z"
          fill="black"
        />
      </svg>
    </span>
  );
}
