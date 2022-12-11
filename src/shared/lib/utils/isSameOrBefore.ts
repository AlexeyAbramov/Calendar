import dayjs from "dayjs";

export const isSameOrBefore = (testDate: Date, boundaryDate: Date) => {
    const testDateDayjs = dayjs(testDate);

    const isSame = testDateDayjs.isSame(boundaryDate);
    const isBefore = testDateDayjs.isBefore(boundaryDate);

    return isSame || isBefore;
}