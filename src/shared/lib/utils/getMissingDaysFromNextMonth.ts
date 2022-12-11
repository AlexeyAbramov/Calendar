import dayjs from "dayjs";

const weeks = [1, 7, 6, 5, 4, 3, 2];

export const getMissingDaysFromNextMonth = (date: Date) => {
    const dateDayjs = dayjs(date);

    const firstDayInNextMonth = dateDayjs.add(1, 'month').startOf('month');
    const numberOfFirstDay = firstDayInNextMonth.day();

    const missingDays = weeks[numberOfFirstDay];

    let result = [];

    while (result.length < missingDays) {
        result.push(firstDayInNextMonth.add(result.length, 'day').toDate())
    }

    return result;
}