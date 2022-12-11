import dayjs from "dayjs";

export const getMonthAndYearStr = (date: Date) => dayjs(date).format('MMMM YYYY');
