import React, { useState, useRef, useEffect } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // 버튼 클릭 시 메뉴 열기/닫기 토글
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 외부 클릭 감지하여 메뉴 닫기
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <div>
      <button onClick={toggleMenu}>메뉴 열기</button>
      {isOpen && (
        <div
          ref={menuRef}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "white",
            border: "1px solid gray",
          }}
        >
          <p>메뉴 항목 1</p>
          <p>메뉴 항목 2</p>
          <p>메뉴 항목 3</p>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
