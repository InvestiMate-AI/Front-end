import React, { useState } from "react";
import styled from "styled-components";
import OpenAI from "openai";
import { saveMessages, getMessages } from "../../apis/chat";

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

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
  width: 90%;
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

const MessagesContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 300px;
  overflow-y: auto;
`;

const Message = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

export default function MessageInput({ threadId, assistantId, chatRoomId }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentAssistantMessage, setCurrentAssistantMessage] = useState("");

  const openai = new OpenAI({
    // organization: process.env.REACT_APP_ORGANIZATION_ID,
    // project: process.env.REACT_APP_PROJECT_ID,
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      // Add user message to the messages state
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: inputValue },
      ]);

      setInputValue("");
      setCurrentAssistantMessage("");

      try {
        const stream = openai.beta.threads.runs
          .stream(threadId, {
            assistant_id: assistantId,
            instructions: `반드시 주어진 기업 정기 보고서 파일에서 정보를 찾아서 아래 질문에 대해 한국어로 답변해줘. ${inputValue}`,
            tools: [{ type: "file_search" }, { type: "code_interpreter" }],
            temperature: 0.1,
            stream: true,
          })
          .on("textCreated", () => {
            setCurrentAssistantMessage(""); // Reset buffer when a new text is created
          })
          .on("textDelta", (textDelta) => {
            setCurrentAssistantMessage(
              (prevMessage) => prevMessage + textDelta.value
            ); // Accumulate text in buffer
          })
          .on("textDeltaEnd", () => {
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: "assistant", text: currentAssistantMessage },
            ]);
            setCurrentAssistantMessage(""); // Clear buffer after processing the complete message
          })
          .on("toolCallCreated", (toolCall) => {
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                sender: "assistant",
                text: `\nassistant > ${toolCall.type}\n\n`,
              },
            ]);
          });
      } catch (error) {
        console.error("Error starting chat:", error);
      }

      const response = saveMessages(
        inputValue,
        currentAssistantMessage,
        chatRoomId
      );
      console.log(response);

      // let res = async () => {
      //   const response = await saveMessages(
      //     inputValue,
      //     currentAssistantMessage,
      //     chatRoomId
      //   );
      //   console.log(response);
      // };
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index}>
            <strong>
              {message.sender === "user" ? "You: " : "Assistant: "}
            </strong>
            {message.text}
          </Message>
        ))}
        {currentAssistantMessage && (
          <Message>
            <strong>Assistant: </strong>
            {currentAssistantMessage}
          </Message>
        )}
      </MessagesContainer>
      <MessageInputContainer>
        <StyledMessageInput
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </MessageInputContainer>
    </ChatContainer>
  );
}
