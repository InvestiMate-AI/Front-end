import React, { useState } from "react";
import OpenAI from "openai";
import { saveMessages, getMessages } from "../../apis/chat";
import * as C from "../../styles/chat-room.style";

export default function ChatRoom({ threadId, assistantId, chatRoomId }) {
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
    <C.ChatContainer>
      <C.MessagesContainer>
        {messages.map((message, index) => (
          <C.Message key={index}>
            <strong>
              {message.sender === "user" ? "You: " : "Assistant: "}
            </strong>
            {message.text}
          </C.Message>
        ))}
        {currentAssistantMessage && (
          <C.Message>
            <strong>Assistant: </strong>
            {currentAssistantMessage}
          </C.Message>
        )}
      </C.MessagesContainer>
      <C.MessageInputContainer>
        <C.StyledMessageInput
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <C.SendButton onClick={handleSendMessage}>Send</C.SendButton>
      </C.MessageInputContainer>
    </C.ChatContainer>
  );
}
