import { useState } from "react";
import dayjs from "dayjs"

import { isSameOrBefore, isSameOrAfter } from "../utils";
import { INITIAL_VIEWING_DATE } from "../constants";

export const useCalendarBehavior = ({ currentDate, startDate, endDate }: { currentDate: Date; startDate: Date; endDate: Date }) => {
    const [viewingDate, setViewingDate] = useState(currentDate);

    const currentDateDayjs = dayjs(viewingDate);

    const prevMonth = currentDateDayjs.add(-1, 'month').toDate();
    const nextMonth = currentDateDayjs.add(1, 'month').toDate();

    return {
        viewingDate,
        onPrevMonth: () => setViewingDate(prevMonth),
        onNextMonth: () => setViewingDate(nextMonth),
        isPreviousClickDisabled: isSameOrBefore(prevMonth, startDate),
        isNextClickDisabled: isSameOrAfter(nextMonth, endDate),
        onTodayClick: () => setViewingDate(INITIAL_VIEWING_DATE)
    }
}