import React from "react";
import "antd/dist/antd.css";
import { DatePicker, TimePicker, message } from "antd";

function Calendar() {
  const onChange = () => {};
  return (
    <div>
      <h1>Please choose time of delivery</h1>
      <DatePicker onChange={onChange} />
      <TimePicker onChange={onChange} />
    </div>
  );
}

export default Calendar;
