import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const currentDate = new Date();
  const [maxDateString, setMaxDateString] = useState(currentDate.toISOString());
  const [maxDate, setMaxDate] = useState(currentDate);

  useEffect(() => {
    setMaxDate(new Date(maxDateString));
  }, [maxDateString]);  

  const handleChange = (event) => {
    setMaxDateString(event.target.value);
  };

  return (
    <section className="App">
      <div className="label">
        <span>{maxDateString}</span>
      </div>

      <div className="label">
        <span>Max Date</span>
      </div>

      <div className="block">
        <input
          type="text"
          name="date_max_input"
          defaultValue={maxDateString}
          onChange={handleChange}
        ></input>
      </div>

      <div className="label">
        <span>Date Picker</span>
      </div>

      <div className="block">
        <DatePicker minDate={new Date()} maxDate={maxDate}></DatePicker>
      </div>      
    </section>
  );
}
