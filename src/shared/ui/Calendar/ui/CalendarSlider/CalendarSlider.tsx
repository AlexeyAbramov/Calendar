import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { getMonthAndYearStr } from "../../../../lib/utils";
import { Button } from "../../../Button/Button";

import cn from "./CalendarSlider.module.scss";

interface CalendarSliderProps {
  viewingDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  isPreviousClickDisabled: boolean;
  isNextClickDisabled: boolean;
}

export const CalendarSlider = ({
  viewingDate,
  onPrevMonth,
  onNextMonth,
  isPreviousClickDisabled,
  isNextClickDisabled,
}: CalendarSliderProps) => {
  const viewingDateStr = getMonthAndYearStr(viewingDate);

  return (
    <div className={cn.slider}>
      <Button
        iconLeft={<RiArrowLeftSLine />}
        disabled={isPreviousClickDisabled}
        onClick={onPrevMonth}
      />

      <div>{viewingDateStr}</div>

      <Button
        iconLeft={<RiArrowRightSLine />}
        disabled={isNextClickDisabled}
        onClick={onNextMonth}
      />
    </div>
  );
};
