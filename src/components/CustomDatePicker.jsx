import React, { useState } from "react";
import * as C from "../styles/custom-date-picker.style";

const CustomDatePicker = ({ label, selectedDate, onChange }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [inputDate, setInputDate] = useState(selectedDate || "");

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
    onChange(event.target.value);
    setIsCalendarVisible(false);
  };

  return (
    <C.CustomDateContainer>
      <C.CustomDatePicker>
        <label>{label}</label>
        <div>
          <C.CustomDatePickerInput
            type="text"
            value={inputDate}
            placeholder="YYYY-MM-DD"
            onClick={toggleCalendar}
            readOnly
          />
          {isCalendarVisible && (
            <C.CustomDatePickerInput
              type="date"
              value={inputDate}
              onChange={handleDateChange}
              style={{ display: "block" }}
            />
          )}
        </div>
      </C.CustomDatePicker>
    </C.CustomDateContainer>
  );
};

export default CustomDatePicker;
