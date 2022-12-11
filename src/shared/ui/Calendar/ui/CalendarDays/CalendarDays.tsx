import dayjs from "dayjs";

import { getCalendarDays } from "../../../../lib/utils";
import { CalendarButton } from "../CalendarButton/CalendarButton";

import cn from "./CalendarDays.module.scss";

export const CalendarDays = ({
  viewingDate,
  selectedDate,
  onChange,
}: {
  viewingDate: Date;
  selectedDate: Date | null;
  onChange: (date: Date) => void;
}) => {
  const days = getCalendarDays(viewingDate);

  return (
    <div className={cn.calendarDaysWrapper}>
      {days.map((day, index) => {
        const isCurrent = dayjs().isSame(day, "day");
        const isSameMonth = dayjs(viewingDate).isSame(day, "month");
        const isSelected = dayjs(selectedDate).startOf("day").isSame(day);

        return (
          <CalendarButton
            key={index}
            isCurrent={isCurrent}
            isDisabled={!isSameMonth}
            isSelected={isSelected}
            onChange={() => onChange(day)}
          >
            {dayjs(day).format("D")}
          </CalendarButton>
        );
      })}
    </div>
  );
};
