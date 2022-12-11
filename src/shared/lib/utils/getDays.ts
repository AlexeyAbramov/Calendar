import dayjs from "dayjs";

export const getDays = (date: Date) => {
    const dateDayjs = dayjs(date);

    const firstDayInMonth = dateDayjs.startOf('month');
    const daysInMonth = dateDayjs.daysInMonth();

    let days = [];

    while (days.length < daysInMonth) {
        days.push(firstDayInMonth.add(days.length, 'day').toDate());
    }

    return days;
}