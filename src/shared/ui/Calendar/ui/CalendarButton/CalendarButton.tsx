import classnames from "classnames";
import cn from "./CalendarButton.module.scss";

interface CalendarButtonProps {
  isCurrent: boolean;
  isDisabled: boolean;
  isSelected: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

export const CalendarButton = ({
  isCurrent,
  isDisabled,
  isSelected,
  onChange,
  children,
}: CalendarButtonProps) => {
  return (
    <button
      className={classnames(
        cn.button,
        isCurrent && cn.isCurrent,
        isSelected && cn.isSelected
      )}
      disabled={isDisabled}
      onClick={onChange}
    >
      {children}
    </button>
  );
};
