import dayjs from "dayjs";

export const isSameOrAfter = (testDate: Date, boundaryDate: Date) => {
    const testDateDayjs = dayjs(testDate);

    const isSame = testDateDayjs.isSame(boundaryDate);
    const isAfter = testDateDayjs.isAfter(boundaryDate);

    return isSame || isAfter;
}