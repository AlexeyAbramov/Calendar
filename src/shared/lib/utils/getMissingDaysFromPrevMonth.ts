import dayjs from "dayjs";

const weeks = [6, 0, 1, 2, 3, 4, 5];

export const getMissingDaysFromPrevMonth = (date: Date) => {
    const dateDayjs = dayjs(date);

    const firstDayInMonth = dateDayjs.startOf('month');
    const weekNumberFromFirstDay = firstDayInMonth.day();

    const missingDays = weeks[weekNumberFromFirstDay];

    let result = [];

    while (result.length < missingDays) {
        result.push(firstDayInMonth.add(result.length - missingDays, 'day').toDate())
    }



    return result;
}