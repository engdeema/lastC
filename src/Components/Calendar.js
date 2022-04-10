import React, { useState } from "react";
import "antd/dist/antd.css";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";

function Calendar({ onDateChange, onTimeChange, date, time }) {
  return (
    <div>
      <h1>Please choose time of delivery</h1>
      <DatePicker
        value={date}
        disabledDate={(crDate) => crDate.isBefore()}
        onChange={(value) => onDateChange(value ? value : moment())}
      />
      <TimePicker
        value={time}
        onTimeChange={onTimeChange}
        disabledTime={(cTime) => {
          const allPeriod = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 23,
          ];
          const eveningPeriod = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 23,
          ];
          let noPeriod = [];
          for (let i = 0; i <= 23; i++) {
            noPeriod.push(i);
          }
          let period = [];
          const isToday = moment(date).isSame(moment(), "day");
          if (isToday) {
            const hours = +cTime.format("H");
            if (hours <= 11) {
              period = allPeriod;
            } else if (hours <= 14) {
              period = eveningPeriod;
            } else {
              period = noPeriod;
            }
          } else if (date.isBefore()) {
            period = noPeriod;
          } else {
            period = allPeriod;
          }

          return {
            disabledHours: () => period,
          };
        }}
      />
    </div>
  );
}

export default Calendar;
