import React from "react";

import cn from "./CalendarDaysOfWeek.module.scss";

const CALENDAR_DAYS_OF_WEEK = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export class CalendarDaysOfWeek extends React.PureComponent {
  render() {
    return (
      <div className={cn.daysOfWeek}>
        {CALENDAR_DAYS_OF_WEEK.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    );
  }
}
