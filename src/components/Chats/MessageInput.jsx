import React, { useState } from "react";
import styled from "styled-components";

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const StyledMessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function MessageInput() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      console.log(inputValue);
      setInputValue("");
    }
  };

  return (
    <MessageInputContainer>
      <StyledMessageInput
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <SendButton onClick={handleSendMessage}>Send</SendButton>
    </MessageInputContainer>
  );
}
