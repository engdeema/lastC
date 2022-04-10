import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiFetch from "../Store/instance";
import { Button, Input, Select } from "antd";
import Calendar from "./Calendar";
import moment from "moment";
const Option = Select.Option;
function Order() {
  const { id } = useParams();
  const [cDate, setCDate] = useState(moment());
  const [time, setTime] = useState(moment());
  const [address, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await apiFetch.post("/order/addresses");
      const resultData = result.data;
    })();
  });
  const handleSubmit = async () => {
    const data = {
      id,
      date: cDate.format("YYYY-MM-DD"),
      time: time.format("HH:MM"),
    };
    let result = await apiFetch.post("/order", data);

    const resultData = result.data;
    console.log(resultData);
  };
  return (
    <div>
      <Input placeholder="name" />
      <Input placeholder="email" />
      <Input placeholder="phone number" />
      <Input placeholder="note" />

      <Input placeholder="extraDriverNote" />

      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} disabled>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
        <Option value="lucy">Lucy</Option>
      </Select>

      <Calendar
        onDateChange={(value) => setCDate(value)}
        onTimeChange={(value) => setTime(value)}
        date={cDate}
        time={time}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default Order;
