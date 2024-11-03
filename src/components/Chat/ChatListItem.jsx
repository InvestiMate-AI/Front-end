import React, { useState, useEffect, useRef } from "react";
import * as C from "../../styles/chat-list-item.style";
import { IoMdMore } from "react-icons/io";

export default function ChatListItem({ chat, onClick, onDeleteChat }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const popupRef = useRef(null);

  const handleButtonClick = (event) => {
    // 마우스 위치에 팝업을 띄우기 위한 기본 위치
    let popupX = event.clientX;
    let popupY = event.clientY;

    const popupWidth = 100; // 예상 팝업 너비
    const popupHeight = 100; // 예상 팝업 높이

    // 화면 너비를 초과하면 왼쪽으로 이동
    if (popupX + popupWidth > window.innerWidth) {
      popupX = window.innerWidth - popupWidth - 10; // 10px 여유를 둠
    }

    // 화면 높이를 초과하면 위로 이동
    if (popupY + popupHeight > window.innerHeight) {
      popupY = window.innerHeight - popupHeight - 10; // 10px 여유를 둠
    }

    // 팝업 위치 업데이트
    setPopupPosition({ x: popupX, y: popupY });
    setPopupVisible((prev) => !prev);
  };

  // 외부 클릭 감지
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <C.ChatItemLayout onClick={onClick}>
      <C.ChatItemRow>
        <C.ChatItemColumn>
          <div className="chat-item-header">
            <div>
              {chat.reportCompany} {chat.reportYear}년 {chat.reportType}
            </div>
          </div>
          <div className="chat-item-content">{/* {chat.title} */}</div>
        </C.ChatItemColumn>
        <C.ChatItemButtonContainer>
          <C.ChatItemButton onClick={(event) => handleButtonClick(event)}>
            <IoMdMore
              style={{
                width: "1.5rem",
                height: "1.5rem",
                minWidth: "1.5rem",
                minHeight: "1.5rem",
                color: "inherit",
              }}
            />
          </C.ChatItemButton>
        </C.ChatItemButtonContainer>
      </C.ChatItemRow>
      {popupVisible && (
        <div
          ref={popupRef}
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            top: popupPosition.y,
            left: popupPosition.x,
            backgroundColor: "white",
            border: "1px solid white",
            borderRadius: "1rem",
            padding: "1rem",
            zIndex: 1000,
            boxShadow: "0 0 4px #d3d3d3",
          }}
        >
          <C.PopUpMenuButton
            color="#FF000050"
            hoverColor="#FF0000FF"
            style={{ margin: "0" }}
            onClick={onDeleteChat} // 삭제 핸들러 호출
          >
            삭제
          </C.PopUpMenuButton>
        </div>
      )}
    </C.ChatItemLayout>
  );
}
