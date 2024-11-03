import React, { useState } from "react";
import * as C from "../styles/custom-date-picker.style";

const CustomDatePicker = ({ label, selectedDate, onChange }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [inputDate, setInputDate] = useState(selectedDate || "");

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
    onChange(event.target.value);
    setIsCalendarVisible(false);
  };

  return (
    <C.CustomDateContainer>
      <C.CustomDatePicker
        type="date"
        value={inputDate}
        onChange={handleDateChange}
        style={{ display: "block" }}
      />
    </C.CustomDateContainer>
  );
};

export default CustomDatePicker;
