import { INITIAL_VIEWING_DATE, useCalendarBehavior } from "../../lib";
import { Button } from "../Button/Button";
import { CalendarSlider } from "./ui/CalendarSlider/CalendarSlider";
import { CalendarDays } from "./ui/CalendarDays/CalendarDays";
import { CalendarDaysOfWeek } from "./ui/CalendarDaysOfWeek/CalendarDaysOfWeek";

import cn from "./Calendar.module.scss";

interface CalendarProps {
  startDate: Date;
  endDate: Date;
  selectedDate: Date | null;
  onToday?: boolean;
  onChange: (date: Date) => void;
}

export const Calendar = ({
  startDate,
  endDate,
  selectedDate,
  onToday,
  onChange,
}: CalendarProps) => {
  const {
    viewingDate,
    onPrevMonth,
    onNextMonth,
    isPreviousClickDisabled,
    isNextClickDisabled,
    onTodayClick,
  } = useCalendarBehavior({
    currentDate: INITIAL_VIEWING_DATE,
    startDate,
    endDate,
  });

  return (
    <div className={cn.calendar}>
      <CalendarSlider
        viewingDate={viewingDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
        isPreviousClickDisabled={isPreviousClickDisabled}
        isNextClickDisabled={isNextClickDisabled}
      />
      <CalendarDaysOfWeek />
      <CalendarDays
        viewingDate={viewingDate}
        selectedDate={selectedDate}
        onChange={onChange}
      />
      {onToday && <Button onClick={onTodayClick}>Сегодня</Button>}
    </div>
  );
};
