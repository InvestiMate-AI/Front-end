import React, { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import { saveMessages, getMessages } from "../../apis/chat";
import * as C from "../../styles/chat-room.style";
import { IoSend } from "react-icons/io5";

export default function ChatRoom({ threadId, assistantId, chatRoomId }) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const latestMessageRef = useRef("");

  useEffect(() => {
    const fetchMessages = async () => {
      const prevMessages = await getMessages(chatRoomId);
      console.log("prevMessages:", prevMessages); // API 호출 결과 확인
      setMessages(prevMessages);
    };
    fetchMessages();
  }, [chatRoomId]);

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
      const question = inputValue;
      setMessages((prevMessages) => [
        ...prevMessages,
        { question: question, answer: "" },
      ]);
      latestMessageRef.current = "";
      setInputValue("");

      try {
        const run = openai.beta.threads.runs
          .stream(threadId, {
            assistant_id: assistantId,
            instructions: `반드시 주어진 기업 정기 보고서 파일에서 정보를 찾아서 아래 질문에 대해 한국어로 답변해줘. ${question}`,
            tools: [{ type: "file_search" }, { type: "code_interpreter" }],
            temperature: 0.1,
            stream: true,
          })
          .on("textCreated", () => {
            console.log(question);
          })
          .on("textDelta", (textDelta) => {
            latestMessageRef.current += textDelta.value;
            setMessages((prevMessages) => {
              const updatedMessages = [...prevMessages];
              updatedMessages[updatedMessages.length - 1].answer =
                latestMessageRef.current;
              return updatedMessages;
            });
            console.log("textDelta", textDelta.value);
          })
          .on("end", async () => {
            saveAndLogMessages(question, latestMessageRef.current, chatRoomId);
          });
      } catch (error) {
        console.error("Error starting chat:", error);
      }
    }
  };

  const saveAndLogMessages = async (question, answer, chatRoomId) => {
    const response = await saveMessages(question, answer, chatRoomId);
    console.log(question, answer, chatRoomId);
    console.log(response);
  };

  return (
    <C.ChatRoomLayout>
      <C.ChatRoomMain>
        <C.MessagesContainer>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.question && (
                <C.UserMessageItem>{message.question}</C.UserMessageItem>
              )}
              {message.answer && (
                <C.BotMessageItem>{message.answer}</C.BotMessageItem>
              )}
            </React.Fragment>
          ))}
        </C.MessagesContainer>
      </C.ChatRoomMain>
      <C.ChatRoomFooter>
        <C.MessageInputContainer>
          <C.MessageInput
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            placeholder="메시지를 입력하세요"
          />
          <C.SendButton onClick={handleSendMessage}>
            <IoSend style={{ fontSize: "1rem" }} />
          </C.SendButton>
        </C.MessageInputContainer>
      </C.ChatRoomFooter>
    </C.ChatRoomLayout>
  );
}
