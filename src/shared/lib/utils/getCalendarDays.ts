import { getDays } from "./getDays";
import { getMissingDaysFromNextMonth } from "./getMissingDaysFromNextMonth";
import { getMissingDaysFromPrevMonth } from "./getMissingDaysFromPrevMonth";

export const getCalendarDays = (date: Date) => {
    const missingDaysFromPrevMonth = getMissingDaysFromPrevMonth(date);

    const daysFromCurrentMonth = getDays(date);

    const missingDaysFromNextMonth = getMissingDaysFromNextMonth(date);

    return [...missingDaysFromPrevMonth, ...daysFromCurrentMonth, ...missingDaysFromNextMonth];
}