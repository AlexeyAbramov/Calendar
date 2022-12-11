import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru"; // import locale
import updateLocale from "dayjs/plugin/updateLocale";

import { Calendar } from "../shared/ui";

import cn from "./App.module.scss";

dayjs.extend(updateLocale);
dayjs.updateLocale("ru", {
  months: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
});
dayjs.locale("ru");

export const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className={cn.appWrapper}>
      <Calendar
        startDate={new Date("2021-01-01")}
        endDate={new Date("2024-01-01")}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
        onToday
      />
    </div>
  );
};
