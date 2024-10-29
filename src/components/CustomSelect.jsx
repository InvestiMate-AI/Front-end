import React, { useState, useRef, useEffect } from "react";
import { IoCaretDown } from "react-icons/io5";
import * as C from "../styles/custom-select.style";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <C.CustomSelectContainer ref={selectRef}>
      <C.CustomSelectTrigger onClick={toggleDropdown}>
        <span style={{ flexGrow: 1 }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <IoCaretDown style={{ flexShrink: 0 }} />
      </C.CustomSelectTrigger>
      {isOpen && (
        <C.CustomSelectOptions>
          {options.map((option) => (
            <C.CustomSelectOption
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </C.CustomSelectOption>
          ))}
        </C.CustomSelectOptions>
      )}
    </C.CustomSelectContainer>
  );
};

export default CustomSelect;
